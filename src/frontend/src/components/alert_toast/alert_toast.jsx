import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const AlertToast = ({ message, type, visible, close }) => {
    const icon = type === 'success' ? faCheckCircle : faTimesCircle;

    const closeButtonRef = useRef(null);

    useEffect(() => {
        if (visible) {
            // Focus on the close button when the modal opens
            closeButtonRef.current.focus();
        }
    }, [visible]);

    if (!visible) {
        return null;
    }

    else {
        switch (type) {
            case 'Denied':
                return (<div class="flex justify-between items-center p-4 my-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50" role="alert">
                    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <div>
                        <div>
                            <span class="font-medium">Erro!</span>
                        </div>
                        <div>{message}</div>
                    </div>
                    <button ref={closeButtonRef} onClick={close} className="ml-2 px-3 py-1 text-red-500 rounded-md bg-red-100 hover:bg-red-200 transition focus:outline-none">X</button>
                </div>)
            case 'Sucesso':
                return (
                    <div class="flex justify-between items-center p-4 my-4 text-sm text-green-800 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-lg bg-green-50 " role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <div>
                            <div>
                                <span class="font-medium">Sucesso!</span>
                            </div>
                            <div>{message}</div>
                        </div>
                        <button ref={closeButtonRef} onClick={close} className="ml-2 px-3 py-1 text-green-800 rounded-md bg-green-200  transition focus:outline-none">
                            X
                        </button>

                    </div>)
        }
    };
}

export default AlertToast;