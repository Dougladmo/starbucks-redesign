import { FaSpotify, FaYoutube, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const [isActiveAbout, setIsActiveAbout] = useState(false)
    const [isActiveCareers, setIsActiveCareers] = useState(false)
    const [isActiveImpact, setIsActiveImpact] = useState(false)
    const [isActiveRewards, setIsActiveRewards] = useState(false)

    const handleClickAbout = () => {
        if (isActiveAbout == false) {
            setIsActiveAbout(true)
        } else {
            setIsActiveAbout(false)
        }
    }

    const handleClickCareers = () => {
        if (isActiveCareers == false) {
            setIsActiveCareers(true)
        } else {
            setIsActiveCareers(false)
        }
    }

    const handleClickImpact = () => {
        if (isActiveImpact == false) {
            setIsActiveImpact(true)
        } else {
            setIsActiveImpact(false)
        }
    }

    const handleClickRewards = () => {
        if (isActiveRewards == false) {
            setIsActiveRewards(true)
        } else {
            setIsActiveRewards(false)
        }
    }

    return (
        <div className='w-full pl-32 md:pl-5 pt-12 pr-10 pb-8 font-Open'>
            <div className='Footer-top flex md:flex md:flex-col md:gap-10 md:items-start md:justify-center border-b-2 border-lightgray mb-12 pb-16'>
                <div className='flex flex-col select md:w-full md:ml-0'>
                    <h3 className='text-xl font-semibold md:flex md:items-center md:justify-between' onClick={handleClickAbout}>Sobre nós
                        {isActiveAbout ?
                            (<MdKeyboardArrowUp className="lg:hidden text-4xl" />)
                            :
                            (<MdKeyboardArrowDown className="lg:hidden text-4xl" />)
                        }
                    </h3>
                    <ul className={`text-gray-600 mt-5 text-xs md:text-base flex flex-col gap-7 max-w-xs text-gray ${isActiveAbout ? '' : 'md:hidden'}`}>
                        <li><a href="#">Nossa empresa</a></li>
                        <li><a href="#">Nosso café</a></li>
                        <li><a href="#">Atendimento ao cliente</a></li>
                        <li><a href="#">Compliance e Privacidade</a></li>
                        <li><a href="#">Código de Etica e Conduta SouthRock</a></li>
                    </ul>
                </div>
                <div className='flex flex-col select md:w-full ml-10 md:ml-0'>
                    <h3 className='text-xl font-semibold md:flex md:items-center md:justify-between' onClick={handleClickCareers}>Carreira
                        {isActiveCareers ?
                            (<MdKeyboardArrowUp className="lg:hidden text-4xl" />)
                            :
                            (<MdKeyboardArrowDown className="lg:hidden text-4xl" />)
                        }
                    </h3>
                    <ul className={`text-gray-600 mt-5 text-xs md:text-base flex flex-col gap-7 max-w-xs text-gray ${isActiveCareers ? '' : 'md:hidden'}`}>
                        <li><a href="#">Central de carreiras</a></li>
                    </ul>
                </div>
                <div className='flex flex-col select md:w-full ml-10 md:ml-0'>
                    <h3 className='text-xl font-semibold md:flex md:items-center md:justify-between' onClick={handleClickImpact}>
                        Impacto social
                        {isActiveImpact ?
                            (<MdKeyboardArrowUp className="lg:hidden text-4xl" />)
                            :
                            (<MdKeyboardArrowDown className="lg:hidden text-4xl" />)
                        }
                    </h3>
                    <ul className={`text-gray-600 mt-5 text-xs md:text-base flex flex-col gap-7 max-w-xs text-gray ${isActiveImpact ? '' : 'md:hidden'}`}>
                        <li><a href="#">Comunidade</a></li>
                        <li><a href="#">Meio Ambiente</a></li>
                        <li><a href="#">Fornecimento ético</a></li>
                        <li><a href="#">Histórias Starbucks</a></li>
                    </ul>
                </div>
                <div className='flex flex-col select md:w-full ml-10 md:ml-0 '>
                    <h3 className='text-xl font-semibold md:flex md:items-center md:justify-between' onClick={handleClickRewards}>Starbucks rewards
                        {isActiveRewards ?
                            (<MdKeyboardArrowUp className="lg:hidden text-4xl" />)
                            :
                            (<MdKeyboardArrowDown className="lg:hidden text-4xl" />)}
                    </h3>
                    <ul className={`text-gray-600 mt-5 text-xs md:text-base flex flex-col gap-7 max-w-xs text-gray ${isActiveRewards ? '' : 'md:hidden'}`}>
                        <li><a href="#">Baixa o Aplicativo</a></li>
                        <li><a href="#">Termos & Condições do Starbucks Card</a></li>
                        <li><a href="#">Termos & Condições do Starbucks Rewards</a></li>
                        <li><a href="#">Termos & Condições do Gift Card</a></li>
                        <li><a href="#">Termos & Condições de Promoções Starbucks</a></li>
                        <li><a href="#">Termos & Condições Peça e Pague pelo Celular e Retire na Loja</a></li>
                    </ul>
                </div>
            </div>
            <div className="social-media">
                <ul className="flex my-3.5 gap-5">
                    <li className="hover:opacity-80 hover:scale-125 transition duration-300"><a href="#"><FaSpotify className="text-4xl" /></a></li>
                    <li className="hover:opacity-80 hover:scale-125 transition duration-300"><a href="#"><FaFacebook className="text-4xl text-white p-2 rounded-full bg-black " /></a></li>
                    <li className="hover:opacity-80 hover:scale-125 transition duration-300"><a href="#"><FaLinkedin className="text-4xl text-white p-2 rounded-full bg-black" /></a></li>
                    <li className="hover:opacity-80 hover:scale-125 transition duration-300"><a href="#"><FaInstagram className="text-4xl text-white p-2 rounded-full bg-black" /></a></li>
                    <li className="hover:opacity-80 hover:scale-125 transition duration-300"><a href="#"><FaYoutube className="text-4xl text-white p-2 rounded-full bg-black" /></a></li>
                    <li className="hover:opacity-80 hover:scale-125 transition duration-300"><a href="#"><FaXTwitter className="text-4xl text-white p-2 rounded-full bg-black" /></a></li>
                </ul>
            </div>
            <div className="politicas">
                <ul className="flex gap-3 text-sm mt-7 mb-12 md:flex md:flex-col md:gap-5">
                    <li className="border-r-2 pr-3 md:border-none hover:opacity-70 transition duration-300">
                        <a href="#">
                            Políticas de privacidade
                        </a>
                    </li>
                    <li className="border-r-2 pr-3 md:border-none hover:opacity-70 transition duration-300">
                        <a href="#">
                            Política de troca de produto
                        </a>
                    </li>
                    <li className="border-r-2 pr-3 md:border-none hover:opacity-70 transition duration-300">
                        <a href="#">
                            Termos de uso
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Política de cookies
                        </a>
                    </li>
                </ul>
            </div>
            <div className="copyright">
                <p className="text-sm text-gray">
                    © 2023 Starbucks Coffee Company. Todos os direitos reservados.
                </p>
            </div>
        </div>
    )
}

export default Footer