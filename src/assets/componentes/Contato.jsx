import React from 'react'
import Cabecalho from '../componentes/Cabecalho'
import {BiLogoFacebook} from 'react-icons/bi'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'

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

            <h2>Sou um título. Clique aqui para editar e adicionar o seu próprio texto.</h2>

            <section>
                <form>
                    <div>
                        <input type="text" name="nome" placeholder='Nome' />
                        <input type="tel" name="telefone" placeholder='Telefone' />
                    </div>
                    <input type="email" name="email" placeholder='Email' />
                    <textarea name="mensagem" placeholder='Digite uma mensagem aqui...' ></textarea>
                    <input type="submit" value="Enviar" />
                </form>

                <div>
                    <div>
                        <h3>ENTRE EM CONTATO</h3>
                        <div>
                            <span>(11) 3456-7890</span>
                            <a href="#">info@meusite.com</a>
                            <span>Av. Bernardino de Campos 98</span>
                            <span>São Paulo, SP 12345-678</span>
                        </div>
                    </div>
                    
                    <div>
                        <a href="#"><BiLogoFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>

                    <div>
                        <h2>PEÇA UM ORÇAMENTO GRÁTIS</h2>
                        <div>
                            <span>Precisa de um carpinteiro em São Paulo?</span>
                            <span>Ligue agora: (11) 3456-7890</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}