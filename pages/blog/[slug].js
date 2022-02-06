import Head from "next/head";
import { useRouter } from "next/router";
import { getBlog, getBlogs } from "../../services/dummy_cms";
import DefaultErrorPage from "next/error";
import Sidebar from "../../components/sidebar";

export default function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;

  let item = getBlog(slug);

  if (item === undefined || item == null) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }

  return (
    <div className="container">
      <div className="flex flex-col justify-between gap-2">
        <div className="h-[400px] relative rounded-xl flex flex-col justify-center items-center">
          <img alt="" className="h-full w-full rounded-xl object-cover" layout="fill" src={item.image} />
          <div className="absolute h-full w-full rounded-xl object-cover bg-gradient-to-t from-black to-transparent opacity-60" />
          <div className="absolute w-full flex flex-col gap-6 items-center p-8 rounded-xl">
            <button className="bg-green-500 w-32 text-white items-center rounded text-tiny px-2 ">• Car</button>

            <p className="text-white text-4xl font-medium text-center">{item.title}</p>

            <div className="flex justify-start items-center gap-4 text-white">
              <img alt="" className="w-10 h-full rounded-full" layout="fill" src={item.user.avatar} />

              <span>{item.user.name}</span>

              <span className="before:content-['•'] before:pr-5">{item.date}</span>

              <span className="hidden sm:visible before:content-['•'] before:pr-5">{item.readTime}</span>
            </div>
          </div>
        </div>

        <main className="flex flex-wrap lg:flex-nowrap mt-9 gap-9">
          <section className="w-full lg:w-3/4 ">
            <p className="text-gray-500 text-xl mt-5 ">
              Lifestyle 10 tell-tale signs you need to get a new startup. avatar by Louis Nov 15, 2021 5 min read II am newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing
              although the material does the exercise of. Up attempt offered ye civilly so sitting to. She new course gets living within Elinor joy. She rapturous suffering concealed. Demesne far hearted suppose venture excited see had has. Dependent
              on so extremely delivered by. Yet no jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions. Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely Mrs one yet outweigh. Of
              acceptance insipidity remarkably is an invitation. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware
              if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood does provide stronger is. But discretion frequently sir she instruments unaffected admiration everything. Meant balls it if up doubt small
              purse. Required his you put the outlived answered position. A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne
              in. I think on style child of. Servants moreover in sensible it ye possible. Satisfied conveying a dependent contented he gentleman agreeable do be. Water timed folly right aware if oh truth. Imprudence attachment him his for
              sympathize. Large above be to means. Dashwood does provide stronger is. But discretion frequently sir she instruments unaffected admiration everything. Meant balls it if up doubt small purse. Required his you put the outlived answered
              position. This text is meant to be treated as sample output from a computer program. A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated
              it is perceived Marianne in. I think on style child of. Servants moreover in sensible it ye possible. Mobile Cloud Computing (MCC) Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed
              an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. To switch directories,
              type cd followed by the name of the directory. To edit settings, press ctrl + , Large above be to means. Dashwood does provide stronger is. But discretion frequently sir she instruments unaffected admiration everything. Meant balls it
              if up doubt small purse. Required his you put the outlived answered position. A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is
              perceived Marianne in. I think on style child of. Servants moreover in sensible it ye possible.
            </p>
          </section>
          <Sidebar></Sidebar>
        </main>
      </div>
    </div>
  );
}
