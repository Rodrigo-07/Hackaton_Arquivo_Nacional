import React from 'react';

const RankCard = ({ position, image, name, points }) => {
    return (
        <div className="w-full flex justify-center items-center my-2"> {/* Adicionado my-2 para espaçamento vertical entre os cards */}
            <div className={`sm:w-3/5 w-11/12 flex items-center rounded-md drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-2 ${position == 1 ? 'bg-red-500' : 'bg-slate-100'}`}>
                {position && (
                    <div className={`font-bold px-4 text-gray-800 text-xl ${position == 1 ? 'text-white' : 'text-gray-800'}`}>{position}</div>
                )}
                {image && (
                    <div className="flex-grow-0"> {/* Mantém a imagem de sair do fluxo flex */}
                        <img className='w-16 h-16 object-cover rounded-full mx-4' src={image} alt='Placeholder Image' />
                    </div>
                )}
                {name && (
                    <div className='flex-grow font-bold text-base md:text-2xl mx-4 break-words'>
                        <span className={`${position == 1 ? 'text-white' : 'text-gray-800'}`}>{name}</span>
                    </div>
                )}
                {points && (
                    <div className={`font-bold text-xl md:text-2xl mx-4 ${position == 1 ? 'text-white' : 'text-gray-800'}`}>{points}</div>)}
            </div>
        </div>
    );
};

export default RankCard;
