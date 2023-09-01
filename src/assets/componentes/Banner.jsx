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
                        Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes.
                    </p>
                </div>
            </section>
        </>
    )
}