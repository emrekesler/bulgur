function TrendItem({ item }) {
  return (
    <div className="h-14 mb-4 bg-red-500 rounded flex items-center justify-center relative">
      <img className="absolute h-full w-full object-cover rounded" src={item.image} alt=""></img>
      <div className="absolute h-full w-full bg-black opacity-20 rounded"></div>
      <span className="absolute text-white font-medium">{item.title}</span>
    </div>
  );
}

export default TrendItem;
