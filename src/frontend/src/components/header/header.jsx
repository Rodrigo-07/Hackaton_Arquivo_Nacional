import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo} from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    return (
        <header className="flex flex-row justify-between items-center bg-main-red h-20 pr-8 w-full">
            <a href="/">
                <img src="icons/an_logo.svg" alt="Logo Arquivo Nacional" className="pl-4 max-w-28"/>
            </a>
            <img src="icons/logo.svg" alt="Logo do Grupo" className="max-h-14"/>
            <FontAwesomeIcon icon={faCircleInfo} size="2xl" className="pl-4 text-slate-50" />
        </header>
    )
}