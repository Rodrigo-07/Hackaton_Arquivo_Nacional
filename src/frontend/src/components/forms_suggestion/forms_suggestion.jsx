import React, { useState } from 'react';

// Este componente renderiza diferentes campos baseados no prop 'type'
function FormSuggestion({ type, onSubmit }) {
  const [suggestion, setSuggestion] = useState('');
  const [justification, setJustification] = useState('');

  console.log(type);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      type,
      suggestion,
      justification
    });
    // Limpar o formulário após o envio
    setSuggestion('');
    setJustification('');
  };

  // Renderiza o campo apropriado baseado no tipo de sugestão
  const renderSuggestionField = () => {
    switch (type) {
      case 'title':
        return (
          <input
            type="text"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            placeholder="Sugira um título..."
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        );
      case 'date':
        return (
          <input
            type="date"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        );
      case 'context':
        return (
          <textarea
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            placeholder="Descreva o contexto..."
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          {type.charAt(0).toUpperCase() + type.slice(1)}:
        </label>
        {renderSuggestionField()}
      </div>
      <div>
        <label htmlFor="justification" className="block text-sm font-medium text-gray-700">
          Justificativa:
        </label>
        <textarea
          id="justification"
          value={justification}
          onChange={(e) => setJustification(e.target.value)}
          rows="4"
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
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
