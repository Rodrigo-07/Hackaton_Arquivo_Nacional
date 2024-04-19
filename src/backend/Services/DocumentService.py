import sqlite3
from pydantic import BaseModel
from typing import List, Optional
from Models.DocumentModel import DocumentModel

DATABASE_PATH = 'Data/database/db.sqlite'

class DocumentService:
    @staticmethod
    def create_document(document: DocumentModel):
        with sqlite3.connect(DATABASE_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute(
                "INSERT INTO tbl_documents (id, data_type, path) VALUES (?, ?, ?)",
                (document.id, document.data_type, document.path)
            )
            conn.commit()

    @staticmethod
    def get_document_by_id(document_id: int) -> DocumentModel:
        with sqlite3.connect(DATABASE_PATH) as conn:
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM tbl_documents WHERE id=?", (document_id,))
            row = cursor.fetchone()
            if row:
                return DocumentModel(**dict(row))

    @staticmethod
    def update_document(document_id: int, document: DocumentModel):
        with sqlite3.connect(DATABASE_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute(
                "UPDATE tbl_documents SET data_type=?, path=? WHERE id=?",
                (document.data_type, document.path, document_id)
            )
            conn.commit()

    @staticmethod
    def delete_document(document_id: int):
        with sqlite3.connect(DATABASE_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute("DELETE FROM tbl_documents WHERE id=?", (document_id,))
            conn.commit()