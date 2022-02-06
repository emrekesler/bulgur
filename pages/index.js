import Blogs from "../components/blogs";
import Headline from "../components/headline";
import Sidebar from "../components/sidebar";
import TinySlider from "../components/tiny-slider";

export default function Home() {
  return (
    <div className="container h-full">
      <TinySlider></TinySlider>
      <Headline></Headline>

      <main className="flex flex-wrap lg:flex-nowrap mt-9 gap-9">
        <Blogs></Blogs>
        <Sidebar></Sidebar>
      </main>
    </div>
  );
}
