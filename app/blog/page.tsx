import type { Metadata } from "next";
import { readPosts } from "@/lib/read-posts";
import { format, parse } from "date-fns";

export const metadata: Metadata = {
  title: "Hi I'm Hiranmaya Gundu 👋",
  description: "Hi! I'm Hiranmaya Gundu, and this is my personal weblog.",
};

export default async function Page() {
  const posts = await readPosts();
  return (
    <main className="max-w-[800px] mx-auto">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold leading-tight text-foreground">
          Blog
        </h1>
        <div className="flex flex-col gap-16">
          {posts.map((post) => (
            <div key={post.metadata.title} className="flex flex-col gap-4">
              <a href={`posts/${post.slug}`}>
                <h3 className="text-2xl font-bold leading-tight underline underline-offset-2">
                  {post.metadata.title}
                </h3>
                <time className="font-medium">
                  {format(
                    parse(post.metadata.publishedAt, "yyyy-MM-dd", new Date()),
                    "MMMM dd, yyyy",
                  )}
                </time>
              </a>
              <p className="text-lg font-medium leading-normal ">
                {post.metadata.summary}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
