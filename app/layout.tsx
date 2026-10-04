import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// MonoLisa (commercial). Binaries are gitignored: present in app/fonts/
// locally, fetched from a private Vercel Blob store at build time.
const fontMono = localFont({
  src: [
    {
      path: "./fonts/MonoLisa-normal.woff2",
      weight: "1 900",
      style: "normal",
    },
    {
      path: "./fonts/MonoLisa-italic.woff2",
      weight: "1 900",
      style: "italic",
    },
  ],
  variable: "--font-monolisa",
  display: "swap",
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});

export const metadata: Metadata = {
  title: "Hiranmaya Gundu - Software developer",
  description: "Hiranmaya Gundu's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "paper bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col gap-8">
            <header className="flex">
              <Nav />
            </header>
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
