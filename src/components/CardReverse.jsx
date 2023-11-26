import { LightButton } from "./Button"

// eslint-disable-next-line react/prop-types
export const CardReverseTwo  = ({title, btnText, img}) => {
    return (
      <div className='w-11/12 m-auto text-darkgreen bg-background-main bg-center bg-no-repeat bg-cover grid grid-cols-2 items-center justify-center mb-12 md:w-full md:flex md:flex-col-reverse'>
          <div className='m-auto max-w-1/2 flex flex-col items-center justify-center gap-12'>
              <h2 className='text-2xl text-center font-medium pt-8'>{title}</h2>
              <p className='text-lg font-normal text-center max-w-lg leading-10 tracking-wide'>Conheça nossa linha de <span className='font-bold'> Cold Brew e Refreshers™ </span></p>
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
      <div className='w-11/12 m-auto text-darkgreen bg-background-main bg-center bg-no-repeat bg-cover grid grid-cols-2 items-center justify-center mb-12 md:w-full md:flex md:flex-col-reverse'>
          <div className='m-auto flex flex-col items-center justify-center gap-12'>
              <h2 className='text-2xl font-medium pt-8'>{title}</h2>
              <p className='text-xl font-normal text-center max-w-lg leading-10 tracking-wide'>{text}</p>
              <LightButton text={btnText}/>
          </div>
          <div className='img wrapper w-full'>
              <img className='w-full' src={img} alt="card image" />
          </div>
      </div>
    )
}