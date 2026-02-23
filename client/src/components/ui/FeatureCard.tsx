// import React from "react";

// interface CardProps {
 
//   caption: string;
//   description: string;
//   bgClass?: string;
//   captionClass?: string;
// }

// const Card: React.FC<CardProps> = ({
  
//   caption,
//   description,
//   bgClass = "bg-yellow2",
//   captionClass = "text-white",
// }) => {
//   return (
//     <div
//       className={`relative flex flex-col justify-end items-center ${bgClass} p-8 rounded-xl shadow-md overflow-hidden w-full`}
//     >
      
//       {/* Content */}
//       <div className="relative text-center z-10 w-full">
//         <h3
//           className={`text-xl md:text-3xl font-bold mb-2 ${captionClass}`}
//         >
//           {caption}
//         </h3>
//         <p className="text-white text-base md:text-lg">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <motion.div
      // Initial state: slightly zoomed in, lower, transparent
      initial={{ scale: 1.1, opacity: 0, y: 40 }}
      // Animate to: normal scale, position, visible
      animate={{ scale: 1, opacity: 1, y: 0 }}
      // Animation duration and easing
      transition={{ duration: 0.8, ease: "easeOut" }}
      // Optional: stagger if used in a list
    >
      <Link
        to={link}
        className="relative group rounded-xl overflow-hidden shadow-lg h-72 w-full block"
      >
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover 
                     transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 
                        transition duration-300 group-hover:bg-black/70" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
            {title}
          </h3>
          <p className="text-gray-200 text-sm md:text-base">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeatureCard;
