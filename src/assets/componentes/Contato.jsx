import React from 'react'
import Cabecalho from '../componentes/Cabecalho'
import { BiLogoFacebook } from 'react-icons/bi'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

export default function Contato() {

    return (
        <>
            <div className='md:relative md:h-80'>
                <Cabecalho />
                <div className='bg-bannerContato bg-no-repeat bg-center bg-cover h-40 flex justify-center items-center md:absolute md:top-0 md:left-0 md:right-0 md:z-negativo md:h-80 md:justify-start'>
                    <h2 className='text-40 text-branco-100 font-grotesk font-semibold
                    md:text-70 md:pl-10'
                    >Contato</h2>
                </div>
            </div>

            <h2 className='text-cinzaEscuro font-playfair text-20 text-center my-10 px-4 md:text-left md:mx-36 md:text-25'>
                Estamos sempre prontos para te ouvir!
            </h2>

            <section className='md:grid md:grid-cols-2 md:grid-rows-2 md:gap-10 md:mx-36'>
                <form className='flex flex-col gap-2 px-4'>
                    <div className='flex flex-col gap-2 md:grid md:grid-cols-2'>
                        <input type="text" name="nome" placeholder='Nome'
                            className='bg-amareloPrincipal px-4 py-2 text-cinzaEscuro italic placeholder:text-cinzaEscuro placeholder:font-playfair outline-none border-2 border-white
                            hover:border-cinzaEscuro' required />
                        <input type="tel" name="telefone" placeholder='Telefone'
                            className='bg-amareloPrincipal px-4 py-2 text-cinzaEscuro italic placeholder:text-cinzaEscuro placeholder:font-playfair outline-none border-2 border-white
                            hover:border-cinzaEscuro' required />
                    </div>
                    <input type="email" name="email" placeholder='Email'
                        className='bg-amareloPrincipal px-4 py-2 text-cinzaEscuro italic placeholder:text-cinzaEscuro placeholder:font-playfair outline-none border-2 border-white hover:border-cinzaEscuro' required />

                    <textarea name="mensagem" placeholder='Digite uma mensagem aqui...'
                        className='h-G3-A resize-none pl-5 pt-2 bg-amareloPrincipal text-cinzaEscuro italic placeholder:text-cinzaEscuro placeholder:font-playfair outline-none border-2 border-white hover:border-cinzaEscuro' ></textarea>
                    <input type="submit" value="Enviar" className='font-grotesk font-semibold text-branco-100 bg-cinzaEscuro py-2 cursor-pointer' />
                </form>

                <div className='flex flex-col items-center gap-10 my-10 md:my-0 md:items-start'>
                    <div>
                        <h3 className='text-amareloPrincipal text-2xl font-grotesk font-semibold'>ENTRE EM CONTATO</h3>
                        <div className='flex flex-col items-center text-cinzaEscuro text-15 font-playfair md:items-start'>
                            <span>(11) 3456-7890</span>
                            <a href="#">info@meusite.com</a>
                            <span>Av. Bernardino de Campos 98</span>
                            <span>São Paulo, SP 12345-678</span>
                        </div>
                    </div>

                    <div className='hidden md:flex text-2xl gap-2'>
                        <a href="#"><BiLogoFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>

                    <div>
                        <h2 className='text-amareloPrincipal text-2xl font-grotesk font-semibold'>PEÇA UM ORÇAMENTO GRÁTIS</h2>
                        <div className='flex flex-col items-center text-cinzaEscuro text-15 font-playfair md:items-start'>
                            <span>Precisa de um carpinteiro em São Paulo?</span>
                            <span>Ligue agora: (11) 3456-7890</span>
                        </div>
                    </div>

                    <div className='md:hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14699.318168584603!2d-43.22312585!3d-22.91965725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1693685733258!5m2!1spt-BR!2sbr"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className='hidden md:block md:col-start-1 md:col-end-3'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14699.318168584603!2d-43.22312585!3d-22.91965725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1693685733258!5m2!1spt-BR!2sbr"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        className='w-full h-72'
                    ></iframe>
                </div>
            </section>
        </>
    )
}