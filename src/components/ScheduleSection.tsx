import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function ScheduleSection() {
    
    const events = [
        { 
            name: "RANGOLI", 
            time: "9AM-12PM", 
            heads: [
                { name: "Gunshita Varun", mobile: "+91 9873760414" },
                
            ]
        },
        { 
            name: "PHOTOGRAPHY COMPETITION", 
            time: "9AM-12PM", 
            heads: [
                { name: "Gunshita Varun", mobile: "+91 9873760414" },
                
            ]
        },
        { 
            name: "FLAMELESS COOKING", 
            time: "9AM-12PM", 
            heads: [
                { name: "Sidak Ahuja", mobile: "+91 9650390954" },
            ]
        },
        { 
            name: "CODING", 
            time: "9AM-12PM", 
            heads: [
                { name: "Sidak Ahuja", mobile: "+91 9650390954" },
            ]
        },
        { 
            name: "POSTER MAKING", 
            time: "9AM-12PM", 
            heads: [
                { name: "Gunshita Varun", mobile: "+91 9873760414" },]
        },
        { 
            name: "SPORTS", 
            time: "9AM-12PM", 
            heads: [
                { name: "Amit Raj ", mobile: "+91 8588845969" },
                { name: "Ujjwal Chauhan ", mobile: "+91 7303782547" },
            ],
            activities: [
                "Cricket",
                "Volley Ball",
                "Tug Of War"
            ]
        },
        { 
            name: "DEBATE COMPETITION", 
            time: "9AM-12PM", 
            heads: [
                { name: "Gunshita Varun", mobile: "+91 9873760414" },
            ]
        },
        
        
        { 
            name: "SOLO DANCE", 
            time: "12PM-04PM", 
            heads: [
                { name: "Gunshita Varun", mobile: "+91 9873760414" },
            ]
        },
    ];
    

    return (
        <div className="w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased py-10" id="schedule">
            <div className="mx-auto p-4">
                <div>
                    <p className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-br from-black via-gray-500 to-white py-4">
                        Schedule
                    </p>
                </div>
                <div className="overflow-x-auto shadow-lg rounded-lg bg-white mt-8 w-full">
                    <table className="min-w-full table-auto divide-y divide-gray-200 text-gray-800">
                        <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                            <tr>
                                <th className="px-2 sm:px-4 md:px-6 py-4 text-xs sm:text-sm md:text-base font-semibold uppercase text-left">#</th>
                                <th className="px-2 sm:px-4 md:px-6 py-4 text-xs sm:text-sm md:text-base font-semibold uppercase text-left">Event</th>
                                <th className="px-2 sm:px-4 md:px-6 py-4 text-xs sm:text-sm md:text-base font-semibold uppercase text-left">Time</th>
                                <th className="px-2 sm:px-4 md:px-6 py-4 text-xs sm:text-sm md:text-base font-semibold uppercase text-left">Event Heads</th>
                            </tr>
                        </thead>
                        <tbody>
    {events.map((event, index) => (
        <React.Fragment key={index}>
            <tr className="hover:bg-gray-100 transition duration-200">
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {event.name}
                    {event.activities && (
                        <ul className="ml-4 mt-2 list-disc list-inside text-gray-600">
                            {event.activities.map((activity, i) => (
                                <li key={i}>{activity}</li>
                            ))}
                        </ul>
                    )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{event.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <table className="w-full">
                        <tbody>
                            {event.heads.map((head, headIndex) => (
                                <tr key={headIndex} className="">
                                    <td className="px-4 py-2">
                                        {head.name} - <span className="text-blue-500">{head.mobile}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </td>
            </tr>
        </React.Fragment>
    ))}
</tbody>

                    </table>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
}
