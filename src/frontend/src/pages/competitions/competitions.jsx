import React from 'react';
import CompetitionCard from '../../components/competition_card/competition_card';

const CompetitionsPage = ({ competitions }) => {
    return (
        <main className="container h-screen">
            {competitions.map((competition) => (
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
