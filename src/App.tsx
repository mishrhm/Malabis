import './App.css'
import { HeadRibbon } from './components/head-ribbon';
import malabisHero from './assets/Malabis-Hero.webp';

function App() {

  return (
    <div className='selection:bg-teal-100 selection:text-teal-600'>
      <div className='bg-slate-100 flex flex-col h-screen'>
        <HeadRibbon />
        <div className='flex justify-center items-center pt-8'>
          <p className='font-bold text-3xl tracking-tighter'>Malabis Clothing</p>
        </div>
        <div className='flex-1 text-slate-900 items-center w-9xl text-[18vh] font-bold flex justify-center tracking-widest'>
          <div className='flex justify-center items-center'>
            <p className='z-0 '>MALABIS</p>
            <img src={malabisHero} alt="" className='z-40 absolute h-7/12 pointer-events-none select-none' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
