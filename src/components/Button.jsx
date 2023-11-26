// eslint-disable-next-line react/prop-types
export const LightButton = ({ text }) => {
  return (
        <button className='py-1 px-5 font-semibold text-base transition duration-200 rounded-full border-solid bg-transparent border border-slate-950 hover:scale-90 hover:shadow-md shadow-black hover:brightness-50 md:mb-8'>{text}</button>
    )
}

// eslint-disable-next-line react/prop-types
export const DarkButton = ({ text }) => {
    return (
      <a href="#" className='py-2 pb-2 px-5 font-semibold text-lg rounded-full transition duration-200 border-none bg-zinc-800 text-white hover:scale-90 hover:shadow-md shadow-black'>{text}</a>
      )
  }
