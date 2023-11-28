import { LightButton } from "./Button"

import background from '../assets/background.jpg'

// eslint-disable-next-line react/prop-types
export const CardContainer = ({title, text, btnText, img}) => {
  return (
    <div style={{backgroundImage: `url(${background})`}} className='w-11/12 m-auto  text-darkgreen bg-center bg-no-repeat bg-cover grid grid-cols-2 items-center justify-center mb-12 md:w-full md:flex md:flex-col '>
        <div className='img wrapper w-full'>
            <img className='w-full' src={img} alt="card image" />
        </div>
        <div className='m-auto flex flex-col items-center justify-center gap-5'>
            <h2 className='text-2xl md:max-w-1/2 md:text-center font-medium md:pt-8'>{title}</h2>
            <p className='text-lg font-normal md:font-medium text-center max-w-lg leading-10 md:leading-6 md:text-sm md:max-w-3/4 tracking-wide'>{text}</p>
            <LightButton text={btnText}/>
        </div>
    </div>
  )
}

export default CardContainer
