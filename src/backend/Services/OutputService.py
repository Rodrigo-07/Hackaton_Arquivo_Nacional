import sqlite3
from datetime import date
from Models.OutputModel import OutputModel

DATABASE_PATH = 'Data/database/db.sqlite'

class OutputService:
    @staticmethod
    def create_output(output: OutputModel):
        with sqlite3.connect(DATABASE_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute(
                "INSERT INTO tbl_outputs (id, title, date, content, tags) VALUES (?, ?, ?, ?, ?)",
                (output.id, output.title, output.date, output.content, output.tags)
            )
            conn.commit()

    @staticmethod
    def get_output_by_id(output_id: int) -> OutputModel:
        with sqlite3.connect(DATABASE_PATH) as conn:
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM tbl_outputs WHERE id=?", (output_id,))
            row = cursor.fetchone()
            if row:
                return OutputModel(**dict(row))

    @staticmethod
    def update_output(output_id: int, output: OutputModel):
        with sqlite3.connect(DATABASE_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute(
                "UPDATE tbl_outputs SET title=?, date=?, content=?, tags=? WHERE id=?",
                (output.title, output.date, output.content, output.tags, output_id)
            )
            conn.commit()

    @staticmethod
    def delete_output(output_id: int):
        with sqlite3.connect(DATABASE_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute("DELETE FROM tbl_outputs WHERE id=?", (output_id,))
            conn.commit()
