import React from 'react';

function SuggestionCard({ username, title, justification, votes }) {
    // Handler para upvote
    const handleUpvote = () => {
        console.log("Upvote");
        // Lógica de adicionar upvote
    };

    // Handler para downvote
    const handleDownvote = () => {
        console.log("Downvote");
        // Lógica de adicionar downvote
    };

    // Requisição para puxar o número de votos da sugestão
    
    return (
        <div className="flex items-center bg-white shadow rounded-lg p-4">
            <div className="flex items-center flex-1">
                <div className="avatar-placeholder rounded-full w-12 h-12 bg-gray-200 text-lg flex items-center justify-center mr-4">
                    {/* Icone ou imagem do usuário */}
                </div>
                <div>
                    <div className="text-md font-semibold">{username}</div>
                    <div className="text-sm text-gray-600">Título: {title}</div>
                    <div className="text-sm text-gray-600">Justificativa: {justification}</div>
                </div>
            </div>
            <div className="flex items-center ml-4">
                <div className="text-lg font-semibold mr-2">{votes}</div>
                <div className="flex flex-col items-center">
                    <button
                        onClick={handleUpvote}
                        className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg mb-1 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        aria-label="Upvote"
                    >
                        ↑
                    </button>
                    <button
                        onClick={handleDownvote}
                        className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        aria-label="Downvote"
                    >
                        ↓
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SuggestionCard;
