export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <article className="max-w-[58em] bg-secondary-background mx-auto rounded-lg px-16 py-8 box-border shadow shadow-current/50">
        {children}
      </article>
    </main>
  );
}
