import React from 'react'
import { IoMdClose } from 'react-icons/io'
import type { Datatype } from './../Type/Datatype';
interface cardprops {
    card:Datatype;
}
export default function CardSelect({card}:cardprops) {
return (
    <div className="w-full my-3 rounded-2xl border border-gray-100 bg-slate-50 p-4 shadow-sm hover:border-gray-200 transition-all">
      <div className="flex items-center justify-between">
        
        {/* Left Side: Icon & Info */}
        <div className="flex items-center gap-3">
          <img src={card.icon} alt={card.name} className="h-10 w-10 object-contain" />
          <div>
            <h2 className="font-semibold text-slate-800 text-sm">{card.name}</h2>
            <p className="text-gray-400 text-xs">{card.category}</p>
          </div>
        </div>

        {/* Right Side: Remove Button */}
        <button
          onClick={() =>(card.id)}
          className="p-1 text-gray-400 hover:text-slate-700 transition-colors cursor-pointer rounded-lg hover:bg-gray-200/50"
          aria-label="Remove item"
        >
          <IoMdClose className="text-2xl" />
        </button>

      </div>
    </div>
    )
}
