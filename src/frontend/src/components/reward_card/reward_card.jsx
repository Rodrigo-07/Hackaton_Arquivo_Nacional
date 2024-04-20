import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const RewardCard = ({reward, points}) => {
    return (
        <div className="w-full flex flex-col gap-3 justify-center items-center mt-9">
            <div className='sm:w-3/5 w-11/12 flex  items-center justify-between rounded-md drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-2 bg-slate-100'>
                <div className='font-semibold md:px-12 px-2 text-gray-800 text-xl'>{reward}</div>
                <div className='flex items-center gap-1 break-words'> {points}
                    <FontAwesomeIcon icon={faBookmark} className="text-1xl flex-shrink-0" />
                    <button type="button" className="inline-flex flex-col items-center justify-center px-3 py-2 rounded-md flex-shrink-0 mx-2" style={{backgroundColor: '#0C326F'}}>
                        <span className="text-sm text-white">Inscrever</span>
                    </button>
                    </div>
            </div>
        </div>
    );
};

export default RewardCard;
