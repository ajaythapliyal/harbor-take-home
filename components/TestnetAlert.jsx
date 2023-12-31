import RunningTick from "../public/icons/running_tick.svg"
import Stopped from "../public/icons/stopped.svg"
import Pending from "../public/icons/pending.svg"
import { PENDING_STATE, RUNNING_STATE, STOPPED_STATE } from "@/utils"

export function TestnetAlert({status}){
    const statusView = {
        [RUNNING_STATE] : {
            class : "text-accent-success",
            title: "Running",
            icon : <RunningTick/>
        },
        [STOPPED_STATE] : {
            class : "text-accent-invalid",
            title: "Stopped",
            icon : <Stopped/>
        },
        [PENDING_STATE]: {
            class : "text-accent-warn",
            title: "Pending",
            icon : <Pending/>
        }
    }

    return <div className="flex items-center gap-1">
    {statusView[status].icon}
    <p className={`${statusView[status].class} text-sm  font-semibold`}>
        {statusView[status].title}
    </p>
</div>

}