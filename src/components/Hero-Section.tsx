import { HeadRibbon } from "./head-ribbon";
import malabisHero from '../assets/Malabis-Hero.webp';


export default function HeroSection() {
    return (
        <div className='bg-slate-100 flex flex-col h-[75vh]'>
            <HeadRibbon />
            <div className='flex justify-center items-center pt-8'>
                <p className='font-bold text-3xl tracking-tighter'>Posh Clothing</p>
            </div>
            <div className='flex-1 text-slate-900 items-center w-9xl flex justify-center tracking-widest'>
                <div className='flex justify-center items-center'>
                    <p className='z-10 text-9xl lg:text-[25rem] font-bold'>POSH</p>
                    <img src={malabisHero} alt="" className='z-20 absolute h-4/12 lg:h-7/12 pointer-events-none select-none' />
                </div>
            </div>
        </div>
    )
}