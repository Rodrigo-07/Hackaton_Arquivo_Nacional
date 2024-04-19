import sqlite3
from typing import List, Optional
from Models.DocumentModel import DocumentModel

DATABASE_PATH = "Data/database/db.sqlite"
TABLE_NAME = "tbl_documents"

class DocumentService:
    @staticmethod
    def create(document: DocumentModel) -> DocumentModel:
        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        cursor.execute(
            f"INSERT INTO {TABLE_NAME} (id, data_type, path, title, date, content, tags) VALUES (?, ?, ?, ?, ?, ?, ?)",
            (document.id, document.data_type, document.path, document.title, document.date, document.content, document.tags),
        )
        conn.commit()
        document.id = cursor.lastrowid
        conn.close()
        return document

    @staticmethod
    def get(document_id: int) -> Optional[DocumentModel]:
        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        cursor.execute(f"SELECT * FROM {TABLE_NAME} WHERE id=?", (document_id,))
        document_data = cursor.fetchone()
        conn.close()
        if document_data:
            return DocumentModel(id=document_data[0], data_type=document_data[1], path=document_data[2])
        return None

    @staticmethod
    def update(document_id: int, document: DocumentModel) -> Optional[DocumentModel]:
        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        cursor.execute(
            f"UPDATE {TABLE_NAME} SET data_type=?, path=?, title=?, date=?, content=?, tags=? WHERE id=?",
            (document.id, document.data_type, document.path, document.title, document.date, document.content, document.tags),
        )
        conn.commit()
        conn.close()
        return DocumentService.get(document_id)

    @staticmethod
    def delete(document_id: int) -> bool:
        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        cursor.execute(f"DELETE FROM {TABLE_NAME} WHERE id=?", (document_id,))
        conn.commit()
        conn.close()
        return True

    @staticmethod
    def list_documents() -> List[DocumentModel]:
        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        cursor.execute(f"SELECT * FROM {TABLE_NAME}")
        documents_data = cursor.fetchall()
        conn.close()
        documents = []
        for document_data in documents_data:
            documents.append(DocumentModel(id=document_data[0], data_type=document_data[1], path=document_data[2]))
        return documents
