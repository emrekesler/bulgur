import { getBlogs } from "../services/dummy_cms";
import BlogCard from "./blog-card";

function Blogs() {
  let blogs = getBlogs();

  return (
    <section className="w-full lg:w-3/4 ">
      <div className="flex flex-col flex-wrap gap-1 mb-8 ">
        <span className="text-3xl ">
          <i className="fas fa-hourglass-start"></i> Today&apos;s top highlights
        </span>
        <span className="text-gray-500"> Latest breaking news, pictures, videos, and special reports</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {blogs
          .filter((item) => !item.featured)
          .map((item, i) => {
            return <BlogCard key={i} item={item}></BlogCard>;
          })}
      </div>
    </section>
  );
}

export default Blogs;
