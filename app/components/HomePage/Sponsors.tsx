import Image from "next/image";
import Logo from "../../assets/images/logo.svg";

const sponsors = [
  {
    linkTo: "/#",
    image: Logo,
  },
  {
    linkTo: "/#",
    image: Logo,
  },
  {
    linkTo: "/#",
    image: Logo,
  },
  {
    linkTo: "/#",
    image: Logo,
  },
  {
    linkTo: "/#",
    image: Logo,
  },
  {
    linkTo: "/#",
    image: Logo,
  },
  {
    linkTo: "/#",
    image: Logo,
  },
  {
    linkTo: "/#",
    image: Logo,
  },
  {
    linkTo: "/#",
    image: Logo,
  },
  {
    linkTo: "/#",
    image: Logo,
  },
  {
    linkTo: "/#",
    image: Logo,
  },
  {
    linkTo: "/#",
    image: Logo,
  },
  {
    linkTo: "/#",
    image: Logo,
  },
  {
    linkTo: "/#",
    image: Logo,
  },
  {
    linkTo: "/#",
    image: Logo,
  },
  {
    linkTo: "/#",
    image: Logo,
  },
  {
    linkTo: "/#",
    image: Logo,
  },
  {
    linkTo: "/#",
    image: Logo,
  },
];

export default function Sponsors() {
  return (
    <div className="flex flex-col align-center text-center">
      <div className="font-poppins font-bold text-4xl">Sponsors</div>
      <div className="grid grid-cols-6 px-4 gap-x-4 gap-y-4 mt-8">
        {sponsors.map((s, i) => (
          <div className="border p-4 rounded-xl">
            <Image
              src={s.image}
              alt="Community"
              className=" object-cover rounded-l-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
