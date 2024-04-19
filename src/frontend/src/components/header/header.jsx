import React from "react";

export default function Header(){
    return (
        <header className="grid fixed mx-auto w-full h-20 items-center bg-main-red">
            <a href="/">
                <img src="icons/an_logo.svg" alt="Logo Arquivo Nacional" className="mr-auto w-full  max-h-14"/>
            </a>
            
        </header>
    )
}