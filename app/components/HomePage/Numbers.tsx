import { useEffect } from "react";
import debounce from "debounce";

const numbers = [
  {
    heading: "10k+",
    text: "overall hacker reach",
    class: "",
    parentClass: "pl-0 pt-0 pr-2 pb-2 md:pr-4 md:pb-4",
  },
  {
    heading: "55+",
    text: "countries global community",
    class: "border rounded-3xl bg-[#FAFAFA] border-[#00000033]",
    parentClass:
      "border-l border-dashed border-[#D4D4D4] pr-0 md:pr-4 pl-2 pt-0 pb-2 md:pb-4 md:pl-4 md:pt-0",
  },
  {
    heading: "60+",
    text: "workshops provided",
    class:
      "bg-[#FAFAFA] border border-[#00000033] md:border-0 rounded-3xl md:bg-transparent ",
    parentClass:
      "border-l-0 md:border-l border-dashed border-[#D4D4D4] border-t md:border-t-0 pl-0 md:pl-4 pr-2 pt-2 pb-2 md:pr-4 md:pb-4 md:pt-0",
  },
  {
    heading: "590+",
    text: "innovative projects built",
    class:
      "bg-transparent md:border border-[#00000033] rounded-3xl md:bg-[#FAFAFA]",
    parentClass:
      "border-l border-dashed border-[#D4D4D4] border-t md:border-t-0 pr-0 pl-2  pt-2 pb-2 md:pb-4 md:pl-4 md:pt-0",
  },
  {
    heading: "24+",
    text: "successful events conducted",
    class:
      "bg-transparent md:border border-[#00000033]  rounded-3xl md:bg-[#FAFAFA]",
    parentClass:
      "border-t border-dashed border-[#D4D4D4] pl-0 pr-2 pt-2 pb-2 md:pr-4 md:pb-0 md:pt-4",
  },
  {
    heading: "290+",
    text: "universities connected",
    class:
      "bg-[#FAFAFA] border md:border-0 border-[#00000033] rounded-3xl md:bg-transparent",
    parentClass:
      "border-l border-t border-dashed border-[#D4D4D4] pr-0 md:pr-4 pl-2  pt-2 pb-2  md:pb-0 md:pl-4 md:pt-4",
  },
  {
    heading: "15k+",
    text: "overall social media reach",
    class: "border border-[#00000033] rounded-3xl bg-[#FAFAFA]",
    parentClass:
      "border-l-none md:border-l border-t border-dashed border-[#D4D4D4] pl-0 md:pl-4 pr-2 pt-2 md:pr-4 pb-0 md:pt-4",
  },
  {
    heading: "62+",
    text: "trusted partners & sponsors",
    class:
      "bg-transparent border-none md:border border-[#00000033] rounded-3xl md:bg-transparent",
    parentClass:
      "border-l border-t border-dashed border-[#D4D4D4] pr-0 pl-2 pt-2 pb-0 md:pl-4 md:pt-4",
  },
];

export default function Numbers() {
  useEffect(() => {
    const letter = document.querySelectorAll<HTMLElement>(".letter");
    const numbers = document.getElementById("numbers");

    const scrollFromTop = numbers?.offsetTop || 0;

    const windowWidth = window.innerWidth;

    const startAnimation =
      scrollFromTop -
      (numbers?.offsetHeight || 0) / (windowWidth < 640 ? 2 : 2);
    const numberOfPixelsForAnimation = 300;

    window.addEventListener(
      "scroll",
      debounce((e) => {
        let scroll = window.scrollY;

        let scrolled =
          ((scroll - startAnimation) / numberOfPixelsForAnimation) *
          letter.length;

        letter.forEach((l, i) => {
          if (l) {
            if (scrolled - i > 1) l.style.opacity = "1";
            else if (scrolled - i < 0.2) l.style.opacity = "0.2";
            else l.style.opacity = `${scrolled - i}`;
          }
        });
      }, 10)
    );
  }, []);
  return (
    <div
      id="numbers"
      className="flex flex-col align-center text-center container-1200 mt-[6.5rem]"
    >
      <div className="font-regular text-[1.4rem] md:text-[3.4rem] text-black leading-none">
        <span className="letter">B</span>
        <span className="letter">e</span> <span className="letter">p</span>
        <span className="letter">a</span>
        <span className="letter">r</span>
        <span className="letter">t</span> <span className="letter">o</span>
        <span className="letter">f</span> <span className="letter">a</span>{" "}
        <span className="letter">c</span>
        <span className="letter">o</span>
        <span className="letter">m</span>
        <span className="letter">m</span>
        <span className="letter">u</span>
        <span className="letter">n</span>
        <span className="letter">i</span>
        <span className="letter">t</span>
        <span className="letter">y</span> <span className="letter">l</span>
        <span className="letter">i</span>
        <span className="letter">k</span>
        <span className="letter">e</span> <span className="letter">n</span>
        <span className="letter">o</span> <span className="letter">o</span>
        <span className="letter">t</span>
        <span className="letter">h</span>
        <span className="letter">e</span>
        <span className="letter">r</span> <span className="letter">a</span>
        <span className="letter">n</span>
        <span className="letter">d</span> <span className="letter">g</span>
        <span className="letter">e</span>
        <span className="letter">t</span> <span className="letter">t</span>
        <span className="letter">h</span>
        <span className="letter">e</span> <span className="letter">t</span>
        <span className="letter">r</span>
        <span className="letter">u</span>
        <span className="letter">e</span>{" "}
        <span className="font-againstHistory text-[#FF9933] text-[2rem] md:text-[5rem]">
          <span className="letter">h</span>
          <span className="letter">a</span>
          <span className="letter">c</span>
          <span className="letter">k</span>
          <span className="letter">e</span>
          <span className="letter">r</span> <span className="letter">e</span>
          <span className="letter">x</span>
          <span className="letter">p</span>
          <span className="letter">e</span>
          <span className="letter">r</span>
          <span className="letter">i</span>
          <span className="letter">e</span>
          <span className="letter">n</span>
          <span className="letter">c</span>
          <span className="letter">e</span>
          <span className="letter">.</span>
        </span>{" "}
        <span className="letter">H</span>
        <span className="letter">a</span>
        <span className="letter">c</span>
        <span className="letter">k</span> <span className="letter">T</span>
        <span className="letter">h</span>
        <span className="letter">i</span>
        <span className="letter">s</span> <span className="letter">F</span>
        <span className="letter">a</span>
        <span className="letter">l</span>
        <span className="letter">l</span> <span className="letter">s</span>
        <span className="letter">t</span>
        <span className="letter">r</span>
        <span className="letter">o</span>
        <span className="letter">n</span>
        <span className="letter">g</span>
        <span className="letter">l</span>
        <span className="letter">y</span> <span className="letter">e</span>
        <span className="letter">m</span>
        <span className="letter">b</span>
        <span className="letter">o</span>
        <span className="letter">d</span>
        <span className="letter">i</span>
        <span className="letter">e</span>
        <span className="letter">s</span> <span className="letter">t</span>
        <span className="letter">h</span>
        <span className="letter">e</span> <span className="letter">v</span>
        <span className="letter">a</span>
        <span className="letter">l</span>
        <span className="letter">u</span>
        <span className="letter">e</span>
        <span className="letter">s</span> <span className="letter">o</span>
        <span className="letter">f</span>{" "}
        <span className="font-againstHistory text-[#9933FF] text-[2rem] md:text-[5rem]">
          <span className="letter">i</span>
          <span className="letter">n</span>
          <span className="letter">c</span>
          <span className="letter">l</span>
          <span className="letter">u</span>
          <span className="letter">s</span>
          <span className="letter">i</span>
          <span className="letter">v</span>
          <span className="letter">i</span>
          <span className="letter">t</span>
          <span className="letter">y</span> <span className="letter">a</span>
          <span className="letter">n</span>
          <span className="letter">d</span> <span className="letter">d</span>
          <span className="letter">i</span>
          <span className="letter">v</span>
          <span className="letter">e</span>
          <span className="letter">r</span>
          <span className="letter">s</span>
          <span className="letter">i</span>
          <span className="letter">t</span>
          <span className="letter">y</span>
          <span className="letter">.</span>
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-0 gap-y-0 mt-8  mx-auto mb-24 mt-24">
        {numbers.map((s, i) => (
          <div key={i} className={"" + s.parentClass}>
            <div
              className={
                "flex flex-col font-inter gap-y-3 px-2 py-4 md:px-4 md:py-8 items-center justify-center h-full " +
                s.class
              }
            >
              <span className="font-medium text-lg md:text-4xl">
                {s.heading}
              </span>
              <span className="font-regular text-sm md:text-lg">{s.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
