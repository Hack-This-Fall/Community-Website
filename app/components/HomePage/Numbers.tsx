const numbers = [
  {
    heading: "~$100 billion",
    text: "cumulative trading volume to date",
    class: "",
    parentClass: "",
  },
  {
    heading: "0.8%",
    text: "of the global crypto spot trading volume",
    class: "border rounded-3xl bg-[#FAFAFA]",
    parentClass: "border-l border-dashed border-[#D4D4D4]",
  },
  {
    heading: "25+",
    text: "leading global and local crypto exchanges",
    class: "bg-[#FAFAFA] border-none md:border rounded-3xl md:bg-transparent",
    parentClass: "border-l-none md:border-l border-dashed border-[#D4D4D4]",
  },
  {
    heading: "0.8%",
    text: "of the global crypto spot trading volume",
    class: "bg-transparent md:border rounded-3xl md:bg-[#FAFAFA]",
    parentClass: "border-l border-dashed border-[#D4D4D4]",
  },
  {
    heading: "2017",
    text: "start, crypto-natives",
    class: "bg-transparent md:border rounded-3xl md:bg-[#FAFAFA]",
    parentClass: "border-t border-dashed border-[#D4D4D4]",
  },
  {
    heading: "1,200+",
    text: "crypto-asset pairs",
    class: "bg-[#FAFAFA] border-none md:border rounded-3xl md:bg-transparent",
    parentClass: "border-l border-t border-dashed border-[#D4D4D4]",
  },
  {
    heading: "5 billion+",
    text: "trades done to date",
    class: "bg-transparent md:border rounded-3xl md:bg-[#FAFAFA]",
    parentClass:
      "border-l-none md:border-l border-t border-dashed border-[#D4D4D4]",
  },
  {
    heading: "24/7",
    text: "liquidity",
    class: "bg-[#FAFAFA] border-none md:border rounded-3xl md:bg-transparent",
    parentClass: "border-l border-t border-dashed border-[#D4D4D4]",
  },
];

export default function Numbers() {
  return (
    <div className="flex flex-col align-center text-center container-1200">
      <div className="font-regular text-[3.4rem] text-black leading-none">
        All your team’s facilitation tools in one place. Stop hosting{" "}
        <span className="font-againstHistory text-[#FF9933] text-[5rem]">
          snooz.
        </span>{" "}
        Butter brings structure, energy, and joy to your meetings,{" "}
        <span className="font-againstHistory text-[#9933FF] text-[5rem]">
          workshops, and training .
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-0 gap-y-0 mt-8 max-w-[1200px] mx-auto mb-24 mt-24">
        {numbers.map((s, i) => (
          <div key={i} className={"px-4 py-4 " + s.parentClass}>
            <div
              className={
                "p-4 flex flex-col font-inter gap-y-3 px-4 py-8 items-center justify-center " +
                s.class
              }
            >
              <span className="font-medium text-4xl">{s.heading}</span>
              <span className="font-regular text-lg">{s.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
