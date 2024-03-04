import Gonds from "@/components/gonds";
import SecondarySectionDivider from "@/components/secondary-section-divider";
import SectionDivider from "@/components/section-divider";
import type { Metadata } from "next";
import { readPosts } from "@/lib/read-posts";

export const metadata: Metadata = {
  title: "Hi I'm Hiranmaya Gundu 👋",
  description: "Hi! I'm Hiranmaya Gundu, and this is my personal weblog.",
};

export default async function Page() {
  const posts = await readPosts();
  console.log(posts);
  return (
    <main className="mx-auto">
      <div className="grid sm:grid-cols-2 max-w-[800px] mx-auto">
        <div className="self-center place-self-center">
          <h1 className="text-5xl font-bold leading-tight">
            Hi! I&apos;m <br /> <span>Hiranmaya Gundu</span>.{" "}
            <div className="inline-block motion-safe:animate-[shake_3s_ease-in-out] motion-safe:hover:animate-shake motion-safe:hover:ease-in-out motion-safe:hover:repeat-infinite">
              👋
            </div>
          </h1>
        </div>
        <div className="absolute z-[5] top-[5px] left-[50%]">
          <Gonds />
        </div>
      </div>
      <div className="w-full py-8">
        <SectionDivider />
      </div>
      <section className="mx-auto p-8">
        <p className="text-2xl leading-normal max-w-[750px] mx-auto">
          I&apos;m a Software Engineer at{" "}
          <a href="https://www.sigmacomputing.com/">Sigma Computing</a>, working
          on building a better business intelligence tool. This website is my
          personal blog, where I write about software development, testing,
          Kubernetes and anything else I find interesting in the field of
          software! <br /> <br />
          You can follow me on{" "}
          <a href="https://twitter.com/hiranmayagundu">Twitter</a>.
        </p>
      </section>
      <SecondarySectionDivider />
      <section className="mx-auto p-8">
        <div className="grid grid-cols-1 w-full p-8 items-center justify-center gap-8 mx-auto">
          <h2 className="text-3xl font-bold leading-tight mx-auto">
            Recently Published
          </h2>
          {posts.slice(0, 3).map((post) => (
            <div key={post.slug} className="flex flex-col w-full items-center">
              <h3 className="text-2xl font-bold leading-tight">
                {post.metadata.title}
              </h3>
              <p className="text-lg leading-normal max-w-[750px] mx-auto">
                {post.metadata.summary}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
