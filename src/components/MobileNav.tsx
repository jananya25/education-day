import * as React from "react"
import {
    Drawer, 
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link"
import Image from "next/image"
import bvicamLogo from "../../public/images/bvicamLogo.png";
import { Menu } from "lucide-react"
export default function MobileNav() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <div className="bg-white w-full fixed py-2 top-0 left-0 px-2"><Menu /></div>
            </DrawerTrigger>
            <DrawerContent className="h-[80vh] bg-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                <div className="mx-auto w-full max-w-sm">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex justify-center">
                            <Image src={bvicamLogo} alt="Bharti news" className="w-48 h-28" />
                        </div>
                        <div className="flex flex-col justify-between items-center space-x-4 space-y-4 text-black">
                            <Link href={"#schedule"} className="font-semibold text-xl bg-clip-text hover:text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">Schedule</Link>
                            <Link href={"#events"} className="font-semibold text-xl bg-clip-text hover:text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">Events</Link>
                            <Link href={"#coordinators"} className="font-semibold text-xl bg-clip-text hover:text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">Coordinator</Link>
                            <Link href={"#faqs"} className="font-semibold text-xl bg-clip-text hover:text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">FAQs</Link>
                        </div>
                    </div>
                    <DrawerFooter>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
