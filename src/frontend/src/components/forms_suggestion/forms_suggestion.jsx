import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FormSuggestion({ type, onSubmit, documentId }) {
  const [documentInfo, setDocumentInfo] = useState(null);
  const [suggestion, setSuggestion] = useState('');
  const [justification, setJustification] = useState('');

  useEffect(() => {
    const fetchDocumentInfo = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/documents/${documentId}`);
        setDocumentInfo(response.data);
      } catch (error) {
        console.error('Erro ao buscar informações do documento:', error);
      }
    };

    fetchDocumentInfo();
  }, [documentId]);

  // Função para enviar os dados para o backend
  const sendSuggestion = () => {
    axios.put(`http://127.0.0.1:8000/documents/${documentId}`, {
      id: documentId,
      data_type: documentInfo.data_type,
        path: documentInfo.path,
        title: type === "Título" ? suggestion : documentInfo.title,
        date: type === "Data" ? suggestion : documentInfo.date,
        content: type === "Contexto" ? suggestion : documentInfo.content,
      tags: documentInfo.tags
    })
    .then(response => {
      console.log('Dados enviados com sucesso:', response.data);
      // Você pode adicionar lógica adicional aqui, se necessário
    })
    .catch(error => {
      console.error('Erro ao enviar dados:', error);
      // Lógica de tratamento de erro, se necessário
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar os dados para o backend
    sendSuggestion();
    // Limpar o formulário após o envio
    setSuggestion('');
    setJustification('');
  };

  const renderSuggestionField = () => {
    switch (type) {
      case 'Título':
        return (
          <input
            type="text"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            placeholder="Sugira um título..."
            required
            className="py-2 pl-2 mt-1 block w-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-md shadow-sm"
          />
        );
      case 'Data':
        return (
          <input
            type="date"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            required
            className="py-2 pl-2 mt-1 block w-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-md shadow-sm"
          />
        );
      case 'Contexto':
        return (
          <textarea
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            placeholder="Descreva o contexto..."
            required
            className="py-2 pl-2 mt-1 block w-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-md shadow-sm"
          />
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-base font-semibold text-gray-700 ">
          {type.charAt(0).toUpperCase() + type.slice(1)}:
        </label>
        {renderSuggestionField()}
      </div>
      <div>
        <label htmlFor="justification" className="block text-base font-semibold text-gray-700">
          Justificativa:
        </label>
        <textarea
          id="justification"
          value={justification}
          onChange={(e) => setJustification(e.target.value)}
          rows="4"
          required
          className="py-2 pl-2 mt-1 block w-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-md shadow-sm"
          placeholder="Escreva sua justificativa..."
        ></textarea>
      </div>
        <div className="flex justify-end mt-4">
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Enviar
            </button>
        </div>
    </form>
  );
}

export default FormSuggestion;
