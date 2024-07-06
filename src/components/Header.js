import React from "react";
import logo from '../media/cricket.png';
import './Header.css';

export const Header = () => {
    return (
        <>
            <nav>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-10" alt="Flowbite Logo" />
                        <a href="/" className="self-center text-2xl text-head whitespace-nowrap">CricNewz</a>
                    </div>
                    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-1 bg-transparent dark:border-gray-700">
                            
                            <li>
                                <div className="block text-color py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  dark:hover:bg-gray-700  md:dark:hover:bg-transparent">About</div>
                            </li>
                            <li>
                                <div className="block text-color py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  dark:hover:bg-gray-700  md:dark:hover:bg-transparent">Features</div>
                            </li>
                            <li>
                                <a href="/contact" className="block text-color py-2 px-3 md:p-0 rounded hover:bg-gray-500 md:hover:bg-transparent md:border-0  dark:hover:bg-gray-700  md:dark:hover:bg-transparent">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}