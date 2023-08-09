import Harbor from "../public/icons/harbor.svg"
import Projects from "../public/icons/projects.svg"
import Docs from "../public/icons/docs.svg"
import CommandSheet from "../public/icons/command_sheet.svg"
import UserKey from "../public/icons/user_key.svg"
import Profile from "../public/icons/profile.svg"

export function Header(){
    return <header className="bg-primary-100 px-5 py-2 sticky top-0">
        <div className="flex gap-10 items-center text-secondary-200">
        <Harbor></Harbor>
        <nav className="gap-3 flex">
            <div className="flex gap-2 items-center px-4 py-2 cursor-pointer">
                <Projects className="w-3 h-3 fill-secondary-200"></Projects>
                <p>Projects</p>
            </div>
            <div className="flex gap-2 items-center px-4 py-2 cursor-pointer">
                <Docs className="w-3 h-3 fill-secondary-200"></Docs>
                <p>Docs</p>
            </div>
            <div className="flex gap-2 items-center px-4 py-2 cursor-pointer">
                <CommandSheet className="w-3 h-3 fill-secondary-200"></CommandSheet>
                <p>Command Cheatsheet</p>
            </div>
        </nav>
        <div className="flex grow justify-end gap-5">
            <div className="flex gap-2 items-center px-4 py-2 cursor-pointer">
                <UserKey className="w-3 h-3 fill-secondary-200"></UserKey>
                <p>Your user key</p>
            </div>
            <span className="cursor-pointer"><Profile></Profile></span>
        </div>
        </div>
        
    </header>
}