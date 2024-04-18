import sqlite3

class DBManager:
    def __init__(self, db_path):
        self.db_path = db_path

    def execute_query(self, query, parameters=None):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        if parameters:
            cursor.execute(query, parameters)
        else:
            cursor.execute(query)
        conn.commit()
        result = cursor.fetchall()
        conn.close()
        return result

    def create_record(self, table_name, **kwargs):
        columns = ', '.join(kwargs.keys())
        placeholders = ', '.join(['?' for _ in kwargs])
        query = f"INSERT INTO {table_name} ({columns}) VALUES ({placeholders})"
        self.execute_query(query, tuple(kwargs.values()))

    def get_record_by_id(self, table_name, record_id):
        query = f"SELECT * FROM {table_name} WHERE id = ?"
        result = self.execute_query(query, (record_id,))
        if result:
            return result[0]
        return None
    
    def get_all_records(self, table_name):
        query = f"SELECT * FROM {table_name}"
        return self.execute_query(query)
    
    def update_record_by_id(self, table_name, record_id, **kwargs):
        set_clause = ', '.join([f"{key} = ?" for key in kwargs])
        query = f"UPDATE {table_name} SET {set_clause} WHERE id = ?"
        parameters = tuple(kwargs.values()) + (record_id,)
        self.execute_query(query, parameters)
    
    def delete_record_by_id(self, table_name, record_id):
        query = f"DELETE FROM {table_name} WHERE id = ?"
        self.execute_query(query, (record_id,))
