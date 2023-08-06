import { Card } from "./Card";

export function Testnet({id, name, status, offChainActors, chains, updatedAt}){
    name = 'Santosh Testnet'
    return <Card>
        <div className="flex-col">
            <div>
                <p className="font-bold leading-6 text-xl">{name}</p>
            </div>
        </div>
        </Card>
}