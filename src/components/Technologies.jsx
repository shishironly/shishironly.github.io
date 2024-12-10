import { FaReact, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { DiMongodb, DiRedis } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="py-10">
      <h1 className="text-3xl text-center pb-10">Technologies</h1>
      <div className="icons flex flex-wrap justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-600 text-3xl p-4 rounded-3xl text-[#61dbfb] flex-shrink-0 cursor-pointer"
        >
          <FaReact />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-600 text-3xl p-4 rounded-3xl flex-shrink-0 cursor-pointer"
        >
          <RiNextjsFill />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-600 text-3xl p-4 rounded-3xl flex-shrink-0 cursor-pointer"
        >
          <FaNodeJs className="text-[#4DB33D]" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-600 text-3xl p-4 rounded-3xl flex-shrink-0 cursor-pointer" 
        >
          <DiRedis className="text-[#636466]" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-600 text-3xl p-4 rounded-3xl flex-shrink-0 cursor-pointer"
        >
          <DiMongodb className="text-[#4DB33D]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
