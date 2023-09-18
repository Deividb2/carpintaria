import React from 'react'
import Cabecalho from '../componentes/Cabecalho'

export default function QuemSomos() {

    return (
        <>
            <div className='md:relative md:h-80'>
                <Cabecalho />
                <div className='bg-rosaPrincipal bg-no-repeat bg-center bg-cover h-40 flex justify-center items-center md:absolute md:top-0 md:left-0 md:right-0 md:z-negativo md:h-80 md:justify-start'>
                    <h2 className='text-40 text-branco-100 font-grotesk font-semibold drop-shadow-2xl
                    md:text-70 md:pl-10'
                    >QUEM SOMOS</h2>
                </div>
            </div>

            <section className='min-h-screen flex flex-wrap justify-center items-center m-5'>
                <div className='bg-daniSoares bg-no-repeat bg-cover w-72 h-72 rounded-full border-4 border-pink-400 mr-10
                animacaoImagem'></div> 
                <div>
                    <h4 className='text-2xl font-bold font-montserrat'>Um pouco sobre mim</h4>
                    <div className='w-32 h-1 bg-cinzaEscuro mt-2 mb-4 rounded-full'></div>
                    <p className='w-80 text-justify font-grotesk'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequatur, iste ea minima libero molestiae est cupiditate sit in provident deleniti distinctio aperiam minus accusamus et laboriosam voluptatum sint illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequatur, iste ea minima libero molestiae est cupiditate sit in provident deleniti distinctio aperiam minus accusamus et laboriosam voluptatum sint illum!</p>
                </div>
            </section>
        </>
    )
}