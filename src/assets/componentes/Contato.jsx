import React from 'react'
import Cabecalho from '../componentes/Cabecalho'
import { FaWhatsapp } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export default function Contato() {

    return (
        <>
            <div className='md:relative md:h-80'>
                <Cabecalho />
                <div className='bg-rosaPrincipal bg-no-repeat bg-center bg-cover h-40 flex justify-center items-center md:absolute md:top-0 md:left-0 md:right-0 md:z-negativo md:h-80 md:justify-start'>
                    <h2 className='text-40 text-branco-100 font-grotesk font-semibold
                    md:text-70 md:pl-10'
                    >CONTATO</h2>
                </div>
            </div>

            <h2 className='text-cinzaEscuro font-playfair text-20 text-center my-10 px-4 md:text-left md:mx-36 md:text-25'>
                Estamos sempre prontos para te ouvir!
            </h2>

            <section className='flex flex-col gap-10 justify-around my-10 md:mx-36'>
                <div className='flex flex-wrap gap-5 justify-center md:justify-start'>
                    <div className='flex items-center gap-3 bg-rosaPrincipal px-6 py-3 rounded-xl'> 
                        <FaWhatsapp className='text-3xl' />
                        <div className='flex flex-col text-15'>
                            <h4 className='font-semibold'>Whatsapp</h4>
                            <span>(21) 97974-9178</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-3 bg-rosaPrincipal px-6 py-3 rounded-xl'>
                        <BsInstagram className='text-3xl' />
                        <div className='flex flex-col text-15'>
                            <h4 className='font-semibold'>Instagram</h4>
                            <span>@lojadanisoares</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-3 bg-rosaPrincipal px-6 py-3 rounded-xl'>
                        <AiOutlineMail className='text-3xl' />
                        <div className='flex flex-col text-15'>
                            <h4 className='font-semibold'>Email</h4>
                            <span>danisoaressss8@gmail.com</span>
                        </div>
                    </div>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14699.318168584603!2d-43.22312585!3d-22.91965725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1693685733258!5m2!1spt-BR!2sbr"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    className='w-2/3 h-72 self-center md:self-start'
                ></iframe>

            </section>
        </>
    )
}