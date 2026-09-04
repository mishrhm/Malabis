import './App.css'
import { HeadRibbon } from './components/head-ribbon';
import malabisHero from './assets/Malabis-Hero.webp';

function App() {

  return (
    <div className='selection:bg-teal-100 selection:text-teal-600'>
      <div className='bg-slate-100 flex flex-col h-[75vh]'>
        <HeadRibbon />
        <div className='flex justify-center items-center pt-8'>
          <p className='font-bold text-3xl tracking-tighter'>Posh Clothing</p>
        </div>
        <div className='flex-1 text-slate-900 items-center w-9xl text-9xl lg:text-[30vw] font-bold flex justify-center tracking-widest'>
          <div className='flex justify-center items-center'>
            <p className='z-10 '>POSH</p>
            <img src={malabisHero} alt="" className='z-20 absolute h-7/12 pointer-events-none select-none' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
