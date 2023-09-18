import React from 'react'
import Cabecalho from '../componentes/Cabecalho'
import img1 from '../imgs/img1.jpg'
import img2 from '../imgs/img2.jpg'
import img3 from '../imgs/img3.jpg'
import img4 from '../imgs/img4.jpg'
import img5 from '../imgs/img5.jpg'
import img6 from '../imgs/img6.jpg'
import img7 from '../imgs/img7.jpg'
import img8 from '../imgs/img8.jpg'
import img9 from '../imgs/img9.jpg'


const imagensRoupas = [
    {
        imgSrc: img1
    },
    {
        imgSrc: img2
    },
    {
        imgSrc: img3
    },
    {
        imgSrc: img4
    },
    {
        imgSrc: img5
    },
    {
        imgSrc: img6
    },
    {
        imgSrc: img7
    },
    {
        imgSrc: img8
    },
    {
        imgSrc: img9
    },
]

const Roupas = ({imagemProduto}) => {
    return (
        <>
            <img src={imagemProduto.imgSrc} alt="Roupa" className='h-full' />
        </>
    )
}


export default function Produtos() {

    return (
        <>
            <div className='md:relative md:h-80'>
                <Cabecalho />
                <div className='bg-rosaPrincipal bg-no-repeat bg-center bg-cover h-40 flex justify-center items-center md:absolute md:top-0 md:left-0 md:right-0 md:z-negativo md:h-80 md:justify-start'>
                    <h2 className='text-40 text-branco-100 font-grotesk font-semibold
                    md:text-70 md:pl-10'
                    >PRODUTOS</h2>
                </div>
            </div>

            <section className='flex flex-col md:items-center'>
                <h2 className='text-cinzaEscuro font-playfair text-20 text-center px-5 my-10 md:text-27 md:pr-20 md:mt-20'>
                    Alguns de nossos produtos
                </h2>

                <section className='grid auto-rows-max gap-1 mb-20 mx-2 md:min-h-screen md:grid-cols-3'>
                    {imagensRoupas.map((elemento, index) => <Roupas imagemProduto={elemento} key={index} />)}
                </section>
            </section>
        </>
    )
}