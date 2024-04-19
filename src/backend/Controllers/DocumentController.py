from fastapi import APIRouter, HTTPException
from Models.DocumentModel import DocumentModel
from Services.DocumentService import DocumentService
from Data.DBManager import DBManager

router = APIRouter()
db_manager = DBManager("Data/database/db.sqlite")
document_service = DocumentService(db_manager)

@router.post("/documents/", response_model=DocumentModel)
def create_document(document: DocumentModel):
    return document_service.create_document(**document.dict())

@router.get("/documents/{document_id}", response_model=DocumentModel)
def get_document(document_id: int):
    document = document_service.get_document_by_id(document_id)
    if document:
        return document
    else:
        raise HTTPException(status_code=404, detail="Documento não encontrado")

@router.get("/documents/", response_model=list[DocumentModel])
def get_all_documents():
    return document_service.get_all_documents()

@router.put("/documents/{document_id}", response_model=DocumentModel)
def update_document(document_id: int, document: DocumentModel):
    updated_document = document_service.update_document_by_id(document_id, **document.dict())
    if updated_document:
        return updated_document
    else:
        raise HTTPException(status_code=404, detail="Documento não encontrado")

@router.delete("/documents/{document_id}")
def delete_document(document_id: int):
    deleted = document_service.delete_document_by_id(document_id)
    if deleted:
        return {"mensagem": "Documento excluído com sucesso"}
    else:
        raise HTTPException(status_code=404, detail="Documento não encontrado")