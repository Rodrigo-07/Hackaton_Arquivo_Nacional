import sqlite3
from typing import List
from Models.TagModel import TagModel

DATABASE_PATH = 'Data/database/db.sqlite'

class TagService:
    @staticmethod
    def create_tag(tag: TagModel):
        with sqlite3.connect(DATABASE_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute(
                "INSERT INTO tbl_tags (id, tag_name, indice) VALUES (?, ?, ?)",
                (tag.id, tag.tag_name, tag.indice)
            )
            conn.commit()

    @staticmethod
    def get_tag_by_id(tag_id: int) -> TagModel:
        with sqlite3.connect(DATABASE_PATH) as conn:
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM tbl_tags WHERE id=?", (tag_id,))
            row = cursor.fetchone()
            if row:
                return TagModel(**dict(row))
    
    @staticmethod
    def get_all_tags() -> List[TagModel]:
        with sqlite3.connect(DATABASE_PATH) as conn:
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM tbl_tags")
            rows = cursor.fetchall()
            tags = []
            for row in rows:
                tags.append(TagModel(**dict(row)))
            return tags

    @staticmethod
    def update_tag(tag_id: int, tag: TagModel):
        with sqlite3.connect(DATABASE_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute(
                "UPDATE tbl_tags SET tag_name=?, indice=? WHERE id=?",
                (tag.tag_name, tag.indice, tag_id)
            )
            conn.commit()

    @staticmethod
    def delete_tag(tag_id: int):
        with sqlite3.connect(DATABASE_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute("DELETE FROM tbl_tags WHERE id=?", (tag_id,))
            conn.commit()
