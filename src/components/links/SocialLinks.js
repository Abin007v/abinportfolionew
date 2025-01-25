import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function SocialLinks({ isFooter }) {
  const iconClass = isFooter 
    ? "text-2xl text-[#feb649] hover:text-white transition-colors duration-300"
    : "text-2xl text-[#102a42] hover:text-[#feb649] transition-colors duration-300";

  return (
    <ul className="grid grid-cols-5 gap-4 mt-12 w-80 justify-items-center">
      <li>
        <a
          href="https://www.facebook.com/profile.php?id=100039997063450"
          className={iconClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/abin-v-v-a50b65227/"
          className={iconClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a 
          href="https://github.com/Abin007v" 
          className={iconClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </li>
      <li>
        <a 
          href="https://www.instagram.com/_abin_v_/" 
          className={iconClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </li>
      <li>
        <a 
          href="mailto:abinvv9108834737@gmail.com" 
          className={iconClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail />
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
