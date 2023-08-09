import {twMerge} from 'tailwind-merge'

export function Card({children, isError=false, isDisabled=false, errorColor="accent-error", classNames=""}){
    return <div className={twMerge(`flex justify-between rounded-2xl py-6 px-8 border bg-secondary-100 border-solid border-secondary-500 shadow-dark-100 ${isDisabled ? 'bg-secondary-300':''} ${isError ? `bg-${errorColor} border-${errorColor} bg-opacity-5` : ''} ${classNames}`)}>
        {children}
    </div>
}
