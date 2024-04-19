import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faUser, faRankingStar, faTicket } from '@fortawesome/free-solid-svg-icons'

export default function BottomBar() {
    return (
        <footer className="bottom-0">
            <nav className="fixed bottom-0 left-0 z-50 w-full h-16 bg-main-red border-t border-gray-200 ">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-red-400  group">
                        <FontAwesomeIcon icon={faNewspaper} size="xl" className="text-slate-50" />
                        <span className="text-sm text-white group-hover:text-slate-700 ">Classificar</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-red-400 group">
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className="text-slate-50" />
                        <span className="text-sm text-white group-hover:text-slate-700 ">Pesquisa</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-red-400 group">
                        <FontAwesomeIcon icon={faRankingStar} size="xl" className="text-slate-50" />
                        <span className="text-sm text-white  group-hover:text-slate-700 ">Ranking</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-red-400  group">
                        <FontAwesomeIcon icon={faTicket} size="xl" className="text-slate-50" />
                        <span className="text-sm text-white group-hover:text-slate-700 ">Recompensas</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-red-400  group">
                        <FontAwesomeIcon icon={faUser} size="xl" className="text-slate-50" />
                        <span className="text-sm text-white group-hover:text-slate-700 ">Perfil</span>
                    </button>
                </div>
            </nav>
        </footer>
    )
}