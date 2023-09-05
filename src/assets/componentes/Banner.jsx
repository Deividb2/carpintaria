import React from 'react'
import Cabecalho from './Cabecalho'

export default function Banner() {

    return (
        <>
            <section className='h-screen md:relative'>
                <Cabecalho />
                <div className='bg-bannerHome bg-no-repeat bg-center bg-cover h-full pt-20 flex flex-col justify-center items-center
                    absolute top-0 left-0 right-0 z-negativo'>
                    <h2 className='text-70 font-playfair text-center text-branco-100 md:text-88'>
                        <span className='text-amareloPrincipal italic'>Conheça a</span><br /> Carpintaria
                    </h2>
                    <p className='w-larguraParagrafo font-bold text-branco-100 text-center font-grotesk'>
                        Recupere o charme e a funcionalidade dos seus móveis, confiando na nossa paixão pela madeira e no compromisso com a excelência. Valorize o seu lar com a magia da carpintaria!"
                    </p>
                </div>
            </section>
        </>
    )
}