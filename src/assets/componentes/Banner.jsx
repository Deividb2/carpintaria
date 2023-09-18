import React from 'react'
import Cabecalho from './Cabecalho'

export default function Banner() {

    return (
        <>
            <section className='h-screen md:relative'>
                <Cabecalho />
                <div className='bg-banner_ds bg-no-repeat bg-center bg-cover h-full pt-20 flex flex-col justify-center items-center
                    absolute top-0 left-0 right-0 z-negativo'>
                </div>
            </section>
        </>
    )
}