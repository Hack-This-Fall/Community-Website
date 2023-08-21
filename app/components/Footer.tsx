import { useState } from "react";

import Image from "next/image";

import twitter from "../assets/images/footer/twitter.svg";
import linkedin from "../assets/images/footer/linkedin.svg";
import github from "../assets/images/footer/github.svg";
import instagram from "../assets/images/footer/instagram.svg";
import mail from "../assets/images/footer/mail.svg";
import potterhead from "../assets/images/footer/potterhead.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col align-center mb-4 mt-4">
      <div className="flex justify-center align-center items-center">
        <a className="px-[1rem]" href="https://twitter.com/knowshubhangi">
          <Image src={twitter} alt="twitter" />
        </a>
        <a
          className="px-[1rem]"
          href="https://www.instagram.com/knowshubhangi/"
        >
          <Image src={instagram} alt="instagram" />
        </a>
        <a
          className="px-[1rem]"
          href="https://in.linkedin.com/in/knowShubhangi"
        >
          <Image src={linkedin} alt="linkedin" />
        </a>
        <a className="px-[1rem]" href="https://github.com/Shubhangi0304">
          <Image src={github} alt="github" />
        </a>
        <a className="px-[1rem]" href="mailto:knowshubhangi@gmail.com">
          <Image src={mail} alt="mail" />
        </a>
        <a
          className="px-[1rem]"
          href="https://www.instagram.com/friendlypotterhead/"
        >
          <Image src={potterhead} alt="potterhead" />
        </a>
      </div>
      <div className="copyright text-[#1A1A1A] opacity-60 self-center font-inter font-medium text-xs mt-4">
        Copyright © {currentYear} Shubhangi
      </div>
    </div>
  );
}
