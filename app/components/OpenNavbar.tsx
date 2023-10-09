import Link from "next/link";
import Image from "next/image";
import Close from "../assets/images/navbar/close.svg";
import socials, { SOCIAL_COLORS } from "../utils/socials";
import YoutubeIcon from "./icons/socials/Youtube";

const navbarItems = [
  { link: "/", text: "Home", conditions: [""] },
  { link: "events", text: "Events", conditions: ["event", "events"] },
  { link: "Blogs", text: "Blogs", conditions: ["blog", "blogs"] },
  { link: "Team", text: "Team", conditions: ["team"] },
  { link: "Swags", text: "Swags", conditions: ["swag", "swags"] },
  { link: "Contact", text: "Contact", conditions: ["contact"] },
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
        className="bg-[#000000] h-[100vh] opacity-100 absolute min-w-[100vw] md:min-w-[40vw] right-0 top-0 text-white rounded-2xl md:rounded-l-2xl md:rounded-r-none p-10 pl-10 flex flex-col justify-between"
      >
        <div className="flex justify-end">
          <Image
            className="cursor-pointer"
            onClick={() => setIsNavbarOpen(false)}
            src={Close}
            alt="close"
          />
        </div>
        <div className="flex flex-col">
          {navbarItems.map((item, index) => (
            <Link
              onClick={() => setIsNavbarOpen(false)}
              href={item.link}
              key={item.text}
              className={`italic opacity-80 text-2xl md:text-3xl ${
                item.conditions.includes(url)
                  ? "!text-4xl md:!text-5xl font-bold !opacity-100 underline"
                  : null
              } ${index != 0 ? "mt-4 " : null}`}
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className="grid gap-4 grid-cols-3 md:grid-cols-6 grid bg-[#191919] justify-between py-4 px-4 rounded-2xl ">
          {socials.map((s, i) => {
            const SpecificSocial = s.icon;
            return (
              <Link
                href={s.link}
                target="_blank"
                key={s.name}
                className="w-[50px] h-[50px] bg-[#222222] p-2 rounded-full flex justify-center items-center cursor-pointer"
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
