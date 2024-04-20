import sqlite3
from pydantic import BaseModel
from typing import List, Optional
from Models.UserModel import UserModel

DATABASE_PATH = 'Data/database/db.sqlite'

class UserService:
    @staticmethod
    def create_user(user: UserModel):
        with sqlite3.connect(DATABASE_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute(
                "INSERT INTO tbl_users (id, username, password, email, isStudying, college, major, role, xp, level, credits, hours_credit) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                (user.id, user.username, user.password, user.email, user.isStudying, user.college, user.major, user.role, user.xp, user.level, user.credits, user.hours_credit)
            )
            conn.commit()

    @staticmethod
    def get_user_by_id(user_id: int) -> UserModel:
        with sqlite3.connect(DATABASE_PATH) as conn:
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM tbl_users WHERE id=?", (user_id,))
            row = cursor.fetchone()
            if row:
                return UserModel(**dict(row))

    @staticmethod
    def update_user(user_id: int, user: UserModel):
        with sqlite3.connect(DATABASE_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute(
                "UPDATE tbl_users SET username=?, password=?, email=?, isStudying=?, college=?, major=?, role=?, xp=?, level=?, credits=?, hours_credit=? WHERE id=?",
                (user.username, user.password, user.email, user.isStudying, user.college, user.major, user.role, user.xp, user.level, user.credits, user.hours_credit, user_id)
            )
            conn.commit()

    @staticmethod
    def delete_user(user_id: int):
        with sqlite3.connect(DATABASE_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute("DELETE FROM tbl_users WHERE id=?", (user_id,))
            conn.commit()
    