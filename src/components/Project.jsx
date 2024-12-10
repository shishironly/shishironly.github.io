import { PROJECTS } from "../assets/constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="py-10 px-4 lg:px-0">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="text-4xl text-center pb-8"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((p, index) => (
          <div
            key={index}
            className="flex flex-col  lg:flex-row w-full gap-10 items-center mb-5"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="image w-full lg:w-1/2 mb-4 lg:mb-0"
            >
              <img
                className="h-[40vh] w-[40vh] lg:w-[30vh] lg:h-[30vh]  rounded-md cursor-pointer text-nowrap ml-[150px]"
                src={p.image}
                alt={p.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2"
            >
              <h1 className="text-2xl lg:text-xl">{p.title}</h1>
              <p className="text-neutral-300">{p.description}</p>
              <div className="py-2 text-xs flex flex-wrap gap-2">
                {p.technologies.map((tech, index) => (
                  <button
                    className="border border-purple-800 px-2 py-1 rounded-full"
                    key={index}
                    type="button"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
