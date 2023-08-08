import { useRef, useState, useEffect, useCallback } from "react"
import  ArrowDown  from "../public/icons/arrow_down_short.svg";

export function Dropdown({title, items, onChange}){
    const [selectedItemIndex, setSelectedItemIndex] = useState(0)
    const [isExpanded, setIsExpanded] = useState(false)
    const ref = useRef(null);


    const onClickOutside = useCallback(()=> setIsExpanded(false), [])


    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside && onClickOutside();
          }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [ onClickOutside ]);


    return <div className="flex flex-col relative">
                <div  ref={ref} className="flex gap-1 items-center cursor-pointer" onClick={()=>{
                    setIsExpanded(true)
                }}>
                    <span className="text-sm font-medium text-secondary-400">{title}:</span> 
                    {items[selectedItemIndex].itemView}
                    <ArrowDown className="fill-accent-invalid"></ArrowDown>
                </div>
                {isExpanded && <div className="flex flex-col absolute right-0 top-6 shadow-dark-200 gap-1 border border-secondary-700 p-2 bg-secondary-100 rounded-lg">
                {items.map((item, index) => <div className={`py-2 px-3 w-44 flex justify-center rounded-lg cursor-pointer ${index === selectedItemIndex? 'bg-secondary-600' :''}`} onClick={()=>{setSelectedItemIndex(index); setIsExpanded(false); onChange(items[index].item)}} key={index}>{item.itemView}</div>)}
                </div>}
            </div>
    
}