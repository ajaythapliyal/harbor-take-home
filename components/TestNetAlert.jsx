import RunningTick from "../public/icons/running_tick.svg"
import Stopped from "../public/icons/stopped.svg"
import Pending from "../public/icons/pending.svg"

export function TestnetAlert({status}){
    const statusView = {
        "RUNNING" : {
            color : "accent-success",
            title: "Running",
            icon : <RunningTick/>
        },
        "STOPPED" : {
            color : "accent-invalid",
            title: "Stopped",
            icon : <Stopped/>
        },
        "PENDING": {
            color : "accent-warn",
            title: "Pending",
            icon : <Pending/>
        }
    }

    return <div className="flex items-center gap-1">
    {statusView[status].icon}
    <p className={`text-sm text-${statusView[status].color} font-semibold`}>
        {statusView[status].title}
    </p>
</div>

}