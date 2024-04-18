class UserService:
    def __init__(self, db_manager):
        self.db_manager = db_manager
        self.table_name = "tbl_users"

    def create_user(self, **kwargs):
        self.db_manager.create_record(self.table_name, **kwargs)

    def get_user_by_id(self, user_id):
        return self.db_manager.get_record_by_id(self.table_name, user_id)

    def get_all_users(self):
        return self.db_manager.get_all_records(self.table_name)

    def update_user_by_id(self, user_id, **kwargs):
        self.db_manager.update_record_by_id(self.table_name, user_id, **kwargs)

    def delete_user_by_id(self, user_id):
        self.db_manager.delete_record_by_id(self.table_name, user_id)
    