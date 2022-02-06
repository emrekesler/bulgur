import Link from "next/link";

function BlogCard(props) {
  let item = props.item;

  if (item === undefined || item == null) {
    return <></>;
  }

  return (
    <Link href={`/blog/${encodeURIComponent(item.slug)}`}>
      <a>
        <div className="flex flex-col justify-between gap-2">
          <div className="aspect-4/3 rounded-xl flex flex-col justify-end ">
            <img alt="" className="aspect-4/3 h-full w-full rounded-xl object-cover" src={item.image} />
            <button className={`bg-${item.category.color}-500 text-white absolute mx-4 my-5 items-center rounded text-tiny px-2 mb-2`}>• {item.category.name}</button>
          </div>

          <p className="text-gray-800 text-lg font-medium">{item.title}</p>

          <p className="text-gray-500 text-sm">{item.subtitle}</p>

          <div className="hidden sm:flex w-full justify-start items-center gap-4 text-gray-500">
            <img alt="" className="w-10 h-full rounded-full" src={item.user.avatar} />

            <span>{item.user.name}</span>

            <span className="before:content-['•'] before:pr-5">{item.date}</span>

            <span className="hidden sm:visible before:content-['•'] before:pr-5">{item.readTime}</span>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default BlogCard;
