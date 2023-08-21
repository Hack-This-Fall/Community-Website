import Image from "next/image";
import Logo from "../assets/images/logo.svg";

export default function Navbar(props) {
  const navbarItems = ["ABOUT ME", "EXPERIENCE", "COMMUNITIES", "INITIATIVES"];

  return (
    <div className="flex justify-between items-center px-14 py-10 z-50 block w-full absolute">
      <Image src={Logo} className="w-40" alt="logo" />
      <div className="flex font-raleway justify-between items-center font-semibold">
        {navbarItems.map((text, index) => {
          return (
            <div
              key={index}
              className={`${index === 0 ? `` : `ml-8`} cursor-pointer`}
            >
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
