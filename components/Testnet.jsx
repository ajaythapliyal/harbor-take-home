import { Card } from "./Card";
import { TestnetAlert } from "./TestNetAlert";
import Settings from "../public/icons/Settings.svg"

export function Testnet({id, name, status, offChainActors, chains, updatedAt}){
    name = 'Santosh Testnet'
    status= "PENDING"
    return <Card>
        <div className="flex flex-grow justify-between items-center">
            <div className="flex gap-4 items-center">
                <p className="font-bold leading-6 text-xl">{name}</p>
                <div className="bg-secondary-600 rounded-full py-1 px-3">
                    <p className="text-secondary-400 text-sm">5321</p>
                </div>
            </div>
            <div>
                <div className="flex gap-9 items-center">
                    <TestnetAlert status={status}></TestnetAlert>
                    <div className="flex gap-1 items-center">
                        <Settings className={`w-3 h-3 ${['RUNNING', "FAILED"].includes(status)? 'fill-accent-neutral' : 'fill-secondary-200'}`}></Settings>
                        <p className={`text-sm font-semibold ${['RUNNING', "FAILED"].includes(status)? 'text-accent-neutral' : 'text-secondary-200'}`}>Settings</p>
                    </div>
                </div>
            </div>
        </div>
        </Card>
}