import React from "react";
import Navbar from "./Navbar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import CountdownTimer from "./CountdownTimer";
import bhartiNews from "../../public/images/bharti_news.png";
import radioBharti from "../../public/images/radio_bharti.png";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    // Set the target date to November 9th at 10 AM
    const targetDate = new Date("2024-11-09T10:00:00");

    // Get the current date and time
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    // Convert milliseconds to seconds
    const initialTime = Math.max(Math.floor(timeDifference / 1000), 0); // Ensure it's not negative

    return (
        <div className="h-screen w-full bg-black bg-dot-white/[0.2]">
            <BackgroundBeamsWithCollision className="flex flex-col">
                <Navbar />
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-neutral-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <h2 className="text-5xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-gray-500 via-white font-sans tracking-tight">
                        Join us in celebrating <br />
                        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                                <span className="">Education Day</span>
                            </div>
                            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                                <span className="">Education Day</span>
                            </div>
                        </div>
                        <CountdownTimer initialTime={initialTime} />
                        <div>
                            <div className="m-10 flex justify-center text-center text-4xl">
                                <button className="p-[3px] relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                    <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent text-xl md:text-4xl">
                                        <Link href="#events">Explore Events</Link>
                                    </div>
                                </button>
                            </div>
                            <div className="flex justify-center">
                                <Image src={bhartiNews} alt="bharti news" className="w-40 h-40" />
                                <Image src={radioBharti} alt="radio bharti" className="w-40 h-40" />
                            </div>
                        </div>
                    </h2>
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    );
}
