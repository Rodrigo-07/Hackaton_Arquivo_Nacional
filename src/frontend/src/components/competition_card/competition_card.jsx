import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CompetitionCard = ({ title, date, description }) => {
    return (
        <div>
            <div className="flex items-center mb-4">
                <Link to="/ranking-competitions">
                    <FontAwesomeIcon icon={faAngleLeft} className="text-lg mr-2 ml-1 my-4" />
                </Link>
                <h1 className="flex-grow text-3xl font-semibold text-center px-4">Competições</h1>
            </div>
        <div className="flex  md:p-10 p-4 m-4 bg-gray-100 shadow-md rounded-md w-9/10 mx-auto items-center px-1 mx-2">
            <FontAwesomeIcon icon={faTrophy} className="text-5xl flex-shrink-0" />
            <div className="flex-grow min-w-0 px-4">
                <h2 className="font-semibold text-gray-800 text-2xl mb-2 truncate">{title}</h2>
                <p className="text-gray-700 mb-2" style={{ wordWrap: 'break-word' }}>{date}</p>
                <p className="text-gray-700 mb-2" style={{ wordWrap: 'break-word' }}>{description}</p>
            </div>
            <button type="button" className="inline-flex flex-col items-center justify-center px-3 py-2 bg-green-500 rounded flex-shrink-0 mx-2" style={{backgroundColor: '#20D468'}}>
                <span className="text-sm text-white">Inscrever</span>
            </button>
        </div>
        </div>
    );
};

export default CompetitionCard;


