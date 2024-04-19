import React from 'react';
import CompetitionCard from '../../components/competition_card/competition_card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CompetitionsPage = () => {

    const competitionsData = [
        {
          "date": "01/09/2021",
          "title": "Digitalização e Preservação",
          "description": "Workshop sobre técnicas modernas de digitalização e preservação de arquivos físicos."
        },
        {
          "date": "09/05/2020",
          "title": "Segurança de Arquivos",
          "description": "Conferência sobre as estratégias para manter a segurança e a privacidade dos arquivos digitais e físicos."
        },
        {
          "date": "19/09/2021",
          "title": "Metadados para o Futuro",
          "description": "Um painel sobre a importância dos metadados na acessibilidade e na preservação a longo prazo."
        },
        {
          "date": "25/02/2022",
          "title": "Restauração de Páginas Danificadas",
          "description": "Curso de como restaurar e manter páginas de documentos antigos que sofreram danos com o tempo."
        },
        {
          "date": "06/04/2023",
          "title": "Restauração de Páginas Danificadas",
          "description": "Curso de como restaurar e manter páginas de documentos antigos que sofreram danos com o tempo."
        }
      ]
      

    return (
        <main className="container h-screen">
            <div className="flex items-center mb-4">
                <Link to="/ranking">
                    <FontAwesomeIcon icon={faAngleLeft} className="text-lg mr-2 ml-1 my-4" />
                </Link>
                <h1 className="flex-grow text-3xl font-semibold text-center px-4">Competições</h1>
            </div>

            {competitionsData.map((competition) => (
                <CompetitionCard
                    key={competition.id}
                    title={competition.title}
                    date={competition.date}
                    description={competition.description}
                />
            ))}
        </main>
    );
};

export default CompetitionsPage;
