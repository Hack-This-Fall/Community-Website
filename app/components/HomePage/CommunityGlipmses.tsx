const glipmses = [
  {
    count: "90+",
    text: "Cities",
  },
  {
    count: "90+",
    text: "Cities",
  },
  {
    count: "90+",
    text: "Cities",
  },
  {
    count: "90+",
    text: "Cities",
  },
  {
    count: "90+",
    text: "Cities",
  },
];

export default function CommunityGlipses() {
  return (
    <div className="flex flex-col justify-center w-full text-center h-[100vh] container-1440">
      <h1 className="font-poppins text-3xl md:text-6xl font-bold ">
        Community Glipmses
      </h1>
      <p className="font-dm-sans mt-4">
        Hack This Fall began with a mindset of encouraging beginner hackers to
        build <br />
        unique projects regardless of the tech or field
      </p>
      <div className="grid grid-cols-1 md:grid-cols-5 center mt-10 gap-x-4 gap-y-4 px-4">
        {glipmses.map((g, i) => (
          <div
            key={i}
            className="flex flex-col aspect-auto md:aspect-square bg-[#000000] text-white items-center justify-center p-4 md:p-0"
          >
            <span className="font-dm-sans font-medium text-2xl md:text-6xl">
              {g.count}
            </span>
            <span className="font-poppins font-medium  text-xl md:text-2xl">
              {g.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
