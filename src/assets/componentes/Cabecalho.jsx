import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Cabecalho() {

    const [menu, setMenu] = useState(false)

    return (
        <>
            <header className='hidden md:h-cabecalhoH md:flex md:justify-between md:items-center md:gap-10 pl-10 pr-72 font-grotesk'>
                <h1 className='text-30 font-bold text-amareloPrincipal font-playfair'>
                    <Link to='/'>Carpintaria</Link>
                </h1>

                <nav>
                    <ul className='flex gap-10 font-bold'>
                        <li className='text-branco-100 transition-all ease-linear duration-150 hover:text-amareloPrincipal'><Link to='/quem-somos'>QUEM SOMOS</Link></li>
                        <li className='text-branco-100 transition-all ease-linear duration-150 hover:text-amareloPrincipal'><Link to='/servicos'>SERVIÇOS</Link></li>
                        <li className='text-branco-100 transition-all ease-linear duration-150 hover:text-amareloPrincipal'><Link to='/galeria'>GALERIA</Link></li>
                        <li className='text-branco-100 transition-all ease-linear duration-150 hover:text-amareloPrincipal'><Link to='/contato'>CONTATO</Link></li>
                    </ul>
                </nav>
                
                <span className='md:py-2 md:px-3 text-14 lg:py-3 lg:px-10 text-center bg-amareloPrincipal font-bold text-cinzaEscuro fixed right-10'>LIGUE: (11)34567890</span>
            </header>

            {/* MENU MOBILE */}
            <header className='h-cabecalhoHMobile px-10 flex flex-col justify-center items-center bg-cinzaEscuro gap-3
                md:hidden'>
                <div className='w-full flex justify-between items-center'>
                    <h1 className='text-30 font-bold text-amareloPrincipal font-playfair'>
                        <Link to='/'>CARPINTARIA</Link>
                    </h1>

                    <button className='bg-transparent text-4xl text-amareloPrincipal relative z-2' 
                    onClick={() => setMenu(!menu)}
                    >{menu? <AiOutlineClose className='text-cinzaEscuro' />:<AiOutlineMenu />}</button>                    
                </div>

                <div className='w-full h-telefoneAltura bg-amareloPrincipal flex items-center        justify-center'>
                    <span className='font-bold'>LIGUE: (11)34567890</span>
                </div>
            </header>

            <nav className={`transition-all ease-linear duration-300 ${menu? 'w-screen h-screen bg-amareloPrincipal absolute top-0 z-1':'h-0 overflow-hidden'}`}>
                <ul className='flex flex-col items-center justify-center h-full gap-5 font-bold font-grotesk text-xl'>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/quem-somos'>QUEM SOMOS</Link></li>
                    <li><Link to='/servicos'>SERVIÇOS</Link></li>
                    <li><Link to='/galeria'>GALERIA</Link></li>
                    <li><Link to='/contato'>CONTATO</Link></li>
                </ul>
            </nav>
        </>
    )
}