
import { use, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Datatype } from './../Type/Datatype';
import SelectedCard from "./SelectedCard";

interface promisedataprops {
    promisedata: Promise<Datatype[]>;
}

export default function Technologysection({ promisedata }: promisedataprops) {
    const carddata = use(promisedata);

    const [selected, setSelected] = useState<Datatype[]>([]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="space-y-2 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    Explore the <span className="font-bold bg-linear-to-r from-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-500">Pick one technology per category to build your ideal stack.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-3 gap-4">
                    {carddata.map((data: Datatype) => (
                        <TechnologyCard key={data.id} data={data} selected={selected} setSelected={setSelected} />
                    ))}
                </div>
                <div className="lg:col-span-1">
                    <SelectedCard selected={selected} setSelected={setSelected} />
                </div>
            </div>
        </div>
    );
}