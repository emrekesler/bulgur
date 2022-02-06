import Image from "next/image";

function HeadlineFeaturedItem(props) {
  let item = props.item;

  if (item === undefined || item == null) {
    return;
  }

  return (
    <div className="relative z-0 h-[400px] md:h-[560px] ">
      <div className="absolute inset-0 h-[400px] md:h-[560px]  ">
        <Image alt="" className="h-full w-full rounded-xl object-cover" layout="fill" src={item.image} />
      </div>
      <div className="absolute inset-0 h-[400px] md:h-[560px] flex flex-col items-start justify-end p-4 md:p-8 rounded-xl bg-gradient-to-t from-black to-transparent">
        <button className="bg-purple-500 text-white items-center rounded text-tiny px-2 mb-2">• {item.category.name}</button>

        <p className="text-white text-2xl md:text-4xl font-medium">{item.title}</p>

        <p className="text-white font-normal mb-4">{item.subtitle}</p>

        <div className="hidden md:flex w-full justify-start items-center gap-4 text-white">
          <img alt="" className="w-10 h-full rounded-full" src={item.user.avatar} />

          <span>by {item.user.name}</span>

          <span className="before:content-['•'] before:pr-5">{item.date}</span>

          <span className="before:content-['•'] before:pr-5">{item.readTime}</span>
        </div>
      </div>
    </div>
  );
}

export default HeadlineFeaturedItem;
