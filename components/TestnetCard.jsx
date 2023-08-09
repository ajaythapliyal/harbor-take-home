import { Card } from "./base/Card";
import { TestnetAlert } from "./TestnetAlert";
import Settings from "../public/icons/Settings.svg"
import Clock from "../public/icons/clock.svg"
import Pending from "../public/icons/pending.svg"
import Dot from "../public/icons/dot.svg"
import { PENDING_STATE, blockchainIconMapper, isSettled, timeDifference } from "@/utils";
import Image from "next/image";

export function TestnetCard({id, name, status, offChainActors, chains, updatedAt}){
    
    const isTestnetSettled = isSettled(status)
    const offChainActorsUpdating = offChainActors.filter(offChainActor => offChainActor.status === PENDING_STATE)
    const chainsUpdating = chains.filter(chain => chain.status === PENDING_STATE)

    return <Card>
            <div className="flex flex-col flex-grow gap-2">
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
                                    <Settings className={`w-3 h-3 ${isTestnetSettled ? 'fill-accent-neutral' : 'fill-secondary-200'}`}></Settings>
                                    <p className={`text-sm font-semibold ${isTestnetSettled ? 'text-accent-neutral' : 'text-secondary-200'}`}>Settings</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between text-sm font-medium items-center">
                    <div className="flex gap-7 items-center">
                        <p className="text-sm font-medium">{offChainActors?.length ?? 0} off-chain actors</p>
                        <div className="flex gap-3 items-center">
                            <p>{chains?.length ?? 0}{ ` Blockchain${chains.length > 1 ? 's':''}`}</p>
                            <div className="flex">
                                {
                                    chains.map((chain, index) => <div className={`p-2 border ${(chains.length > 1 && index < chains.length-1) ? "border-r-0" : ''} border-secondary-700 rounded-lg ml-[-4px]`} key ={`${id}${chain.chain}`}><Image src={blockchainIconMapper[chain.chain]} alt="blockchain_image" width={16} height={16}/></div>)
                                }    
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center text-secondary-400">
                        <Clock className="w-3 h-3 fill-secondary-400"/>
                        <div className="flex gap-1">
                            <p>Modified</p>
                            {timeDifference(Date.parse(updatedAt))}
                            <p>ago</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    {offChainActorsUpdating.length > 0 ? <span className="font-semibold text-sm text-accent-warn flex gap-1 items-center"><Pending></Pending>{offChainActorsUpdating.length} off-chain updating</span>:null}
                    {offChainActorsUpdating.length > 0 && chainsUpdating.length > 0 ? <Dot/> :null}
                    {chainsUpdating.length > 0? <span className="font-semibold text-sm text-accent-warn flex gap-1 items-center"><Pending></Pending>{chainsUpdating.length} Blockchains updating</span> : null}
                </div>
            </div>
        </Card>
}