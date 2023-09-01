import React from 'react'
import {BiLogoFacebook} from 'react-icons/bi'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'

export default function Rodape() {

    return (
        <>
            <footer className='bg-amareloPrincipal flex justify-around items-center'>
                <h3 className='font-grotesk'>Desenvolvido por Deivid Barreto</h3>
                <div className='flex gap-4 py-7'>
                    <BiLogoFacebook className='text-2xl' />
                    <FaTwitter className='text-2xl' />
                    <FaYoutube className='text-2xl' />
                </div>
            </footer>
        </>
    )
}