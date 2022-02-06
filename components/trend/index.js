import { getTrends } from "services/dummy_cms";
import TrendItem from "./trend-item";

function Trends() {
  const trends = getTrends();

  return (
    <>
      <span className="block text-2xl mb-5">Trending topics</span>

      {trends.map((item, index) => {
        return <TrendItem key={index} item={item} />;
      })}
    </>
  );
}

export default Trends;
