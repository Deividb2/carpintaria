import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Cabecalho() {

    const [menu, setMenu] = useState(false)

    return (
        <>
            <header className='hidden md:h-cabecalhoH md:flex md:justify-between md:items-center md:gap-10 pl-10 pr-72 font-grotesk'>
                <h1 className='text-30 font-bold text-black font-playfair'>
                    <Link to='/'>DS</Link>
                </h1>

                <nav>
                    <ul className='flex gap-10 font-bold font-grotesk'>
                        <li className='duration-300 ease-linear hover:text-branco-100'>
                            <Link to='/quem-somos'>Quem-somos</Link>
                        </li>

                        <li className='text-black duration-300 ease-linear hover:text-branco-100'>
                            <Link to='/produtos'>Produtos</Link>
                        </li>

                        <li className='text-black duration-300 ease-linear hover:text-branco-100'>
                            <Link to='/comoTrabalhamos'>Como trabalhos</Link>
                        </li>

                        <li className='text-black duration-300 ease-linear hover:text-branco-100'>
                            <Link to='/contato'>Contato</Link>
                        </li>
                    </ul>
                </nav>
                
                <span className='md:py-2 md:px-3 text-14 lg:py-3 lg:px-8 text-center bg-black font-bold text-white fixed right-10 cursor-pointer'>WhatsApp: (21)97974-9178</span>
            </header>

            {/* MENU MOBILE */}
            <header className='h-cabecalhoHMobile px-10 flex flex-col justify-center items-center bg-cinzaEscuro gap-3
                md:hidden'>
                <div className='w-full flex justify-between items-center'>
                    <h1 className='text-30 font-bold text-rosaPrincipal font-playfair'>
                        <Link to='/'>LOJA DS</Link>
                    </h1>

                    <div className='bg-transparent text-4xl text-rosaPrincipal relative z-2' 
                    onClick={() => setMenu(!menu)}
                    >{menu? <AiOutlineClose />:<AiOutlineMenu />}</div>                    
                </div>

                <div className='w-full h-telefoneAltura bg-rosaPrincipal flex items-center justify-center'>
                    <span className='font-bold text-center'>CONTATE-NOS: (21)97974-9178</span>
                </div>
            </header>

            <nav className={`transition-all ease-linear duration-300 ${menu? 'w-screen h-screen bg-cinzaEscuro text-rosaPrincipal absolute top-0 z-1':'h-0 overflow-hidden'}`}>
                <ul className='flex flex-col items-center justify-center h-full gap-5 font-bold font-grotesk text-xl'>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/quem-somos'>Quem-somos</Link></li>
                    <li><Link to='/servicos'>Produtos</Link></li>
                    <li><Link to='/galeria'>Como trabalhos</Link></li>
                    <li><Link to='/contato'>Contato</Link></li>
                </ul>
            </nav>
        </>
    )
}