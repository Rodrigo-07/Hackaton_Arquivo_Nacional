import { Fragment, useState } from 'react';
import { Menu } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Header from "../../components/header/header";
import BottomBar from '../../components/bottom_bar/bottom_bar';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PerfilPage({ user_id, user_name, user_foto, user_role }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="container h-screen"> 
        <section className="user-infos container mt-12 grid-rows-3 text-center">
            <div className="">
            <img 
            src="https://i.ytimg.com/vi/MX7BW-JV0VE/hq2.jpg?sqp=-oaymwEoCOADEOgC8quKqQMcGADwAQH4Ad4DgALgA4oCDAgAEAEYciBLKDowDw==&rs=AOn4CLB2OgvQ6cTaQLqAJZgz64R7BOpXAQ " // iremos utilizar um mock devido ao sistema complexo de login e usuário,mas basta puxar do parâmetro a imagem do usuário e funcionará 
            alt="user foto"  
            className="rounded-full m-auto"/>
            </div>
            <div className="mt-4">
            <h1 className='text-3xl'>{user_name}</h1>
            </div>
            <div className="container grid-rows-3">
            <div className="m-5">
                <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    >
                    Actions
                    <FontAwesomeIcon icon= {faChevronDown} className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                </div>
                <Menu.Items
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                    Actions
                    <FontAwesomeIcon icon= {faChevronDown} className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                </div>
                <Menu.Items
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                    Actions
                    <FontAwesomeIcon icon= {faChevronDown} className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                </div>
                <Menu.Items
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
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
