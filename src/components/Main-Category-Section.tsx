export default function MainCategorySection() {
    return (
        <div className="bg-slate-900 p-10">
            <div className="max-w-full flex justify-evenly">
                <EachCategory />
                <EachCategory />
                <EachCategory />
            </div>
        </div>
    );
}


function EachCategory() {
    return (
        <div className="flex">
            <div className="h-full bg-fuchsia-400 flex-1">
                <div className="bg-green-500 w-40 h-80 m-12"></div>
            </div>
            <div className="h-full bg-amber-400 flex-1">Hello</div>
        </div>
    );
}