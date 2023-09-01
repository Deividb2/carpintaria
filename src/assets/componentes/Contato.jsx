import React from 'react'
import Cabecalho from '../componentes/Cabecalho'

export default function Contato() {

    return (
        <>
            <div className='md:relative md:h-80'>
                <Cabecalho />
                <div className='bg-bannerContato bg-no-repeat bg-center bg-cover h-40 flex justify-center items-center md:absolute md:top-0 md:left-0 md:right-0 md:z-negativo md:h-80 md:justify-start'>
                    <h2 className='text-40 text-branco-100 font-grotesk font-semibold
                    md:text-70 md:pl-10'
                    >Contato</h2>
                </div>
            </div>
        </>
    )
}