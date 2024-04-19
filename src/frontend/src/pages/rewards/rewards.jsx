import React from 'react';
import RewardCard from '../../components/reward_card/reward_card';
import RankCard from '../../components/rank_card/rank_card';

const RewardsPage = () => {

    const cardData = [
        { "reward": 'Museu de Arte Moderna de Salvador', "points": 300 },
        { "reward": 'Casa de Cultura Mario Quintana', "points": 100 },
        { "reward": 'Museu do Amanhã', "points": 800 },
        { "reward": 'Cais do Sertão', "points": 400 },
        { "reward": 'Teatro Municipal de São Paulo', "points": 150 },
        { "reward": 'Museu Nacional de Belas Artes', "points": 600 },
        { "reward": 'Inhotim', "points": 200 },
        { "reward": 'Centro Cultural Banco do Brasil (CCBB)', "points": 300 },
        { "reward": 'Teatro Nacional Claudio Santoro ', "points": 150 },
        { "reward": 'Museu de Arte Moderna de São Paulo (MAM)', "points": 500 },
    ];

    return (
        <div className="w-full flex-column justify-center items-center">
            <RankCard 
            position="" 
            image="https://media.licdn.com/dms/image/C4E03AQG_BDP4flUBCQ/profile-displayphoto-shrink_400_400/0/1609536816536?e=1718841600&v=beta&t=ZIa_Xwa4QJGHnTZC2rUCUYO_ICcVy6pVbqChDeJQdvU" 
            name="Rodrigo Sales" 
            points={1000}/>
            {cardData.map((place) => (
                <RewardCard
                    reward={place.reward}
                    points={place.points}
                />
            ))}
        </div>
    );
};

export default RewardsPage;