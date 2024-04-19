import React from 'react';

const RankCard = ({ position, image, name, points }) => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className=' sm:w-3/5 w-11/12 flex flex-row justify-center items-center rounded-md drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-2 bg-slate-100'>
                {position && <div className='font-semibold md:px-12 px-2 text-gray-800 text-xl'>{position}</div>}
                {image && <img className='md:w-1/6 w-1/4 md:h-auto h-1/3 rounded-full' src={image} alt='Placeholder Image' />}
                {name && <div className='px-4 font-semibold text-gray-800 text-base md:text-2xl w-1/2 break-words'>{name}</div>}
                {points && <div className='font-semibold text-gray-800 text-xl md:text-2xl'>{points}</div>}
            </div>
        </div>
    );
};

export default RankCard;