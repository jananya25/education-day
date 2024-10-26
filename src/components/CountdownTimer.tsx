'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// A utility function to format time as DD:HH:MM:SS
const formatTime = (time: number) => {
    const days = Math.floor(time / (60 * 60 * 24));
    const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = time % 60;

    return {
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
    };
};

interface CountdownTimerProps {
    initialTime: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialTime }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const { days, hours, minutes, seconds } = formatTime(timeLeft);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        }

        return () => clearInterval(interval!);
    }, [timeLeft]);

    return (
        <div className="flex flex-col items-center justify-center p-6 text-white border border-gray-300 rounded-lg bg-black shadow-md space-y-4">
            <div className="text-3xl md:text-5xl font-semibold flex space-x-2">
                {/* Days Animation */}
                <motion.div
                    key={days}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-16"
                >
                    {days}
                </motion.div>
                <span>:</span>
                {/* Hours Animation */}
                <motion.div
                    key={hours}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-16"
                >
                    {hours}
                </motion.div>
                <span>:</span>
                {/* Minutes Animation */}
                <motion.div
                    key={minutes}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-16"
                >
                    {minutes}
                </motion.div>
                <span>:</span>
                {/* Seconds Animation */}
                <motion.div
                    key={seconds}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-16"
                >
                    {seconds}
                </motion.div>
            </div>
        </div>
    );
};

export default CountdownTimer;
