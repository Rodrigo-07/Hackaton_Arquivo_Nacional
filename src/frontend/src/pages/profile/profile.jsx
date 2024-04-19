import { Fragment, useState } from 'react';
import { Menu } from '@headlessui/react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PerfilPage({ user_id, user_name, user_foto, user_role, xp }) {
  const [isOpen, setIsOpen] = useState(false);
  const [userLevel, setUserLevel] = useState("Iniciante");
const [userColor, setUsercolor] = useState("border-gray-500");

useEffect(() => {
    switch (true) {
        case xp > 2000:
            setUserLevel("Bronze");
            setUsercolor("border-yellow-200");
            break;
        case xp > 4000:
            setUserLevel("Prata");
            setUsercolor("border-gray-3");
            break;
        case xp > 6000:
            setUserLevel("Ouro");
            setUsercolor("border-yellow-500");
            break;
        default:
            setUserLevel("Iniciante");
            setUsercolor("border-gray-500");
            break;
    }
}, [xp]);

  return (
    <main className="container h-fit"> 
        <section className="user-infos container mt-12 grid-rows-3 text-center">
            <div className="">
            <img 
            src="https://media.licdn.com/dms/image/C4E03AQG_BDP4flUBCQ/profile-displayphoto-shrink_400_400/0/1609536816536?e=1718841600&v=beta&t=ZIa_Xwa4QJGHnTZC2rUCUYO_ICcVy6pVbqChDeJQdvU" // iremos utilizar um mock devido ao sistema complexo de login e usuário,mas basta adicionar o endpoint com esses dados e fornnecer à função os parâmetros
            alt="user foto"  
            className={`rounded-full mx-auto block w-[40%] h-auto border-8 ${userColor}`}/>
            </div>
            <div className="mt-4">
            <h1 className='text-3xl'>{user_name}Rodrigo Sales</h1>
            <p className='text-lg'>Seu nivel é {userLevel}</p>
            </div>
            <div className="container grid-rows-3">
            <div className="m-5">
                <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    >
                    Informações pessoais                    
                    <FontAwesomeIcon icon= {faChevronDown} className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />

                    </Menu.Button>
                </div>
                <Menu.Items
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                    >
                    <div className="py-1">
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            Option 1
                        </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            Option 2
                        </a>
                        )}
                    </Menu.Item>
                    {/* Add more Menu.Items as needed */}
                    </div>
                </Menu.Items>
                </Menu>
            </div>
            <div className="m-5">
                {/* Add your content here */}
                <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    >
                    Tipo de conta
                    <FontAwesomeIcon icon= {faChevronDown} className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                </div>
                <Menu.Items
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                    >
                    <div className="py-1">
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            Option 1
                        </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            Option 2
                        </a>
                        )}
                    </Menu.Item>
                    {/* Add more Menu.Items as needed */}
                    </div>
                </Menu.Items>
                </Menu>
            </div>
            <div className="m-5">
                {/* Add your content here */}
                <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    >
                    Preferências
                    <FontAwesomeIcon icon= {faChevronDown} className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                </div>
                <Menu.Items
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                    >
                    <div className="py-1">
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            Option 1
                        </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            Option 2
                        </a>
                        )}
                    </Menu.Item>
                    {/* Add more Menu.Items as needed */}
                    </div>
                </Menu.Items>
                </Menu>
            </div>
            </div>
        </section>
    </main>
  )
}
