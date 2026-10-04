export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <article className="paper max-w-[58em] bg-secondary-background mx-auto rounded-lg px-4 sm:px-16 py-8 box-border shadow-sm shadow-current/50">
        {children}
      </article>
    </main>
  );
}
