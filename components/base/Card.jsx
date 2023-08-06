import {twMerge} from 'tailwind-merge'

export function Card({children, isError=false, errorColor="accent-error", classNames=""}){
    const bgColor = isError ? `bg-${errorColor} border-${errorColor} bg-opacity-5` : 'bg-secondary-100';
    return <div className={twMerge(`flex justify-between rounded-2xl py-6 px-8 border border-solid border-secondary-500 shadow-dark-100 ${bgColor} ${classNames}`)}>
        {children}
    </div>
}
