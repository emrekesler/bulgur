import Link from "next/link";
import { getHeadlines } from "../services/dummy_cms";
import HeadlineFeaturedItem from "./headline-featured-item";
import HeadlineItem from "./headline-item";

export default function Headline() {
  let headlines = getHeadlines();
  return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-1 gap-6 mt-10 h-full">
      {headlines
        .filter((item) => item.featured)
        .map((item) => (
          <Link key={item} href={`/blog/${encodeURIComponent(item.slug)}`}>
            <a>
              <HeadlineFeaturedItem item={headlines.find((item) => item.featured)} />
            </a>
          </Link>
        ))}

      <div className="h-full md:h-[560px] rounded">
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-6 h-full">
          {headlines.map((headline, index) => {
            if (!headline.featured) {
              return (
                <Link href={`/blog/${encodeURIComponent(headline.slug)}`}>
                  <a className={index === 1 ? "md:col-span-2" : ""}>
                    <HeadlineItem key={index} item={headline}></HeadlineItem>
                  </a>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
