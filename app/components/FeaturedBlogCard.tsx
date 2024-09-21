import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { formatDate } from "../utils/date";

export default function FeaturedBlogCard({
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
    <Link
      href={`/blog/${slug}`}
      className={"col-span-1 md:col-span-2 font-outfit"}
    >
      <div
        className={
          "w-full h-full flex flex-col md:flex-row-reverse overflow-hidden rounded-lg blog-card"
        }
      >
        {/* Image Section */}
        {/* <div className="relative w-full md:w-[200%] h-full overflow-hidden rounded-b-lg md:rounded-l-lg"> */}
        <Image
          className="relative min-w-full w-full md:min-w-[40vw] h-full overflow-hidden rounded-b-lg md:rounded-l-lg"
          src={image}
          alt="Card Image"
          objectFit="cover"
        />
        {/* </div> */}

        {/* Content Section */}
        <div className="p-4 flex flex-col justify-between">
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
            <h2 className="text-2xl md:text-3xl font-bold mt-6">{title}</h2>

            {/* Description */}
            <p className="text-sm mt-6 md:mt-2">{description}</p>
          </div>

          {/* Date */}
          <p className="text-[#474747] text-xs mt-4">{formatDate(date)}</p>
        </div>
      </div>
    </Link>
  );
}
