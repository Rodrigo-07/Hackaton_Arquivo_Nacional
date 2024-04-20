import React, { useState, useEffect } from "react";
import ArchiveCard from "../../components/archive_card/archive_card";

export default function SearchPage() {
    const [documents, setDocuments] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/documents/")
            .then(response => response.json())
            .then(data => setDocuments(data))
            .catch(error => console.error("Error fetching documents:", error));
    }, []);

    const handleCardClick = (id) => {
        // Aqui você pode adicionar a lógica para lidar com o clique no card, se necessário
        console.log("Card clicked with id:", id);
    };

    // Filtrar os documentos com base no título
    const filteredDocuments = documents.filter(document =>
        document.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-3xl mx-auto">
            {/* Barra de pesquisa */}
            <input
                type="text"
                placeholder="Pesquisar por título"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            {/* Lista de documentos filtrados */}
            <div className="mt-4">
                {filteredDocuments.map(document => (
                    <ArchiveCard
                        key={document.id}
                        id={document.id}
                        title={document.title}
                        subtitle={document.date}
                        image={document.path}
                        onClick={() => handleCardClick(document.id)}
                    />
                ))}
            </div>
        </div>
    );
}
