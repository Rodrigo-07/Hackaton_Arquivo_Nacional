import React, { useState, useEffect } from "react";
import axios from "axios";
import ArchiveCard from "../../components/archive_card/archive_card";
import BottomBar from "../../components/bottom_bar/bottom_bar";
import Tabs from "../../components/tabs/tabs";
import DocumentDescription from "../../components/document_descrition/document_descrition";
import TaggingPage from "../../components/page_add_tag/page_add_tag"
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [selectedDocumentId, setSelectedDocumentId] = useState(null);
  const [documentsWithEmptyTags, setDocumentsWithEmptyTags] = useState([]);
  const [documentsWithTags, setDocumentsWithTags] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Classificação");

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/documents/");
        const allDocuments = response.data;

        // tag vazia ou "None"
        const emptyTagDocuments = allDocuments.filter(document => !document.tags || document.tags === "None");

        // tag não vazia
        const taggedDocuments = allDocuments.filter(document => document.tags && document.tags !== "None");

        setDocumentsWithEmptyTags(emptyTagDocuments);
        setDocumentsWithTags(taggedDocuments);
      } catch (error) {
        console.error("Erro ao buscar documentos:", error);
      }
    };

    fetchDocuments();
  }, []);

  const handleCardClick = (id) => {
    setSelectedDocumentId(id);
  };

  // const handleTagCardClick = (id) => {
  //   navigate(`/classify/${id}`);
  // };

  return (
    <main className="w-full bg-bage-bg">
      <Tabs tabs={["Classificação", "Descrição"]} selectedTab={selectedTab} setSelectedTab={setSelectedTab} size={"md:w-2/4 w-3/4"} />
      <div className="flex flex-wrap justify-center">
        {selectedTab === "Classificação" ? (
          documentsWithEmptyTags.map((document) => (
            <ArchiveCard
              key={document.id}
              id={document.id}
              title={document.title}
              subtitle={document.date}
              image={document.path}
              onClick={handleCardClick}
            />
          ))
        ) : (
          documentsWithTags.map((document) => (
            <ArchiveCard
              key={document.id}
              id={document.id}
              title={document.title}
              subtitle={document.date}
              image={document.path}
              onClick={handleCardClick}
            />
          ))
        )}
      </div>

      {selectedDocumentId && documentsWithEmptyTags.find(document => document.id === selectedDocumentId) && (
        navigate(`/tagging-page/${selectedDocumentId}`)
      )}

      {selectedDocumentId && documentsWithTags.find(document => document.id === selectedDocumentId) && (
        navigate(`/classify/${selectedDocumentId}`)
      )}

      <BottomBar />
    </main>
  );
}

export default HomePage;
