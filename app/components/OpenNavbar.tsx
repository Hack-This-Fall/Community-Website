import Link from "next/link";
import Image from "next/image";
import Close from "../assets/images/navbar/close.svg";
import Banner from "../assets/images/banner.png";
import socials, { SOCIAL_COLORS } from "../utils/socials";

const navbarItems = [
  { link: "/", text: "Home", conditions: [""] },
  { link: "about", text: "About", conditions: ["team"] },
  { link: "events", text: "Events", conditions: ["event", "events"] },
  { link: "projects", text: "Projects", conditions: ["projects"] },
  { link: "blog", text: "Blog" },
];

export default function OpenNavbar({
  setIsNavbarOpen,
}: {
  setIsNavbarOpen: Function;
}) {
  const url = window.location.href.split("//")[1].split("/")[1];

  return (
    <>
      <div
        style={{
          zIndex: 11000,
          top: window.pageYOffset || document.documentElement.scrollTop,
        }}
        className="bg-[#ffffff] h-[100vh] opacity-100 absolute min-w-[100vw]  text-white rounded-2xl flex flex-col justify-between py-6"
      >
        <div className="flex justify-end px-10">
          <Image
            className="cursor-pointer"
            onClick={() => setIsNavbarOpen(false)}
            src={Close}
            alt="close"
          />
        </div>
        <div className="flex flex-col text-black gap-y-4 px-10">
          {navbarItems.map((item, index) => (
            <Link
              onClick={() => setIsNavbarOpen(false)}
              href={item.link}
              key={item.text}
              className={`text-2xl md:text-3xl ${"!text-4xl md:!text-5xl"} ${
                index != 0 ? "mt-4 " : null
              }`}
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div>
          <Image
            src={Banner}
            className="w-[100%] px-10 opacity-0"
            alt="banner"
          />
        </div>
        <div className="flex flex-col font-outfit overflow-hidden mt-8 md:mt-12 w-[100%] text-black opacity-30">
          <div className="flex flex-row text-[1.8rem] md:text-[5.5rem] font-extrabold text-nowrap whitespace-nowrap gap-x-2 w-[100vw] ml-[-65%] md:ml-[-46%] leading-none	">
            <span>INNOVATE FOR GOOD</span>
            <span className="text-w-outline-nav">INNOVATE FOR GOOD</span>
            <span>INNOVATE FOR GOOD</span>
            <span className="text-w-outline-nav">INNOVATE FOR GOOD</span>
            <span>INNOVATE FOR GOOD</span>
          </div>
          <div className="flex flex-row text-[1.8rem] md:text-[5.5rem] font-extrabold text-nowrap whitespace-nowrap gap-x-2 w-[100vw] ml-[-83%] md:ml-[-58%] leading-none ">
            <span className="text-w-outline-nav">INNOVATE FOR GOOD</span>
            <span>INNOVATE FOR GOOD</span>
            <span className="text-w-outline-nav">INNOVATE FOR GOOD</span>
            <span>INNOVATE FOR GOOD</span>
            <span className="text-w-outline-nav">INNOVATE FOR GOOD</span>
          </div>
        </div>
        <div className="flex gap-0 justify-between rounded-2xl px-10">
          {socials.map((s, i) => {
            const SpecificSocial = s.icon;
            return (
              <Link
                href={s.link}
                target="_blank"
                key={s.name}
                className="w-[50px] h-[50px] p-2 rounded-full flex justify-center items-center cursor-pointer"
              >
                <SpecificSocial color={SOCIAL_COLORS.NAVBAR} />
              </Link>
            );
          })}
        </div>
      </div>
      <div
        onClick={() => setIsNavbarOpen(false)}
        style={{ zIndex: 10000 }}
        className="fixed bg-black h-[100%] w-[100%] top-0 left-0 bottom-0 right-0 opacity-50"
      ></div>
    </>
  );
}
