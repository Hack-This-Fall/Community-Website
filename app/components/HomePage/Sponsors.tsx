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
];

export default function Sponsors() {
  return (
    <div className="flex flex-col align-center text-center container-1440">
      <div className="font-outfit font-semibold text-[3.9rem] text-black">
        Partners in doing good
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-4 mt-8 container-1200 mx-auto mb-24">
        {sponsors.map((s, i) => (
          <div className="border p-4 rounded-xl" key={i}>
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
