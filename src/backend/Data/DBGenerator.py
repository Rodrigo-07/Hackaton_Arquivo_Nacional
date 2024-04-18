import os
from importlib.machinery import SourceFileLoader
import sqlite3

conn = sqlite3.connect('Data/database/db.sqlite')
cursor = conn.cursor()

models_folder = 'Models'

# Itera sobre os arquivos na pasta de modelos
for filename in os.listdir(models_folder):
    if filename.endswith('.py'):
        # Carrega o arquivo do modelo
        module_name = os.path.splitext(filename)[0]
        module = SourceFileLoader(module_name, os.path.join(models_folder, filename)).load_module()

        name_of_file = os.path.splitext(filename)[0]

        # Obtém o nome da tabela e o modelo do arquivo
        table_name = getattr(module, 'table_name', None)
        model = getattr(module, name_of_file, None)

        # verifica se o modelo e o nome da tabela foram encontrados
        if table_name and model:
            # monta a consulta 
            columns = ', '.join([f"{field.name} {field.type_.__name__}" for field in model.__fields__.values()])
            create_table_sql = f"CREATE TABLE IF NOT EXISTS {table_name} ({columns})"

            cursor.execute(create_table_sql) # executa consulta e cria tabela

conn.commit()
conn.close()
