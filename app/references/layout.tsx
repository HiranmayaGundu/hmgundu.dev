export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="max-w-[800px] mx-auto">{children}</main>;
}
