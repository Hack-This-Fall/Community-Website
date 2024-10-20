import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { formatDate } from "../utils/date";

const rmLastSpace = (str: string): string => {
  const strSplit = str.split(" ");
  strSplit.pop();
  return strSplit.join(" ").trim();
};

export default function BlogCard({
  slug,
  title,
  tags,
  date,
  description,
  image,
}: {
  slug: string;
  title: string;
  tags: string[];
  date: string;
  description: string;
  image: string;
}) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="w-full h-full flex flex-col overflow-hidden rounded-lg blog-card">
        {/* Image Section */}
        <div className="relative w-full overflow-hidden ">
          <Image
            className="rounded-b-lg md:rounded-b-xl aspect-[16/9]"
            src={image}
            alt="Card Image"
            objectFit="cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col justify-between grow">
          {/* Tags */}
          <div>
            <div className="mb-2 flex space-x-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-200 tag text-purple-600 text-xs font-semibold px-2 py-1 rounded uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold ">{title}</h2>

            {/* Description */}
            <p className=" text-sm mt-2">
              {description.slice(0, 150) == description
                ? description
                : rmLastSpace(description.slice(0, 150)) + " ..."}
            </p>
          </div>

          {/* Date */}
          <p className="text-[#474747] text-xs mt-4">{formatDate(date)}</p>
        </div>
      </div>
    </Link>
  );
}
