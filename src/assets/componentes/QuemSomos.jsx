import React from 'react'
import Cabecalho from '../componentes/Cabecalho'

export default function QuemSomos() {

    return (
        <>
            <div className='md:relative md:h-80'>
                <Cabecalho />
                <div className='bg-bannerQuemSomos bg-no-repeat bg-center bg-cover h-40 flex justify-center items-center md:absolute md:top-0 md:left-0 md:right-0 md:z-negativo md:h-80 md:justify-start'>
                    <h2 className='text-40 text-branco-100 font-grotesk font-semibold
                    md:text-70 md:pl-10'
                    >QUEM SOMOS</h2>
                </div>
            </div>

            <section className='min-h-screen flex flex-col justify-center gap-11 p-5 text-center sm:p-20
                md:flex-row md:items-center md:text-left'>
                <div>
                    <h3 className='text-27 text-amareloPrincipal font-playfair font-bold'>
                        EXCELÊNCIA E<br /> PROFISSIONALISMO
                    </h3>
                    <p className='text-15 text-textoQuemSomos font-playfair'>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. </p>
                </div>

                <div>
                    <h3 className='text-27 text-amareloPrincipal font-playfair font-bold'>LICENCIADO E<br /> SEGURO</h3>
                    <p className='text-15 text-textoQuemSomos font-playfair'>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. </p>
                </div>

                <div>
                    <h3 className='text-27 text-amareloPrincipal font-playfair font-bold'>ABORDAGEM PERSONALIZADA</h3>
                    <p className='text-15 text-textoQuemSomos font-playfair'>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. </p>
                </div>
            </section>
        </>
    )
}