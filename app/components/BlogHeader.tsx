import { formatDate } from "../utils/date";

export default function BlogHeader({
  tags,
  title,
  date,
  author,
}: {
  tags: Array<string>;
  title: string;
  date: string;
  author: any;
}) {
  return (
    <>
      <div className="flex space-x-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-purple-200 text-purple-600 text-xs font-semibold px-2 py-1 rounded uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="font-outfit font-medium text-3xl mt-4">{title}</span>
      <div className="mt-4 flex flex-col md:flex-row gap-x-10 gap-y-4 font-outfit">
        <span>
          <span className="text-[#767676]"> Author </span>
          <span>
            {author.name}, {author.content.designation} {author.content.company}
          </span>
        </span>
        <span>
          <span className="text-[#767676]"> Published on </span>{" "}
          {formatDate(date)}
        </span>
      </div>
    </>
  );
}
