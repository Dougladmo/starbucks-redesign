import {Fade , Slide} from 'react-awesome-reveal'

import background from './assets/background.jpg'
import Header from './components/Header'
import Cups from './assets/cups.svg'
import Grao1 from './assets/graocafe.svg'
import Grao2 from './assets/graocafe2.svg'
import MessageContainer from './components/MessageContainer'
import {CardReverseDefault} from './components/CardReverse'
import {CardReverseTwo} from './components/CardReverse'
import CardContainer from './components/CardContainer'
import Footer from './components/Footer'

import CardImg1 from './assets/15170_SBUX_REW_BANNERS3MAIO_01.png'
import CardImg2 from './assets/15170_SBUX_REW_BANNERS3MAIO-02.png'
import CardImg3 from './assets/guatemala.jpg'
import CardImg4 from './assets/team.jpg'

function App() {
  
  return (
    <div>
      <div style={{backgroundImage: `url(${background})`}} className='first section bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center pt-10'>
        <Header />
        <Fade duration={1000}>
          <h1 className='text-green md:text-5xl md:mb-7 text-8xl font-bold font-Manrope flex flex-col drop-shadow-md pt-16'>Good Coffee<span className=' text-white drop-shadow-md'>Good Moods</span></h1>
        </Fade>
          <div className='flex'>
            <Slide triggerOnce direction='up' delay={550} duration={1500} className='flex items-end'>
            <Fade duration={3000}>
              <img src={Grao1} alt="Grãos dafé"/>
            </Fade>
            </Slide>
            <Slide triggerOnce direction='up' duration={1000}>
            <Fade duration={2000}>
              <img src={Cups} alt="Starbucks cups" />
            </Fade>
            </Slide>
            <Slide triggerOnce direction='up' delay={500} duration={1500}>
            <Fade duration={3000}>
              <img src={Grao2} alt="Grãos dafé"/>
            </Fade>
            </Slide>
          </div>
      </div>
      <div className='main bg-white pb-20 w-full m-auto pt-10 shadow-inner'>
        <MessageContainer />
        <CardContainer 
            title='Sua pausa mais saborosa!'
            text='Você pode fazer seu pedido sem pegar filas, pedindo pelo aplicativo da Starbucks e retirando na sua loja preferida.'
            btnText='Peça pelo app e retire na loja'
            img={CardImg1}
            />
            <CardReverseTwo 
            title='Uma surpresa refrescante para você'
            btnText='Saiba mais'
            img={CardImg2}
            />
            <CardContainer
            title='Coisas boas estão acontecendo'
            text='Acreditamos que podemos e devemos gerar um impacto positivo nas comunidades em que atuamos.'
            btnText='Saiba mais'
            img={CardImg3}
            />
            <CardReverseDefault
            title='Histórias e Notícias Starbucks'
            text='Fique por dentro das novidades e conheça mais sobre nossas iniciativas.'
            btnText='Saiba mais'
            img={CardImg4}
            />
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App
