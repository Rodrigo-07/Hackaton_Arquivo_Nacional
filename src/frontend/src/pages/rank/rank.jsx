import React from "react";
import RankCard from "../../components/rank_card/rank_card";
import { FaTrophy } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function RankPage(){
    const navigate = useNavigate();

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='w-11/12 flex flex-col justify-center items-center'>
                    <div className='font-bold text-gray-800  text-2xl'>Ranking Mensal</div>
                    <div className='font-medium text-gray-700 text-xl'>3 dias restantes</div>
                </div>
            </div>

            <RankCard position='1' image='https://via.placeholder.com/150' name='Rodrigo Sales' points='1000' />
            <RankCard position='2' image='https://via.placeholder.com/150' name='Jane Doe' points='900' />
            <RankCard position='3' image='https://via.placeholder.com/150' name='John Smith' points='800' />
            <RankCard position='4' image='https://via.placeholder.com/150' name='Jane Smith' points='700' />
            <RankCard position='5' image='https://via.placeholder.com/150' name='John Doe' points='600' />
            <RankCard position='6' image='https://via.placeholder.com/150' name='Jane Doe' points='500' />
            <RankCard position='7' image='https://via.placeholder.com/150' name='John Smith' points='400' />
            <RankCard position='8' image='https://via.placeholder.com/150' name='Jane Smith' points='300' />
            <RankCard position='9' image='https://via.placeholder.com/150' name='John Doe' points='200' />
            <RankCard position='10' image='https://via.placeholder.com/150' name='Jane Doe' points='100' />

            <button
                type="button"
                onClick={() => navigate('/competitions')}
                className="fixed bottom-20 right-4 bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg transition ease-in duration-200 focus:outline-none"
                aria-label="Ir para competições"
                >
                <FaTrophy />
            </button>
        </div>
    )
}