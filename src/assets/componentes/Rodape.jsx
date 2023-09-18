import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export default function Rodape() {

    return (
        <>
            <footer className='bg-black text-white flex flex-wrap justify-around items-center py-10 sm:py-0'>
                <h3 className='font-grotesk'>Desenvolvido por Deivid Barreto</h3>
                <div className='flex items-center gap-4 py-7 text-2xl'>
                    <FaWhatsapp />
                    <BsInstagram />
                    <AiOutlineMail /> 
                </div>
            </footer>
        </>
    )
}