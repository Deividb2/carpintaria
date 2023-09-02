import React from 'react'
import Cabecalho from '../componentes/Cabecalho'
import imgFeitoAMao from '../imgs/feitoMao.webp'
import imgReformas from '../imgs/reformas.webp'
import imgManutencao from '../imgs/manutencao.webp'

export default function Servicos() {

    return (
        <>
            <div className='md:relative md:h-80'>
                <Cabecalho />
                <div className='bg-bannerServicos bg-no-repeat bg-center bg-cover h-40 flex justify-center items-center md:absolute md:top-0 md:left-0 md:right-0 md:z-negativo md:h-80 md:justify-start'>
                    <h2 className='text-40 text-branco-100 font-grotesk font-semibold
                    md:text-70 md:pl-10'
                    >Seviços</h2>
                </div>
            </div>

            <section className='flex flex-col md:items-center'>
                <h2 className='text-cinzaEscuro font-playfair text-20 text-center px-5 my-10 md:text-27 md:pr-20 md:mt-20'>
                    Sou um título. Clique aqui para editar e adicionar o seu próprio texto.
                </h2>

                <section className='flex flex-col gap-10 items-center md:flex-row md:items-center md:justify-center md:h-screen md:gap-10'>
                    <div className='w-larguraCardsServico'>
                        <h3 className='text-30 text-amareloPrincipal font-grotesk font-semibold text-center'>
                            MÓVEIS FEITOS<br /> À MÃO
                        </h3>
                        <img src={imgFeitoAMao} alt="Móveis" className='h-alturaImgsCardServico' />
                        <p className='py-4 w-4/5 font-playfair text-15 text-textoQuemSomos'>
                            Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes.
                        </p>
                    </div>

                    <div className='w-larguraCardsServico'>
                        <h3 className='text-30 text-amareloPrincipal font-grotesk font-semibold text-center'>
                            REFORMA<br /> PERSONALIZADA
                        </h3>
                        <img src={imgReformas} alt="Reforma" className='h-alturaImgsCardServico' />
                        <p className='py-4 w-4/5 font-playfair text-15 text-textoQuemSomos'>
                            Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes.
                        </p>
                    </div>

                    <div className='w-larguraCardsServico'>
                        <h3 className='text-30 text-amareloPrincipal font-grotesk font-semibold text-center'>
                            MANUTANÇAO DE<br /> IMÓVEIS
                        </h3>
                        <img src={imgManutencao} alt="Manutenção" className='h-alturaImgsCardServico' />
                        <p className='py-4 w-4/5 font-playfair text-15 text-textoQuemSomos'>
                            Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes.
                        </p>
                    </div>
                </section>
            </section>
        </>
    )
}