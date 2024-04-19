from tinydb import TinyDB, Query

class TinyDBManager:
    def __init__(self, db_path):
        self.db_path = db_path
        self.db = TinyDB(db_path)
        self.doc = Query()
    
    def reference_document(self, id_document):
        self.db.insert(
            {
                "id_document": id_document,
                "comments": [] 
            }
        )
    
    def insert_comment(self, id_document, comment):
        document = self.db.get(self.doc.id_document == id_document)
        
        if document:
            document['comments'].append(comment)
            self.db.update({'comments': document['comments']}, self.doc.id_document == id_document)
            return True
        else:
            return False
