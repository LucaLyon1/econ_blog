function Articles() {
    return (
        <div className="md:w-4/5 w-5/6 m-auto grid md:grid-cols-2 md:grid-rows-3 gap-4 grid-cols-1">
            <div className="bg-slate-600 
            col-span-1 
            row-span-3
            min-h-[200px] 
            justify-self-stretch">
                Main
            </div>
            <div className="bg-slate-600 
            h-[200px] 
            justify-self-stretch">
                Second
            </div>
            <div className="bg-slate-600 
            h-[200px] 
            justify-self-stretch">
                Third
            </div>
            <div className="bg-slate-600 
            h-[200px] 
            justify-self-stretch">
                Fourth
            </div>
        </div>
    );
}

export default Articles;