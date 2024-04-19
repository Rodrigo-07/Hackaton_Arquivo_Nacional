import React, { useState, useEffect } from "react";
import axios from "axios";
import ArchiveCard from "../../components/archive_card/archive_card";
import BottomBar from "../../components/bottom_bar/bottom_bar";
import Header from "../../components/header/header";
import Tabs from "../../components/tabs/tabs";
import TaggingPage from "../../components/page_add_tag/page_add_tag";

function HomePage() {
  const [documents, setDocuments] = useState([]);
  const [selectedDocumentId, setSelectedDocumentId] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/documents/");
        setDocuments(response.data);
      } catch (error) {
        console.error("Erro ao buscar documentos:", error);
      }
    };

    fetchDocuments();
  }, []);

  const handleCardClick = (id) => {
    setSelectedDocumentId(id);
  };

  return (
    <main className="w-full bg-bage-bg">
      <Header />
      <Tabs tabs={["Classificação", "Descrição"]} />

      <div className="flex flex-wrap justify-center">
        {documents.map((document) => (
          <ArchiveCard
            key={document.id}
            id={document.id}
            title={document.title}
            subtitle={document.date}
            image={document.path}
            onClick={handleCardClick}
          />
        ))}
      </div>

      {selectedDocumentId && <TaggingPage documentId={selectedDocumentId} />}

      <BottomBar />
    </main>
  );
}

export default HomePage;
