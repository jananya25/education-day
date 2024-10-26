"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "What is Education Day?",
        answer:
            "National Education Day is an annual observance in India to commemorate the birth anniversary of Maulana Abul Kalam Azad, the first education minister of independent India, who served from 15 August 1947 until 2 February 1958. National Education Day of India is celebrated on 11 November every year.",
    },
    {
        question: "What are the benefits I'd get if I participate in the Education Day?",
        answer:
            "Attractive prizes nobody can say no to!",
    },
    {
        question: "Who can take part in Education Day?",
        answer:
            "Anyone and Everyone! (Teachers, not you!)",
    },
    {
        question: "Is there any fee to take part in the Education Day?",
        answer:
            "It is absolutely FREE!!!",
    },
];

export default function FAQS() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="bg-neutral-900 text-neutral-200 py-12" id="faq">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            layout
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="bg-neutral-800 rounded-lg p-6 cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <motion.div
                                className="flex justify-between items-center"
                                initial={{ opacity: 0.8 }}
                                animate={{ opacity: 1 }}
                            >
                                <h3 className="text-lg md:text-xl font-semibold">{faq.question}</h3>
                                <motion.span
                                    className="text-pink-500"
                                    animate={{
                                        rotate: activeIndex === index ? 45 : 0,
                                    }}
                                >
                                    +
                                </motion.span>
                            </motion.div>

                            {activeIndex === index && (
                                <motion.p
                                    key="faq-answer"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    className="mt-4 text-neutral-400"
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
