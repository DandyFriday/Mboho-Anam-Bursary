import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import Button from "../ui/Button";

const images = [
  assets.Sir_Udo,
  assets.Dr_Ikim,
  assets.national_pre,
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000); // slower
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          className="absolute inset-0 w-full h-full object-cover scale-110"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#065f46]/75 flex items-center justify-center text-white px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <br /> Mboho Anam Bursary Portal
          </h1>

          <p className="mb-8 text-lg">
            Apply for bursary, track your application status, and manage your student profile easily.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              text="Existing User? Login"
              navigateTo="/login"
              className="bg-white text-primary"
            />
            <Button
              text="Apply Bursary"
              navigateTo="/register"
              className="bg-gold text-dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
