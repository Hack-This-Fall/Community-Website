import { Image } from "@chakra-ui/react";
import Link from "next/link";

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
      <div className="w-full h-full flex flex-col overflow-hidden rounded-lg shadow-lg">
        {/* Image Section */}
        <div className="relative h-60 w-full overflow-hidden rounded-b-lg">
          <Image src={image} alt="Card Image" objectFit="cover" />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col justify-between grow">
          {/* Tags */}
          <div>
            <div className="mb-2 flex space-x-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-200 text-purple-600 text-xs font-semibold px-2 py-1 rounded uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-2">
              {description.slice(0, 150)}
            </p>
          </div>

          {/* Date */}
          <p className="text-gray-500 text-xs mt-4">{date}</p>
        </div>
      </div>
    </Link>
  );
}
