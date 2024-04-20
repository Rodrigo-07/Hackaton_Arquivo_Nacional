from typing import List
from fastapi import APIRouter, HTTPException
from Models.DocumentModel import DocumentModel
from Services.DocumentService import DocumentService

router = APIRouter()

# Rota para criar um novo documento
@router.post("/documents/")
async def create_document(document: DocumentModel):
    DocumentService.create_document(document)
    return {"message": "Document created successfully"}

# Rota para obter um documento pelo ID
@router.get("/documents/{document_id}")
async def get_document(document_id: int):
    document = DocumentService.get_document_by_id(document_id)
    if document:
        return document.dict()
    else:
        raise HTTPException(status_code=404, detail="Document not found")

# Rota para obter todos os documentos
@router.get("/documents/", response_model=List[DocumentModel])
async def get_all_documents():
    documents = DocumentService.get_all_documents()
    if documents:
        return documents
    else:
        return []

# Rota para atualizar um documento pelo ID
@router.put("/documents/{document_id}")
async def update_document(document_id: int, document: DocumentModel):
    existing_document = DocumentService.get_document_by_id(document_id)
    if existing_document:
        DocumentService.update_document(document_id, document)
        return {"message": "Document updated successfully"}
    else:
        raise HTTPException(status_code=404, detail="Document not found")

# Rota para deletar um documento pelo ID
@router.delete("/documents/{document_id}")
async def delete_document(document_id: int):
    existing_document = DocumentService.get_document_by_id(document_id)
    if existing_document:
        DocumentService.delete_document(document_id)
        return {"message": "Document deleted successfully"}
    else:
        raise HTTPException(status_code=404, detail="Document not found")
