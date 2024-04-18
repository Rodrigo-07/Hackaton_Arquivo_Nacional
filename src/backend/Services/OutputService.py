import sqlite3
from Models.OutputModel import OutputModel

class OutputService:
    def __init__(self, db_path):
        self.db_path = db_path
    
    def create_output(self, output: OutputModel):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO tbl_outputs (title, date, content, tags) VALUES (?, ?, ?, ?)",
            (output.title, output.date, output.content, output.tags)
        )
        conn.commit()
        conn.close()
    
    def get_output_by_id(self, output_id: int) -> OutputModel:
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM tbl_outputs WHERE id = ?", (output_id,))
        row = cursor.fetchone()
        conn.close()
        if row:
            return OutputModel(id=row[0], title=row[1], date=row[2], content=row[3], tags=row[4])
        return None
    
    def update_output(self, output_id: int, output: OutputModel):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        cursor.execute(
            "UPDATE tbl_outputs SET title = ?, date = ?, content = ?, tags = ? WHERE id = ?",
            (output.title, output.date, output.content, output.tags, output_id)
        )
        conn.commit()
        conn.close()
    
    def delete_output(self, output_id: int):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        cursor.execute("DELETE FROM tbl_outputs WHERE id = ?", (output_id,))
        conn.commit()
        conn.close()
