import React from 'react'
import Cabecalho from '../componentes/Cabecalho'

export default function Galeria() {

    return (
        <>
            <div className='md:relative md:h-80'>
                <Cabecalho />
                <div className='bg-bannerGaleria bg-no-repeat bg-center bg-cover h-40 flex justify-center items-center md:absolute md:top-0 md:left-0 md:right-0 md:z-negativo md:h-80 md:justify-start'>
                    <h2 className='text-40 text-branco-100 font-grotesk font-semibold
                    md:text-70 md:pl-10'
                    >Galeria</h2>
                </div>
            </div>

            <section className='md:flex md:justify-center'>
                <div className='flex flex-col items-center gap-1 min-h-screen px-10 my-14 md:w-1/2'>
                    <div className='flex h-alturaGaleriaDivs w-full gap-1'>
                        <div className='bg-galeria1 bg-no-repeat bg-center bg-cover w-full'></div>
                        <div className='bg-galeria2 bg-no-repeat bg-center bg-cover w-full'></div>
                    </div>

                    <div className='bg-galeria3 bg-no-repeat bg-center bg-cover h-G3-A w-full'></div>
                    <div className='bg-galeria4 bg-no-repeat bg-center bg-cover h-G4-A w-full'></div>

                    <div className='flex h-127 w-full gap-1'>
                        <div className='bg-galeria5 bg-no-repeat bg-center bg-cover w-full'></div>
                        <div className='bg-galeria6 bg-no-repeat bg-center bg-cover w-138'></div>
                    </div>

                    <div className='bg-galeria7 bg-no-repeat bg-center bg-cover w-full h-G4-A'></div>

                    <div className='flex h-alturaGaleriaDivs w-full gap-1'>
                        <div className='bg-galeria8 bg-no-repeat bg-center bg-cover w-full'></div>
                        <div className='bg-galeria9 bg-no-repeat bg-center bg-cover w-full'></div>
                    </div> 
                </div>
            </section>
        </>
    )
}