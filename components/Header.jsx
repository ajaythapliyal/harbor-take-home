import Image from "next/image"
import harbor from "../public/harbor.svg"
import project from "../public/icons/Projects.svg"
export function Header(){
    return <header className="bg-primary-100 px-5 py-4">
        <div className="flex gap-10">
        <Image src={harbor}  alt="branding"/>
        <nav className="text-secondary-200">
            <div className="flex gap-2">
                <Image src={project} width={14} height={14}  className="fill-green" alt="projects"/>
                <p>Projects</p>
            </div>
        </nav>
        </div>
        
    </header>
}