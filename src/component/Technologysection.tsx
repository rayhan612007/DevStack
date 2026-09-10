import { use, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Datatype } from './../Type/Datatype';
import SelectedCard from "./SelectedCard";

interface promisedataprops {
    promisedata: Promise<Datatype[]>;
}

export default function Technologysection({ promisedata }: promisedataprops) {
    const carddata = use(promisedata);
    const [selected,setSelected] = useState<Datatype[]>([]);


    return (
        <div className="container mx-auto">
            <div className="space-y-2">
                <h1 className="text-5xl font-bold ">
                    Explore the <span className="font-bold bg-gradient-to-r from-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h1>
                <p className="text-xl text-gray-500">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid grid-cols-4">
                <div className="grid grid-cols-3  col-span-3">
                    {carddata.map((data: Datatype) => (
                        <TechnologyCard key={data.id} data={data} selected = {selected} setSelected = {setSelected} />
                    ))}
                </div>
                <div>
                    <SelectedCard  selected = {selected} setSelected = {setSelected}/>
                </div>
            </div>
        </div>
    );
}
