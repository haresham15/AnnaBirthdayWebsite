import React, { useState } from "react";

const images = [
  "/images/cancun.jpeg",
  "/images/cannon.png",
  "/images/christmas.jpeg",
  "/images/cruiseanna.png",
  "/images/cruisegroup.jpg",
  "/images/diwali.jpeg",
  "/images/fam2.jpeg",
  "/images/nunugrad.jpeg",
  "/images/penn.png",
  "/images/pongal.jpg",
  "/images/precruise.png",
  "/images/wedding.png",
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="rounded-xl w-full h-[800px] object-cover transition duration-700"
      />
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 text-black px-2 py-1 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 text-black px-2 py-1 rounded-full"
      >
        ▶
      </button>
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
