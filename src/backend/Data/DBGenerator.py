import os
import sqlite3
from importlib.machinery import SourceFileLoader
from typing import get_type_hints

conn = sqlite3.connect('Data/database/db.sqlite')
cursor = conn.cursor()

models_folder = 'Models'

# itera sobre os arquivos na pasta de modelos
for filename in os.listdir(models_folder):
    if filename.endswith('.py'):
        # arquivo do modelo
        module_name = os.path.splitext(filename)[0]
        module = SourceFileLoader(module_name, os.path.join(models_folder, filename)).load_module()

        name_of_file = os.path.splitext(filename)[0]

        # nome da tabela e o modelo do arquivo
        table_name = getattr(module, 'table_name', None)
        model = getattr(module, name_of_file, None)

        # verifica se o modelo e o nome da tabela foram encontrados
        if table_name and model:
            # inspeciona os tipos para obter informações sobre os campos
            field_types = get_type_hints(model)
            columns = ', '.join([f"{field_name} {field_type.__name__}" for field_name, field_type in field_types.items()])
            create_table_sql = f"CREATE TABLE IF NOT EXISTS {table_name} ({columns})"

            cursor.execute(create_table_sql) # executa consulta e cria tabela

conn.commit()
conn.close()
