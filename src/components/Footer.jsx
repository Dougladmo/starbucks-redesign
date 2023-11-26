import { FaSpotify, FaYoutube, FaLinkedin, FaInstagram, FaFacebook  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full pl-32 pt-12 pr-10 pb-8 font-Open'>
        <div className='Footer-top flex border-b-2 border-lightgray mb-12 pb-16'>
            <div className='flex flex-col'>
                <h3 className='text-lg font-semibold'>Sobre nós</h3>
                <ul  className='text-gray-600 mt-5 text-xs flex flex-col gap-7 max-w-xs text-gray '>
                    <li><a href="#">Nossa empresa</a></li>
                    <li><a href="#">Nosso café</a></li>
                    <li><a href="#">Atendimento ao cliente</a></li>
                    <li><a href="#">Compliance e Privacidade</a></li>
                    <li><a href="#">Código de Etica e Conduta SouthRock</a></li>
                </ul>
            </div>
            <div className='flex flex-col ml-10'>
                <h3 className='text-lg font-semibold'>Carreira</h3>
                <ul  className='text-gray-600 mt-5 text-xs flex flex-col gap-7 max-w-xs text-gray '>
                    <li><a href="#">Central de carreiras</a></li>
                </ul>
            </div>
            <div className='flex flex-col  ml-10'>
                <h3 className='text-lg font-semibold'>Impacto social</h3>
                <ul  className='text-gray-600 mt-5 text-xs flex flex-col gap-7 max-w-xs text-gray '>
                    <li><a href="#">Comunidade</a></li>
                    <li><a href="#">Meio Ambiente</a></li>
                    <li><a href="#">Fornecimento ético</a></li>
                    <li><a href="#">Histórias Starbucks</a></li>
                </ul>
            </div>
            <div className='flex flex-col ml-10 '>
                <h3 className='text-lg font-semibold'>Starbucks rewards</h3>
                <ul className='text-gray-600 mt-5 text-xs flex flex-col gap-7 max-w-xs text-gray '>
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
                <li className="hover:opacity-80 hover:scale-125 transition duration-300"><a href="#"><FaSpotify className="text-4xl"/></a></li>
                <li className="hover:opacity-80 hover:scale-125 transition duration-300"><a href="#"><FaFacebook className="text-4xl text-white p-2 rounded-full bg-black "/></a></li>
                <li className="hover:opacity-80 hover:scale-125 transition duration-300"><a href="#"><FaLinkedin className="text-4xl text-white p-2 rounded-full bg-black"/></a></li>
                <li className="hover:opacity-80 hover:scale-125 transition duration-300"><a href="#"><FaInstagram className="text-4xl text-white p-2 rounded-full bg-black"/></a></li>
                <li className="hover:opacity-80 hover:scale-125 transition duration-300"><a href="#"><FaYoutube className="text-4xl text-white p-2 rounded-full bg-black"/></a></li>
                <li className="hover:opacity-80 hover:scale-125 transition duration-300"><a href="#"><FaXTwitter className="text-4xl text-white p-2 rounded-full bg-black"/></a></li>
            </ul>
        </div>
        <div className="politicas">
            <ul className="flex gap-3 text-sm mt-7 mb-12">
                <li  className="border-r-2 pr-3">
                    <a href="#">
                        Políticas de privacidade 
                    </a>
                </li>
                <li className="border-r-2 pr-3">
                    <a href="#">
                        Política de troca de produto
                    </a>
                </li>
                <li className="border-r-2 pr-3">
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