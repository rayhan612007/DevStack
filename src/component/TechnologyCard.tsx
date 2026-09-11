import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Datatype } from "../Type/Datatype";
import { toast } from "react-toastify";


interface cardprops{
    data:Datatype;
    selected:Datatype[];
    setSelected:Dispatch<SetStateAction<Datatype[]>>

}
  export default function TechnologyCard({data,selected,setSelected}:cardprops) {
    const [Isselected,setIsSelected] = useState<boolean>(false);
    useEffect(() => {
    const isExist = selected.some((item) => item.id === data.id);
    setIsSelected(isExist); 
  }, [selected, data.id]);
    const handlebtnclick = ()=>{
        setIsSelected(true);
        toast.success(`${data.name} Selected Sucessfully`);
        setSelected([...selected,data]);
    }

  return (
    <div className="flex items-center container justify-center bg-slate-50 p-2">
      <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-md">
        <div className="flex items-start justify-between">
          <img
            src={data.icon}
            alt={data.name}
            className="h-10 w-10"
          />
          <span className="rounded-full bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-500">
            {data.badge}
          </span>
        </div>

        <h2 className="mt-5 text-2xl font-bold text-slate-900">{data.name}</h2>

        <p className="mt-3 text-slate-500 leading-relaxed">
          {data.description}
        </p>
        <hr className="mt-6 border-slate-200" />

        <div className="mt-5 flex items-center justify-between">
          <span className="rounded-lg bg-slate-50 px-3 py-1.5 text-sm text-slate-500">
            {data.category}
          </span>
          <span className="text-sm text-slate-500">{data.difficulty}</span>
          <span className="flex items-center gap-1 text-sm font-semibold text-slate-800">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
              alt="star"
              className="h-4 w-4"
            />
            {data.rating}
          </span>
        </div>

        <button onClick={()=> handlebtnclick()} className="mt-6 w-full rounded-2xl btn btn-neutral py-3.5 hover:scale-110 transition-all duration-200 ease-in-out disabled:hover:scale-100 disabled:opacity-80"
        disabled={Isselected}>
          Add to Stack
        </button>
        
      </div>
    </div>
  );
}