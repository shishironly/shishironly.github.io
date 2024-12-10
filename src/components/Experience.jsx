import { EXPERIENCES } from "../assets/constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="py-10 px-4 lg:px-0">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl pb-8"
      >
        Experience
      </motion.h1>

      <div className="date">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-start lg:items-center py-4 lg:py-2"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 mb-4 lg:mb-0"
            >
              <h1 className="lg:px-20 text-lg lg:text-xl">{exp.year}</h1>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2"
            >
              <h1 className="mb-2 text-lg lg:text-xl">
                {exp.role} - {exp.company}
              </h1>
              <p className="text-sm text-neutral-300">{exp.description}</p>
              <div className="tech flex flex-wrap text-xs py-2">
                {exp.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="mr-2 mb-2">
                    <button className="border border-purple-800 px-2 py-1 rounded-full">
                      {tech}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="description"></div>
    </div>
  );
};

export default Experience;
