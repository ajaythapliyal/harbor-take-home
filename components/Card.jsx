import {twMerge} from 'tailwind-merge'

export function Card({children, isSelected=false, selectedColor="accent-error", classNames=''}){
    const bgColor = isSelected ? `bg-${selectedColor} border-${selectedColor}` : 'bg-secondary-100';
    return <div className={twMerge(`bg-opacity-5 flex justify-between rounded-2xl py-6 px-8 border border-solid border-secondary-500 shadow-dark-100 ${bgColor} ${classNames}`)}>
        {children}
    </div>
}
