from Data.DBManager import DBManager

class OutputService:
    def __init__(self, db_manager: DBManager):
        self.db_manager = db_manager
        self.table_name = "tbl_outputs"

    def create_output(self, **kwargs):
        self.db_manager.create_record(self.table_name, **kwargs)

    def get_output_by_id(self, output_id: int):
        return self.db_manager.get_record_by_id(self.table_name, output_id)

    def update_output(self, output_id: int, **kwargs):
        self.db_manager.update_record_by_id(self.table_name, output_id, **kwargs)

    def delete_output(self, output_id: int):
        self.db_manager.delete_record_by_id(self.table_name, output_id)
