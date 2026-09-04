import { HeadRibbon } from "./head-ribbon";
import malabisHero from '../assets/Malabis-Hero.webp';


export default function HeroSection() {
    return (
        <div className='bg-slate-100 flex flex-col items-center h-[62vh]'>
            <HeadRibbon />
            <div className="mt-20 max-w-8xl grid grid-cols-8 ">
                <div className="p-8 m-2 row-span-2 col-start-2 border-b-2 select-none">
                    <p>FASHION THAT MOVES WITH YOU.</p>
                </div>
                <div className="col-span-8 row-span-2 flex justify-center items-center">
                    <p className='z-10 text-9xl lg:text-[25rem] font-bold '>POSH</p>
                    <img src={malabisHero} alt="" className='z-20 absolute h-1/3 lg:h-1/2 pointer-events-none select-none' />
                </div>
                <div className="col-span-8 h-12"></div>
                <div className=" m-2  col-start-2 col-end-3 flex items-end border-b-2">
                    <p>SHOP NOW</p>
                </div>
                <div className=" m-2  col-start-3 col-end-4 flex items-end border-b-2">
                    <p>EXPLORE NEW IN</p>
                </div>
                <div className=" m-2  col-start-7 col-end-8 flex items-end border-b-2">
                    <p>NEW COLLECTION 2026</p>
                </div>
            </div>
        </div>
    )
}


// function v1() {
//     return <div>
//         <div className='flex endpt-8'>
//             <p className='font-bold text-3xl tracking-tighter'>Posh Clothing</p>
//         </div>
//         <div className='flex-1 text-slate-900 items-center w-9xl flex justify-center tracking-widest'>
//             <div className='flex justify-center items-center'>
//                 <p className='z-10 text-9xl lg:text-[25rem] font-bold'>POSH</p>
//                 <img src={malabisHero} alt="" className='z-20 absolute h-4/12 lg:h-7/12 pointer-events-none select-none' />
//             </div>
//         </div>
//     </div>;
// }