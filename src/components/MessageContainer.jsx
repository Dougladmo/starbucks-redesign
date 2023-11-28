import { LightButton } from "./Button"

import background from '../assets/background.jpg'

const MessageContainer = () => {
  return (
    <div style={{backgroundImage: `url(${background})`}} className='w-11/12 md:w-full m-auto h-56 mb-12 bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center gap-11'>
        <p className='px-1 text-xl md:text-sm max-w-3/4 md:pt-8 text-center'>“A cada xícara, a cada conversa, com cada comunidade – Nós nutrimos infinitas possibilidades de conexão humana.”</p>
        <LightButton text='Saiba mais' />
    </div>
  )
}

export default MessageContainer