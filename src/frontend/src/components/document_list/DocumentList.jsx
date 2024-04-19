// Importe os módulos React e Axios
import React, { useState, useEffect } from "react";
import axios from "axios";

function DocumentList() {
    const [documents, setDocuments] = useState([]);
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [updatedData, setUpdatedData] = useState({
        title: "",
        date: "",
        content: "",
        tags: ""
    });
    const [updateSuccess, setUpdateSuccess] = useState(false); // Feedback visual de sucesso

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/documents/")
            .then(response => setDocuments(response.data))
            .catch(error => console.error('Erro ao buscar os documentos:', error));
    }, []);

    const handleDocumentClick = (document) => {
        setSelectedDocument(document);
        setUpdatedData({
            title: document.title,
            date: document.date,
            content: document.content,
            tags: document.tags
        });
        setUpdateSuccess(false); // Reset do feedback visual de sucesso
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdatedData({
            ...updatedData,
            [name]: value
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const { id, data_type, path } = selectedDocument;
        const updatedDocument = { id, data_type, path, ...updatedData }; // Mantenha o id e data_type
        axios.put(`http://127.0.0.1:8000/documents/${selectedDocument.id}`, updatedDocument)
            .then(response => {
                console.log("Documento atualizado com sucesso:", response.data);
                setUpdateSuccess(true); // Exibe feedback visual de sucesso
            })
            .catch(error => {
                console.error('Erro ao atualizar o documento:', error);
                setUpdateSuccess(false); // Exibe feedback visual de erro
            });
    };

    return (
    <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">Documentos</h2>
        <ul>
            {documents.map(document => (
                <li key={document.id} className="mb-2">
                    <div className="flex justify-between items-center">
                        <span>{document.data_type} - {document.path}</span>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => handleDocumentClick(document)}>Ver Detalhes</button>
                    </div>
                </li>
            ))}
        </ul>
        {selectedDocument && (
            <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Atualizar Documento</h3>
                {updateSuccess && <p className="text-green-500 mb-2">Documento atualizado com sucesso!</p>}
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block mb-1">Título:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={updatedData.title}
                            onChange={handleInputChange}
                            className="w-full border border-gray-400 rounded px-3 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date" className="block mb-1">Data:</label>
                        <input
                            type="text"
                            id="date"
                            name="date"
                            value={updatedData.date}
                            onChange={handleInputChange}
                            className="w-full border border-gray-400 rounded px-3 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block mb-1">Conteúdo:</label>
                        <textarea
                            id="content"
                            name="content"
                            value={updatedData.content}
                            onChange={handleInputChange}
                            className="w-full border border-gray-400 rounded px-3 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tags" className="block mb-1">Tags:</label>
                        <input
                            type="text"
                            id="tags"
                            name="tags"
                            value={updatedData.tags}
                            onChange={handleInputChange}
                            className="w-full border border-gray-400 rounded px-3 py-2"
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Atualizar</button>
                </form>
            </div>
        )}
    </div>
);

}

export default DocumentList;
