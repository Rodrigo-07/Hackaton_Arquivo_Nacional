import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ClassificationPage() {
    const document_id = useParams().document_id;
    const navigation = useNavigate();
    return (
        <div>
            <div className="flex flex-col items-center justify-start min-h-screen p-4 bg-gray-100">
                <div className="w-full max-w-md bg-gray rounded-lg shadow p-6">
                    <img src='https://images.unsplash.com/photo-1627300000000-4b3b3b3b3b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwMzN8MHwxfGFsbHwxfHx8fHx8fHx8fHwxNjI3MzAwNjIw&ixlib=rb-1.2.1&q=80&w=400'
                        alt="Document"
                        className="mb-4 w-full h-32 object-cover rounded"
                    />
                    <div className="relative">
                        <div className="flex flex-wrap items-center gap-2 p-2 border rounded">

                            <input
                                className="outline-none flex-grow w-full p-2"
                            />
                        </div>

                    </div>

                    <div className="text-center">
                        <h2 className="text-2xl text-gray font-semibold mb-4">Palavras chave: </h2>
                    </div>

                    <div className="flex justify-between mt-4">
                        <button
                            className="bg-red-600 text-white text-sm px-4 py-2 rounded shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition ease-in duration-200" onClick={() => navigation("/")}>
                            Voltar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

