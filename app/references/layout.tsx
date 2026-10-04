export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="max-w-200 mx-auto px-4">{children}</main>;
}
