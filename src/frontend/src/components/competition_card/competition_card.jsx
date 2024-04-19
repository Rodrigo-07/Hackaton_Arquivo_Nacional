import React from 'react';

const CompetitionCard = ({ title, date, description }) => {
    return (
        <div className="competition-card">
            <h2>{title}</h2>
            <p>Date: {date}</p>
            <p>Description: {description}</p>
        </div>
    );
};

export default CompetitionCard;
