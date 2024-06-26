import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FormSuggestion from '../forms_suggestion/forms_suggestion';
import Tabs from '../tabs/tabs';
import { useParams } from 'react-router-dom';
import { title_comments, data_comments, context_comments } from '../../mock/comments.jsx'
import CommentCard from '../comments_card/comments_card.jsx';

function DocumentDescriptionPage() {
  const documentId = useParams().document_id;
  const [documentInfo, setDocumentInfo] = useState(null);
  const [activeTab, setActiveTab] = useState('Título');
  const [formsSent, setFormsSent] = useState(false);
  const navigate = useNavigate();
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
    setFormsSent(true);
    console.log("teste");
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
        <div className="center flex flex-col justify-center mb-4">
          <Tabs tabs={["Título", "Data", "Contexto"]} selectedTab={activeTab} setSelectedTab={setActiveTab} size={"w-full"} />
        </div>

        {/* Formulário de sugestão */}
        <FormSuggestion type={activeTab} onSubmit={handleSubmitSuggestion} documentId={documentId} />

        {/* TODO Caixas de sugestões/discussões !!!!!!!!!! */}
        {/* {filteredDiscussions && filteredDiscussions.map((discussion) => (
        <SuggestionBox key={discussion.id} {...discussion} />
      ))} */}
        {activeTab === 'Título' && (
          <div>
            {title_comments.map((comment) => (<CommentCard comment={comment} />))}
          </div>
        )}
        {activeTab === 'Data' && (
          <div>
            {data_comments.map((comment) => (<CommentCard comment={comment} />))}
          </div>
        )}
        {activeTab === 'Contexto' && (
          <div>
            {context_comments.map((comment) => (<CommentCard comment={comment} />))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DocumentDescriptionPage;
