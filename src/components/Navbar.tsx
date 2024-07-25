import Image from "next/image";
import NavbarImg from "../../public/assets/navbar.png";
import { Bars4Icon } from "@heroicons/react/24/outline";


export default function Navbar() {
    return (
        <div className="flex justify-center m-4">
            <div className="pl-4 pr-4 p-2 bg-white shadow rounded-l-full	">
                <Image src={NavbarImg} alt="" height={40} />
            </div>
            <div className="pr-4 pl-4 p-2 bg-white shadow rounded-r-full flex items-center	">
                <Bars4Icon className="size-8 text-navIconColor" />
            </div>
        </div>
    );
}