import React from "react";
import Cabecalho from "./Cabecalho";
import { BsBagHeart } from "react-icons/bs";
import { ImDropbox } from "react-icons/im";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GiBanknote } from "react-icons/gi";
import { BiCreditCard } from "react-icons/bi";
import { RiBarcodeFill } from "react-icons/ri";

export default function ComoTrabalhamos() {
    return (
        <>
        <div className="md:relative md:h-80">
            <Cabecalho />
            <div className="bg-rosaPrincipal bg-no-repeat bg-center bg-cover h-40 flex justify-center items-center md:absolute md:top-0 md:left-0 md:right-0 md:z-negativo md:h-80 md:justify-start">
            <h2
                className="text-40 text-branco-100 font-grotesk font-semibold
                        md:text-70 md:pl-10"
            >
                COMO TRABALHAMOS
            </h2>
            </div>
        </div>

        <section className="flex flex-wrap justify-center gap-10 py-20 mx-2">
            <div className="flex flex-col justify-between items-center text-center w-72 gap-5 px-5 py-10 bg-rosaPrincipal rounded-md">
                <div className="flex flex-col items-center gap-3">
                    <BsBagHeart className="text-4xl" />
                    <h3 className="text-xl font-bold">Retirada</h3>
                </div>
                <p className="text-16 font-grotesk">
                    Prezamos pela organização na hora da entrega. <strong>Portanto
                    a retirada é feita em um local fixo.</strong> Caso fique
                    ruim para o cliente,temos também a opção de entrega
                </p>
                <div className="p-2 bg-pink-400 rounded-lg">
                    <span className="font-bold text-sm font-grotesk">
                    Local para retirada: Rua Vidal de Negreiros - Santo Cristo, RJ
                    </span>
                </div>
            </div>

            <div className="flex flex-col justify-between items-center text-center w-72 gap-5 px-5 py-10 bg-rosaPrincipal rounded-md">
                <div className="flex flex-col items-center gap-3">
                    <ImDropbox className="text-4xl" />
                    <h3 className="text-xl font-bold">
                    Como fazer a sua <strong>encomenda</strong>?
                    </h3>
                </div>

                <ul className="text-start list-disc ml-5 grid gap-2 text-sm font-grotesk">
                    <li>Escolher a peça (cor e tamanho);</li>
                    <li>Veja a disponibilidade da loja;</li>
                    <li>
                    Se disponível, fazer o pagamento de 50% do valor da compra e
                    aguardar confirmação;
                    </li>
                    <li>Agora é só aguardar o seu pedido chegar até você.</li>
                </ul>

                <div className="bg-pink-400 p-2 rounded-md">
                    <span className="text-sm font-grotesk">
                    <strong>OBS: não realizamos trocas</strong> e em caso de
                    desistência,{" "}
                    <strong>não fazemos a devolução do valor pago.</strong>
                    </span>
                </div>
            </div>

            <div className="flex flex-col justify-between items-center text-center w-72 gap-5 px-5 py-10 bg-rosaPrincipal rounded-md">
                <div className="flex flex-col items-center gap-3">
                    <FaHandHoldingDollar className="text-4xl" />
                    <h3 className="text-xl font-bold">
                    Formas de{" "}
                    <strong>
                        <br />
                        pagamento
                    </strong>
                    </h3>
                </div>

                <div>
                    <div className="grid gap-3 font-grotesk">
                    <div className="flex justify-between items-center gap-5">
                        <div className="text-start">
                        <h3>Cartão de débito ou crédito</h3>
                        <span>Parcelamento com juros</span>
                        </div>
                        <BiCreditCard className="text-3xl" />
                    </div>

                    <div className="flex justify-between items-center gap-5">
                        <h3>Pix ou dinheiro</h3>
                        <GiBanknote className="text-3xl" />
                    </div>

                    <div className="flex justify-between items-center gap-5">
                        <h3>Boleto</h3>
                        <RiBarcodeFill className="text-3xl" />
                    </div>
                    </div>
                </div>

                <div className="bg-pink-400 p-2 rounded-md text-sm">
                    <span>
                    Pagamento <strong>de 50% do valor</strong> para{" "}
                    <strong>confirmação da compra.</strong> Em caso de desistência,{" "}
                    <strong>não fazemos devolução.</strong>
                    </span>
                </div>
            </div>
        </section>
        </>
    );
}
