import React from "react";

interface CardProps {
  letter: string;
  caption: string;
  description: string;
  bgClass?: string;
  captionClass?: string;
}

const Card: React.FC<CardProps> = ({
  letter,
  caption,
  description,
  bgClass = "bg-yellow2",
  captionClass = "text-white",
}) => {
  return (
    <div
      className={`relative flex flex-col justify-end items-center ${bgClass} p-8 rounded-xl shadow-md overflow-hidden w-full`}
    >
      {/* Background Letter */}
      <span className="absolute -top-10 right-2 text-[8rem] font-extrabold opacity-10 pointer-events-none select-none">
        {letter}
      </span>

      {/* Content */}
      <div className="relative text-center z-10 w-full">
        <h3
          className={`text-xl md:text-3xl font-bold mb-2 ${captionClass}`}
        >
          {caption}
        </h3>
        <p className="text-white text-base md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
