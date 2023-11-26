import { LightButton } from "./Button"

// eslint-disable-next-line react/prop-types
export const CardContainer = ({title, text, btnText, img}) => {
  return (
    <div className='w-11/12 m-auto  text-darkgreen bg-background-main bg-center bg-no-repeat bg-cover grid grid-cols-2 items-center justify-center mb-12'>
        <div className='img wrapper w-full'>
            <img className='w-full' src={img} alt="card image" />
        </div>
        <div className='m-auto flex flex-col items-center justify-center gap-12'>
            <h2 className='text-xl font-medium'>{title}</h2>
            <p className='text-lg font-normal text-center max-w-lg leading-10 tracking-wide'>{text}</p>
            <LightButton text={btnText}/>
        </div>
    </div>
  )
}

export default CardContainer
