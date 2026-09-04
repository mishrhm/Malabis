
import VerticalDivider from './vertical_divider';

export function HeadRibbon() {
    return (
        <div className="h-12 max-w-full px-20 bg-slate-900  flex items-center  justify-between border-b-4 border-purple-800">
            <div className="w-full text-white font-normal flex justify-between tracking-widest text-xs">
                <p>FREE DELIVERY ON ALL ORDERS ABOVE AED.200</p>
                <div className="flex">
                    <p>DOWNLOAD APP</p>
                    <VerticalDivider />
                    <p>TRACK ORDER</p>
                    <VerticalDivider />
                    <p>HELP</p>
                </div>
            </div>
        </div>
    );
}