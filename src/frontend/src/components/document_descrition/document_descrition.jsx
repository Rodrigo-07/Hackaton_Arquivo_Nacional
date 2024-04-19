import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormSuggestion from '../forms_suggestion/forms_suggestion';
import SuggestionCard from '../suggestion_card/suggestion_card';

function DocumentDescriptionPage({ documentId }) {
  const [documentInfo, setDocumentInfo] = useState(null);
  const [activeTab, setActiveTab] = useState('title');

  // Carrega informações do documento ao montar o componente
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

  // Simulação das palavras-chave e imagem do documento
  const keywords = "Futebol, Time, Jogo";

  // Função para manipular o envio do formulário de sugestões
  const handleSubmitSuggestion = (data) => {
    console.log("Dados do forms:", data);
    // console.log(activeTab)
  };

  // TODO Filtra as discussões para apenas aquelas relativas à aba ativa !!!!!!!!!!!!!
//   const filteredDiscussions = discussions[activeTab];

    return (
        <div className="min-h-screen bg-gray-100 p-4">
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Contribua para a descrição do documento</h2>
        </div>

        {/* Seção de imagem e palavras-chave */}
        <div className="bg-white p-4 shadow rounded mb-4 text-center">
            {documentInfo && documentInfo.path && (
              <img src={documentInfo.path} alt="Documento" className="mx-auto mb-3" />
            )}
            <p className="text-gray-800 font-semibold">Palavras-chave: {keywords}</p>
        </div>

        <div className="min-h-screen bg-gray-100 p-4">
    {/* /* Navegação por abas */}
    <div className="center flex justify-center mb-4">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>

    {/* Formulário de sugestão */}
      <FormSuggestion type={activeTab} onSubmit={handleSubmitSuggestion} documentId={documentId}/>

      {/* TODO Caixas de sugestões/discussões !!!!!!!!!! */}
      {/* {filteredDiscussions && filteredDiscussions.map((discussion) => (
        <SuggestionBox key={discussion.id} {...discussion} />
      ))} */}

    </div>
        </div>
    );
}

// Botão da aba
function TabButton({ label, isActive, setActiveTab }) {
    return (
        <button
          onClick={() => setActiveTab(label.toLowerCase())}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 ${ isActive ? 'bg-red-500 text-white border-red-500' : 'bg-white text-gray-500 border-transparent'
          } focus:outline-none`}
        >
          {label}
        </button>
    );
}

function Tabs({ activeTab, setActiveTab }) {
    return (
      <div className="flex space-x-2 border-b border-gray-300">
        <TabButton label="title" isActive={activeTab === 'title'} setActiveTab={setActiveTab} />
        <TabButton label="date" isActive={activeTab === 'date'} setActiveTab={setActiveTab} />
        <TabButton label="context" isActive={activeTab === 'context'} setActiveTab={setActiveTab} />
      </div>
    );
  }

export default DocumentDescriptionPage;