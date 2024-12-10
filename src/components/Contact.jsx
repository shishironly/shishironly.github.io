import { CONTACT } from "../assets/constants/index";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="text-center pb-5">
      <div>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8 }}
          className="text-2xl mb-3"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="#">{CONTACT.email}</a>
        <p>&copy; {new Date().getFullYear()} Shishir. All rights reserved.</p>

      </div>
    </div>
  );
};

export default Contact;
