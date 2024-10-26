"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function EventCard() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <section className="min-h-screen" id="events">
            <div className="w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-neutral-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                    <div>
                        <p className="text-center text-6xl font-black relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-br from-black via-gray-500 to-white py-4">Events</p>
                    </div>
                    <AnimatePresence>
                        {active && typeof active === "object" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/20 h-full w-full z-10"
                            />
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {active && typeof active === "object" ? (
                            <div className="fixed inset-0  grid place-items-center z-[100]">
                                <motion.button
                                    key={`button-${active.title}-${id}`}
                                    layout
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: {
                                            duration: 0.05,
                                        },
                                    }}
                                    className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                                    onClick={() => setActive(null)}
                                >
                                    <CloseIcon />
                                </motion.button>
                                <motion.div
                                    layoutId={`card-${active.title}-${id}`}
                                    ref={ref}
                                    className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                                >
                                    <motion.div layoutId={`image-${active.title}-${id}`}>
                                        <Image
                                            priority
                                            width={200}
                                            height={200}
                                            src={active.src}
                                            alt={active.title}
                                            className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                        />
                                    </motion.div>

                                    <div>
                                        <div className="flex justify-between items-start p-4">
                                            <div className="">
                                                <motion.h3
                                                    layoutId={`title-${active.title}-${id}`}
                                                    className="font-bold text-neutral-700 dark:text-neutral-200"
                                                >
                                                    {active.title}
                                                </motion.h3>
                                                <motion.p
                                                    layoutId={`description-${active.description}-${id}`}
                                                    className="text-neutral-600 dark:text-neutral-400"
                                                >
                                                    {active.description}
                                                </motion.p>
                                            </div>

                                            <motion.a
                                                layoutId={`button-${active.title}-${id}`}
                                                href={active.ctaLink}
                                                target="_blank"
                                                className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                                            >
                                                Click to Register
                                            </motion.a>
                                        </div>
                                        <div className="pt-4 relative px-4">
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                            >
                                                {typeof active.content === "function"
                                                    ? active.content()
                                                    : active.content}
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ) : null}
                    </AnimatePresence>
                    <ul className="max-w-2xl mx-auto w-full gap-4">
    {cards.map((card) => (
        <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center bg-neutral-500 md:bg-transparent m-4 hover:bg-neutral-800 rounded-xl cursor-pointer">
            <div className="flex gap-4 flex-col md:flex-row">
                <motion.div layoutId={`image-${card.title}-${id}`} className="flex items-center justify-center">
                    <Image
                        width={150}
                        height={150}
                        src={card.src}
                        alt={card.title}
                        className="h-40 w-40 md:h-50 md:w-50 rounded-lg object-cover object-top"
                    />
                </motion.div>
                <div className="">
                    <motion.h3
                        layoutId={`title-${card.title}-${id}`}
                        className="font-medium text-neutral-200 text-center md:text-left"
                    >
                        {card.title}
                    </motion.h3>
                    <motion.p
                        layoutId={`description-${card.description}-${id}`}
                        className="text-neutral-400 text-center md:text-left"
                    >
                        {card.description}
                    </motion.p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <motion.button
                    layoutId={`button-${card.title}-${id}`}
                    className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
                >
                    {card.ctaText}
                </motion.button>
                {/* Add target="_blank" and rel="noopener noreferrer" here */}
                <motion.a
                    href={card.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    layoutId={`button-${card.title}-${id + 10}`}
                    className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
                >
                    Register
                </motion.a>
            </div>
        </motion.div>
    ))}
</ul>

                </div>
            </div>

        </section>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
    {
        description: "DEBATE COMPETITION",
        title: "DEBATE COMPETITION",
        src: "/images/debate.png",
        ctaText: "Details",
        ctaLink: "https://ui.aceternity.com/templates",
        registrationLink: "https://docs.google.com/forms/d/1qCCCfZSPUxnyKi85vOYyUKr8wmEib3cVs7OwJfvjuuc/edit ",
        content: () => {
            return (
                <p>
                    Lana Del Rey, an iconic American singer-songwriter, is celebrated for
                    her melancholic and cinematic music style. Born Elizabeth Woolridge
                    Grant in New York City, she has captivated audiences worldwide with
                    her haunting voice and introspective lyrics. <br /> <br /> Her songs
                    often explore themes of tragic romance, glamour, and melancholia,
                    drawing inspiration from both contemporary and vintage pop culture.
                    With a career that has seen numerous critically acclaimed albums, Lana
                    Del Rey has established herself as a unique and influential figure in
                    the music industry, earning a dedicated fan base and numerous
                    accolades.
                </p>
            );
        },
    },
    {
        description: "PHOTOGRAPHY COMPETITION",
        title: "PHOTOGRAPHY COMPETITION",
        src: "/images/photo.png",
        ctaText: "Details",
        ctaLink: "https://docs.google.com/forms/d/1KBQcZtfoA-YWZsonurTIoJYF78t7j9aIruM-jowW0J0/edit ",
        registrationLink: " https://docs.google.com/forms/d/1KBQcZtfoA-YWZsonurTIoJYF78t7j9aIruM-jowW0J0/edit ",
        content: () => {
            return (
                <p>
                    Babu Maan, a legendary Punjabi singer, is renowned for his soulful
                    voice and profound lyrics that resonate deeply with his audience. Born
                    in the village of Khant Maanpur in Punjab, India, he has become a
                    cultural icon in the Punjabi music industry. <br /> <br /> His songs
                    often reflect the struggles and triumphs of everyday life, capturing
                    the essence of Punjabi culture and traditions. With a career spanning
                    over two decades, Babu Maan has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.
                </p>
            );
        },
    },

    {
        description: "FLAMELESS COOKING",
        title: "FLAMELESS COOKING",
        src: "/images/bake.png",
        ctaText: "Details",
        ctaLink: "https://docs.google.com/forms/d/1bY6Jct5L0hxw-MgLACWJRY5i3M-1ZOfoDYbyHJJTNUw/edit",
        registrationLink: " https://docs.google.com/forms/d/1bY6Jct5L0hxw-MgLACWJRY5i3M-1ZOfoDYbyHJJTNUw/edit ",
        content: () => {
            return (
                <p>
                    Metallica, an iconic American heavy metal band, is renowned for their
                    powerful sound and intense performances that resonate deeply with
                    their audience. Formed in Los Angeles, California, they have become a
                    cultural icon in the heavy metal music industry. <br /> <br /> Their
                    songs often reflect themes of aggression, social issues, and personal
                    struggles, capturing the essence of the heavy metal genre. With a
                    career spanning over four decades, Metallica has released numerous hit
                    albums and singles that have garnered them a massive fan following
                    both in the United States and abroad.
                </p>
            );
        },
    },
    {
        description: "POSTER MAKING",
        title: "POSTER MAKING",
        src: "/images/poster.png",
        ctaText: "Details",
        ctaLink: "https://ui.aceternity.com/templates",
        registrationLink: "https://docs.google.com/forms/d/16_bSEWSLzh-laIHTyzXejzY9hz1niJT_fcf2bz-8cD4/edit ",
        content: () => {
            return (
                <p>
                    &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
                    renowned for its intense storyline and powerful performances. Directed
                    by Mohit Suri, the film has become a significant work in the Indian
                    film industry. <br /> <br /> The movie explores themes of love,
                    redemption, and sacrifice, capturing the essence of human emotions and
                    relationships. With a gripping narrative and memorable music,
                    &quot;Aawarapan&quot; has garnered a massive fan following both in
                    India and abroad, solidifying Emraan Hashmi&apos;s status as a
                    versatile actor.
                </p>
            );
        },
    },
    {
        description: "SOLO DANCE",
        title: "SOLO DANCE",
        src: "/images/dance.png",
        ctaText: "Details",
        ctaLink: "https://ui.aceternity.com/templates",
        registrationLink: "https://docs.google.com/forms/d/16_bSEWSLzh-laIHTyzXejzY9hz1niJT_fcf2bz-8cD4/edit ",
        content: () => {
            return (
                <p>
                    &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
                    renowned for its intense storyline and powerful performances. Directed
                    by Mohit Suri, the film has become a significant work in the Indian
                    film industry. <br /> <br /> The movie explores themes of love,
                    redemption, and sacrifice, capturing the essence of human emotions and
                    relationships. With a gripping narrative and memorable music,
                    &quot;Aawarapan&quot; has garnered a massive fan following both in
                    India and abroad, solidifying Emraan Hashmi&apos;s status as a
                    versatile actor.
                </p>
            );
        },
    },
    {
        description: "SPORTS",
        title: "SPORTS",
        src: "/images/trophy.png",
        ctaText: "Details",
        ctaLink: "https://ui.aceternity.com/templates",
        registrationLink: "https://docs.google.com/forms/d/1WIuwo-mZuywfrKV2r8op0fQCBeGLHuoLF5JroVxbyS4/edit ",
        content: () => {
            return (
                <p>
                    &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
                    renowned for its intense storyline and powerful performances. Directed
                    by Mohit Suri, the film has become a significant work in the Indian
                    film industry. <br /> <br /> The movie explores themes of love,
                    redemption, and sacrifice, capturing the essence of human emotions and
                    relationships. With a gripping narrative and memorable music,
                    &quot;Aawarapan&quot; has garnered a massive fan following both in
                    India and abroad, solidifying Emraan Hashmi&apos;s status as a
                    versatile actor.
                </p>
            );
        },
    },
    {
        description: "RANGOLI MAKING",
        title: "RANGOLI MAKING",
        src: "/images/rangoli.png",
        ctaText: "Details",
        ctaLink: "https://ui.aceternity.com/templates",
        registrationLink: "https://docs.google.com/forms/d/1fHUNV8SQsgySm19J725jvqaGySbMNDYHlpYxM9dvvss/edit?pli=1  ",
        content: () => {
            return (
                <p>
                    &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
                    renowned for its intense storyline and powerful performances. Directed
                    by Mohit Suri, the film has become a significant work in the Indian
                    film industry. <br /> <br /> The movie explores themes of love,
                    redemption, and sacrifice, capturing the essence of human emotions and
                    relationships. With a gripping narrative and memorable music,
                    &quot;Aawarapan&quot; has garnered a massive fan following both in
                    India and abroad, solidifying Emraan Hashmi&apos;s status as a
                    versatile actor.
                </p>
            );
        },
    },
];
