import profile from "../assets/my-profile.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full items-center gap-8 lg:gap-20 pb-10">
      <div className="text flex flex-col w-full lg:w-1/2 p-4 lg:p-0">
        <motion.h1
          className="font-thin text-xl lg:text-6xl text-nowrap sm:text-5xl mb-2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}  
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Shishir Bhattarai
        </motion.h1>
        <motion.h2
          className="text-2xl lg:text-2xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Full-Stack Developer
        </motion.h2>
        <motion.p
          className="text-sm"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
         Hello! I&apos;m Shishir Bhattarai, a dedicated and enthusiastic Full
            Stack Developer with a strong passion for creating dynamic,
            user-friendly web applications. With a robust skill set that spans
            both front-end and back-end development, I thrive on solving complex
            problems and delivering high-quality software solutions.
        </motion.p>
      </div>

      <div className="image w-full lg:w-1/2 p-4 lg:p-8 flex justify-center">
        <img src={profile} className="w-[60vh] h-auto  rounded-full" />
      </div>
    </div>
  );
};

export default Hero;
