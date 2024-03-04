import { Twitter, Github } from "lucide-react";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <Separator />
        <footer className="p-4 grid sm:grid-cols-2 gap-16 place-content-center">
          <div className="flex flex-1 flex-col gap-4 max-w-80 place-self-end">
            <h3 className="font-bold text-xl">About this website</h3>
            <p>
              I&apos;m Hiranmaya Gundu, a dev exploring web and systems
              programming. This is my personal blog!
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-4 max-w-80 place-self-start">
            <h3 className="font-bold text-xl">Social Media</h3>
            <div className="flex gap-2">
              <Github />
              <a
                href="https://github.com/HiranmayaGundu/hmgundu.dev"
                rel="me noopener"
              >
                View the source on GitHub
              </a>
            </div>
            <div className="flex gap-2">
              <Twitter />
              <a href="https://twitter.com/hiranmayagundu" rel="me noopener">
                Follow me on twitter
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
