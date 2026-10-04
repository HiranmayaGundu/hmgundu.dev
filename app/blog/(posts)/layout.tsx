export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <article className="max-w-[58em] bg-secondary-background mx-auto rounded-lg px-4 sm:px-16 py-8 box-border">
        {children}
      </article>
    </main>
  );
}
