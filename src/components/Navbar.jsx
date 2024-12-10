import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between py-5 mb-5">
        <div className="logo">
          <img className="h-16 w-auto" src={logo} alt="Logo" />
        </div>
        <div className="icons flex gap-4">
          <a href="https://www.facebook.com/onlysisir" target="blank"><FaFacebook className="cursor-pointer hover:text-blue-600 transition-colors duration-300"/></a>
          <a href="https://x.com/onlysisir" target="blank"><FaTwitter className="cursor-pointer hover:text-blue-400 transition-colors duration-300"/></a>
          <a href="#"> <FaInstagram className="cursor-pointer hover:text-pink-500 transition-colors duration-300"/></a>
          <a href="https://www.linkedin.com/in/shishironly/" target="blank"><FaLinkedin className="cursor-pointer hover:text-blue-700 transition-colors duration-300"/></a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
