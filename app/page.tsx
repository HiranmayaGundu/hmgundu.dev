import Gonds from "@/components/gonds";
import SecondarySectionDivider from "@/components/secondary-section-divider";
import SectionDivider from "@/components/section-divider";
import type { Metadata } from "next";
import { readPosts } from "@/lib/read-posts";
import { Link } from "@/components/ui/link";

export const metadata: Metadata = {
  title: "Hi I'm Hiranmaya Gundu 👋",
  description: "Hi! I'm Hiranmaya Gundu, and this is my personal weblog.",
};

export default async function Page() {
  const posts = await readPosts();
  return (
    <main>
      <section className="max-w-[800px] mx-auto">
        <div className="grid sm:grid-cols-2">
          <div className="self-center place-self-center">
            <h1 className="text-5xl font-bold leading-tight text-foreground">
              Hi! I&apos;m <br />{" "}
              <span className="bg-icon-shirt-primary">Hiranmaya Gundu</span>.{" "}
              <div className="inline-block motion-safe:animate-[shake_3s_ease-in-out] motion-safe:hover:animate-shake motion-safe:hover:ease-in-out motion-safe:hover:repeat-infinite">
                👋
              </div>
            </h1>
          </div>
          <div className="hidden sm:block absolute z-1 top-[5px] left-[50%]">
            <Gonds />
          </div>
        </div>
      </section>
      <div className="relative w-full pt-8 z-[100]">
        <SectionDivider />
      </div>
      <div className="bg-secondary-background">
        <section className="mx-auto max-w-[800px] py-8 ">
          <p className="text-2xl font-medium leading-normal max-w-[800px] mx-auto">
            I&apos;m a Software Engineer at{" "}
            <Link href="https://www.sigmacomputing.com/">Sigma Computing</Link>,
            working on building a better business intelligence tool. This
            website is my personal blog, where I write about software
            development, testing, Kubernetes and anything else I find
            interesting in the field of software! <br /> <br />
            You can follow me on{" "}
            <Link href="https://twitter.com/hiranmayagundu">Twitter</Link>.
          </p>
        </section>
      </div>
      <SecondarySectionDivider />
      <section className="mx-auto max-w-[800px] pb-8">
        <h2 className="text-3xl font-bold leading-tight py-8">
          Recently Published
        </h2>
        <div className="flex flex-col gap-16">
          {posts.slice(0, 3).map((post) => (
            <a href={`posts/${post.slug}`} key={post.metadata.title}>
              <h3 className="text-2xl font-bold leading-tight underline underline-offset-2">
                {post.metadata.title}
              </h3>
              <p className="text-lg font-medium leading-normal max-w-[750px] ">
                {post.metadata.summary}
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
