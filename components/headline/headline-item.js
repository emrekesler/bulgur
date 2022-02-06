function HeadlineItem(props) {
  let className = props.className !== undefined ? props.className : "";
  let item = props.item;

  if (item === undefined || item == null) {
    return;
  }

  return (
    <div className={"relative z-0 min-h-[260px] lg:min-h-[0] h-full rounded " + className}>
      <div className="absolute inset-0 min-h-[260px]">
        <img alt="" className="h-full w-full rounded-xl object-cover" src={item.image} />
      </div>
      <div className="absolute inset-0 h-full rounded-xl flex flex-col items-start justify-end p-4 md:p-8">
        <button className={`bg-${item.category.color}-500 text-white items-center rounded text-tiny px-2 mb-2`}>• {item.category.name}</button>

        <p className="text-white text-calc font-medium">{item.title}</p>

        <div className="hidden lg:flex w-full justify-start items-center gap-4 text-white">
          <span>{item.user.name}</span>

          <span className="before:content-['•'] before:pr-5">{item.date}</span>
        </div>
      </div>
    </div>
  );
}

export default HeadlineItem;
