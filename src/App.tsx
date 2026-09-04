import './App.css'
import { HeadRibbon } from './components/head-ribbon';

function App() {

  return (
    <div className=''>
      <div className='bg-slate-100 flex flex-col h-screen'>
        <HeadRibbon />
        <div className='flex justify-center items-center pt-8'>
          <p className='font-bold text-3xl tracking-tighter'>Malabis Clothing</p>
        </div>
        <div className='flex-1 text-slate-900 items-center w-9xl text-[18vh] font-bold flex justify-center tracking-widest'>
          <div className='flex justify-center items-center'>
            <p className='z-30 '>MALABIS</p>
            <img src="/Malabis-Hero.webp" alt="" className='z-40 absolute h-7/12 pointer-events-none select-none' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
