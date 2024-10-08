"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HeartIcon, PlayIcon } from "@heroicons/react/24/solid";
import HeroNavbar from "./heroSecttionNavbar";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: "/images/ch4.png", text: "#Bible Studies" },
    { src: "/images/bg2.jpg", text: "#Prayers " },
    { src: "/images/bg3.jpg", text: "#Our Community" },
    { src: "/images/bg1.jpg", text: "#Special Events" },
    { src: "/images/zemari1.jpg", text: "#Worship" },
    { src: "/images/pastor2.jpg", text: "#Preaching" },
  ];

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      id="hero-section"
      className="relative w-full min-w-screen h-[600px] overflow-hidden justify-center items-center bg-cover pb-20"
    >
      <AnimatePresence mode='async'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="relative w-full h-full">
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-extrabold text-4xl sm:text-4xl lg:text-4xl p-2 rounded-full shadow-lg hover:bg-opacity-75 focus:outline-none z-10"
              onClick={prevImage}
            >
              ❮
            </button>
            <Image
              src={images[currentIndex].src}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full object-cover"
              fill
              priority
            />
            <AnimatePresence>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex justify-center items-center"
              >
                <h2 className="text-white text-4xl font-bold">{images[currentIndex].text}</h2>
              </motion.div>
            </AnimatePresence>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-extrabold text-4xl sm:text-4xl lg:text-4xl p-2 rounded-full shadow-lg hover:bg-opacity-75 focus:outline-none z-10"
              onClick={nextImage}
            >
              ❯
            </button>
            <Image
              src={images[(currentIndex + 1) % images.length].src}
              alt={`Slide ${currentIndex + 2}`}
              fill
              priority
              style={{ display: "none" }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 bg-transparent bg-opacity-50 text-white py-8 text-center">
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none">
            <HeartIcon className="h-10 w-10 inline mr-2" />
            <Link href="#Programmes">Upcoming Events</Link>
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none">
            <PlayIcon className="h-10 w-10 inline mr-2" />
            <Link href="#recentEvents">Watch Recent Events</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
