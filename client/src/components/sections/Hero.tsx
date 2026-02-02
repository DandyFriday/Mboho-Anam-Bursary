import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import Button from "../ui/Button";

const slides = [
  {
    image: assets.Sir_Udo2,
    overlay: "bg-[#065f46]/70",
  },
  {
    image: assets.Dr_Ikim,
    overlay: "bg-primary/70",
  },
  {
    image: assets.Nat_Pre,
    overlay: "bg-[#ff8832]/50",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] pt-16 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[index].image}
          src={slides[index].image}
          alt="Hero slide"
         className="
          absolute inset-0
          w-full h-full
          object-contain
          md:object-cover
          object-[40%_45%]
          scale-80 md:scale-100
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${slides[index].overlay} flex items-center justify-center text-white px-6`}
      >
        <div className="text-center max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to <br /> Mboho Anam Bursary Portal
          </h1>

          <p className="mb-8 text-base md:text-lg">
            Apply for bursary, track your application status, and manage your
            student profile easily.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              text="Existing User? Login"
              navigateTo="/login"
              className="bg-white text-primary hover:bg-[#f3f4f6]/40 hover:text-[#4b5563]"
            />
            <Button
              text="Apply Bursary"
              navigateTo="/register"
              className="bg-orange-400 text-white  hover:bg-[#f3f4f6]/40 hover:text-[#4b5563]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
