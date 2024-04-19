import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faUser, faRankingStar, faTicket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

export default function BottomBar() {
    const navigate = useNavigate();
    return (
        <footer className="bottom-0">
            <nav className="fixed bottom-0 left-0 z-50 w-full h-16 bg-main-red border-t border-gray-200 ">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-red-400  group" onClick={()=> navigate("/")}>
                        <FontAwesomeIcon icon={faNewspaper} size="xl" className="text-slate-50" />
                        <span className="text-sm text-white ">Classificar</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-red-400 group" onClick={()=>navigate("/search")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className="text-slate-50" />
                        <span className="text-sm text-white ">Pesquisa</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-red-400 group" onClick={()=> navigate("/ranking")}>
                        <FontAwesomeIcon icon={faRankingStar} size="xl" className="text-slate-50" />
                        <span className="text-sm text-white  ">Ranking</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-red-400  group" onClick={()=>navigate("/rewards")}>
                        <FontAwesomeIcon icon={faTicket} size="xl" className="text-slate-50" />
                        <span className="text-sm text-white ">Recompensas</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-red-400  group" onClick={()=>navigate("/profile")}>
                        <FontAwesomeIcon icon={faUser} size="xl" className="text-slate-50" />
                        <span className="text-sm text-white ">Perfil</span>
                    </button>
                </div>
            </nav>
        </footer>
    )
}