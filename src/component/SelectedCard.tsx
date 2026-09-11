import { type Dispatch, type SetStateAction } from 'react'
import type { Datatype } from '../Type/Datatype';
import CardSelect from './CardSelect';
import { toast } from 'react-toastify';

interface selectedprops{
    selected:Datatype[];
    setSelected:Dispatch<SetStateAction<Datatype[]>>
    
    
}
export default function SelectedCard({selected,setSelected}:selectedprops) {
    const rmvall = ()=> {
        setSelected([ ]);
        toast.error("Removed all selected items");

    };
    const rmvhandler = (card:Datatype)=>{
        
        const remaincard = selected.filter((item)=>item.name !== card.name);
                toast.error(` ${card.name} Item Removed`);
        
        setSelected(remaincard);

    }
    if(selected.length === 0){
        return (
          <div>
               <div className="flex items-center justify-center bg-slate-50 p-8">
                  <div className="w-full max-w-sm rounded-3xl border border-slate-100 bg-white p-7 shadow-md">
                      <div>
                          <h1 className='text-2xl font-bold'>Your Stack</h1>
                          <p className='text-gray-400 text-md space-y-2'>No technologies selected yet.</p>
                      </div>
                      
                      <div className='w-full items-center justify-center flex my-5'>
                          <p className='min-h-20  border flex justify-center items-center h-auto w-[80%] rounded-2xl text-lg border-dashed text-center text-gray-500 '>Your stack is empty</p>
                      </div>
                  </div>
              </div>
          </div>
      
        )
    }
    else{
        return (
            <div className="flex items-center justify-center bg-slate-50 p-8">
                <div className="w-full max-w-sm rounded-3xl border border-slate-100 bg-white p-7 shadow-md">
                    

                    <div className="mb-4">
                    <h1 className="text-2xl font-bold text-slate-900">Your Stack</h1>
                    <p className="text-gray-400 text-md">
                        {selected.length} {selected.length === 1 ? "Technology" : "Technologies"} selected
                    </p>
                    </div>


                    <div className="space-y-3">
                    {selected.map((card) => (
                        <CardSelect key={card.id} card={card} rmvhandler={rmvhandler} />
                    ))}
                    </div>
                    <div>
                        <button onClick={()=> rmvall()} className="w-full rounded-2xl mt-15 btn btn-outline btn-secondary">Remove All</button>
                    </div>

                </div>
            </div>

        )
    }
}
