from fastapi import APIRouter, HTTPException
from typing import List, Optional
from Models.DocumentModel import DocumentModel
from Services.DocumentService import DocumentService

router = APIRouter()

@router.post("/documents/", response_model=DocumentModel)
def create_document(document: DocumentModel):
    return DocumentService.create(document)

@router.get("/documents/{document_id}", response_model=Optional[DocumentModel])
def read_document(document_id: int):
    document = DocumentService.get(document_id)
    if document is None:
        raise HTTPException(status_code=404, detail="Document not found")
    return document

@router.put("/documents/{document_id}", response_model=Optional[DocumentModel])
def update_document(document_id: int, document: DocumentModel):
    existing_document = DocumentService.get(document_id)
    if existing_document is None:
        raise HTTPException(status_code=404, detail="Document not found")
    return DocumentService.update(document_id, document)

@router.delete("/documents/{document_id}")
def delete_document(document_id: int):
    existing_document = DocumentService.get(document_id)
    if existing_document is None:
        raise HTTPException(status_code=404, detail="Document not found")
    DocumentService.delete(document_id)
    return {"message": "Document deleted successfully"}

@router.get("/documents/", response_model=List[DocumentModel])
def list_documents():
    return DocumentService.list_documents()
