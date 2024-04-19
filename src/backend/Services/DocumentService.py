from Data.DBManager import DBManager

class DocumentService:
    def __init__(self, db_manager: DBManager):
        self.db_manager = db_manager
        self.table_name = "tbl_documents"
    
    def create_document(self, **kwargs):
        self.db_manager.create_record(self.table_name, **kwargs)
    
    def get_document_by_id(self, document_id):
        return self.db_manager.get_record_by_id(self.table_name, document_id)

    def get_all_documents(self):
        return self.db_manager.get_all_records(self.table_name)

    def update_document_by_id(self, document_id, **kwargs):
        self.db_manager.update_record_by_id(self.table_name, document_id, **kwargs)

    def delete_document_by_id(self, document_id):
        self.db_manager.delete_record_by_id(self.table_name, document_id)