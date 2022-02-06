import { getHeadlines } from "../services/dummy_cms";
import HeadlineFeaturedItem from "./headline-featured-item";
import HeadlineItem from "./headline-item";

function Headline() {
  let headlines = getHeadlines();

  return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-1 gap-6 mt-10 h-full">
      {headlines.find((item) => item.featured) && <HeadlineFeaturedItem item={headlines.find((item) => item.featured)} />}

      <div className="h-full md:h-[560px] rounded">
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-6 h-full">
          {headlines.map((headline, index) => {
            if (!headline.featured) {
              return <HeadlineItem key={index} item={headline} className={index === 1 ? "md:col-span-2" : ""}></HeadlineItem>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Headline;
