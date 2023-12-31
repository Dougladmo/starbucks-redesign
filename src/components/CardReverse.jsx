import { LightButton } from "./Button"

import background from '../assets/background.jpg'

// eslint-disable-next-line react/prop-types
export const CardReverseTwo  = ({title, btnText, img}) => {
    return (
      <div style={{backgroundImage: `url(${background})`}} className='w-11/12 m-auto text-darkgreen bg-center bg-no-repeat bg-cover grid grid-cols-2 items-center justify-center mb-12 md:w-full md:flex md:flex-col-reverse'>
          <div className='m-auto flex flex-col items-center justify-center gap-5'>
              <h2 className='text-2xl text-center md:max-w-3/4  font-medium pt-8'>{title}</h2>
              <p className='text-lg font-normal text-center max-w-lg md:max-w-3/4 md:text-base leading-10 tracking-wide'>Conheça nossa linha de <span className='font-bold'> Cold Brew e Refreshers™ </span></p>
              <LightButton text={btnText}/>
          </div>
          <div className='img wrapper w-full'>
              <img className='w-full' src={img} alt="card image" />
          </div>
      </div>
    )
}

// eslint-disable-next-line react/prop-types
export const CardReverseDefault  = ({title, btnText, img, text}) => {
    return (
      <div style={{backgroundImage: `url(${background})`}} className='w-11/12 m-auto text-darkgreen bg-center bg-no-repeat bg-cover grid grid-cols-2 items-center justify-center mb-12 md:w-full md:flex md:flex-col-reverse'>
          <div className='m-auto flex flex-col items-center justify-center gap-5'>
              <h2 className='text-2xl font-medium pt-8'>{title}</h2>
              <p className='text-xl font-normal text-center max-w-lg md:max-w-3/4 md:text-base leading-10 tracking-wide'>{text}</p>
              <LightButton text={btnText}/>
          </div>
          <div className='img wrapper w-full'>
              <img className='w-full' src={img} alt="card image" />
          </div>
      </div>
    )
}