"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import bvicamLogo from "../../public/images/bvicamLogo.png";
export default function Navbar() {
    // const navItems = [
    //     {
    //         name: "Home",
    //         link: "/",
    //         icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    //     },
    //     {
    //         name: "About",
    //         link: "/about",
    //         icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    //     },
    //     {
    //         name: "Contact",
    //         link: "/contact",
    //         icon: (
    //             <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    //         ),
    //     },
    // ];
    return (
        <nav className="flex justify-between relative w-full z-[99] px-10">
            <div className="desktop hidden md:flex w-full">
            <div className="w-2/5">
                <Image src={bvicamLogo} alt="Bharti news" className="w-48 h-28" />
            </div>
            <div className="flex justify-between items-center space-x-4">
                <Link href={"#schedule"} className="font-semibold text-white text-xl bg-clip-text hover:text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">Schedule</Link>
                <Link href={"#events"} className="font-semibold text-white text-xl bg-clip-text hover:text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">Events</Link>
                <Link href={"#coordinators"} className="font-semibold text-white text-xl bg-clip-text hover:text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">Coordinator</Link>
                <Link href={"#faqs"} className="font-semibold text-white text-xl bg-clip-text hover:text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">FAQs</Link>
            </div>
            </div> 
            <div className="md:hidden">
                <MobileNav />
            </div>
        </nav>
    );
}