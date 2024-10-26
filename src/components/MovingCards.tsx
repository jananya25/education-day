"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function MovingCards() {
    return (
        <section className="h-[40rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden" id="coordinators">
            <h2 className="text-white text-3xl mb-6">Event Coordinators</h2>
            <InfiniteMovingCards
                items={coordinators}
                direction="right"
                speed="slow"
            />
        </section>
    );
}

const coordinators = [
  {
    name: "Gunsita Varun",
    title: "BA (JMC) 3rd Year",
    img: "/images/gunshita.jpg",
    linkedin: "https://www.linkedin.com/in/gunshita-varun-795400271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
  },
  {
    name: "Yatin Sharma",
    title: "MCA 1st Year",
    img: "/images/yatin.jpg",
    linkedin: "https://www.linkedin.com/in/yatinsharma01/", 
  },
    {
      name: "Amrendram",
      title: "MCA 1st Year",
      img: "/images/AD.jpg",
      linkedin: "https://www.linkedin.com/in/kumar-amrendram?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", 
    },
    {
      name: "Karam Kaur",
      title: "BA (JMC) 2nd Year",
      img: "/images/karam.jpg",
      linkedin: "https://www.linkedin.com/in/karam-kaur-4867862a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
    },
    {
      name: "Yatin Sharma",
      title: "MCA 1st Year",
      img: "/images/yatin.jpg",
      linkedin: "https://www.linkedin.com/in/yatinsharma01/", 
    },
    {
      name: "Sidak Ahuja",
      title: "MCA 2nd Year",
      img: "/images/sidak.jpg",
      linkedin: "https://www.linkedin.com/in/gunshita-varun-795400271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
    },
    {
      name: "Amit Raj",
      title: "MCA 2nd Year",
      img: "/images/amit1.jpg",
      linkedin: "https://www.linkedin.com/in/raj-amitt?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
    },
    {
      name: "Ujjwal Chauhan",
      title: "BA (JMC) 3rd Year",
      img: "/images/ujjwal.jpg",
      // linkedin: "https://www.linkedin.com/in/raj-amitt?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
    },
  ];
  
