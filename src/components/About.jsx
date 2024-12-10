import about from '../assets/photo.png'
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className='pb-10'>
      <h1 className='text-center text-3xl pb-10'>About Me</h1>
      <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-20'>
        <motion.div 
          className="image w-full lg:w-1/2"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img src={about} className='rounded-md w-[50vh] h-[50vh] bg-cover' alt="About Me" />
        </motion.div>
        <motion.div 
          className="text w-full lg:w-1/2 p-4 lg:p-0"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ad dolore nisi tenetur cum quas deserunt accusamus, aspernatur animi ea blanditiis fuga, autem quae dolor esse? Ut quibusdam facere quo earum unde, fuga numquam magnam doloribus aperiam alias! Quos omnis ad molestiae tempora perferendis consequuntur in obcaecati, quis quaerat iure fugit laborum eveniet, commodi porro impedit odit error ab necessitatibus minus totam nihil. Quae nisi assumenda accusantium amet enim doloremque, alias modi recusandae soluta repellendus laboriosam beatae laborum sun.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
