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
                    <p className='text-15 text-textoQuemSomos font-playfair'>Oferecemos garantias de excelência e profissionalismo em qualquer dos serviços prestados, assegurando a máxima confidencialidade e respeito pelo pedido do cliente.</p>
                </div>

                <div>
                    <h3 className='text-27 text-amareloPrincipal font-playfair font-bold'>LICENCIADO E<br /> SEGURO</h3>
                    <p className='text-15 text-textoQuemSomos font-playfair'>Estamos orgulhosos de oferecer produtos licenciados e seguros, garantindo que cada peça de madeira que sai da nossa oficina seja construída com cuidado e precisão.</p>
                </div>

                <div>
                    <h3 className='text-27 text-amareloPrincipal font-playfair font-bold'>ABORDAGEM<br /> PERSONALIZADA</h3>
                    <p className='text-15 text-textoQuemSomos font-playfair'>Oferecemos um serviço personalizado que vai além das expectativas, transformando seus projetos de madeira em realidade. Com profissionais altamente qualificados cuidamos de cada detalhe para entregar resultados excepcionais.</p>
                </div>
            </section>
        </>
    )
}