export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="max-w-[800px] mx-auto px-4">{children}</main>;
}
