import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { LinkTooltip } from "./link-tooltip";

export function Footer() {
  return (
    <div className="flex flex-col gap-4 bg-secondary-background">
      <DesktopFooter />
      <MobileFooter />
    </div>
  );
}

function DesktopFooter() {
  return (
    <footer className="hidden sm:block py-8">
      <div className="mx-auto grid max-w-200 grid-cols-2 gap-16 px-4">
        <div className="flex flex-1 flex-col gap-4 max-w-80 place-self-start">
          <h3 className="font-bold text-xl">About this website</h3>
          <p className="font-medium">
            I&apos;m Hiranmaya Gundu, a dev exploring web and systems
            programming. This is my personal blog!
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-4 max-w-80 place-self-end">
          <h3 className="font-bold text-xl">Social Media</h3>
          <div className="flex gap-2">
            <GitHubLogoIcon width={24} height={24} />
            <LinkTooltip
              href="https://github.com/HiranmayaGundu/hmgundu.dev"
              rel="me noopener"
            >
              View the source on GitHub
            </LinkTooltip>
          </div>
          <div className="flex gap-2">
            <TwitterLogoIcon width={24} height={24} />
            <LinkTooltip
              href="https://twitter.com/hiranmayagundu"
              rel="me noopener"
            >
              Follow me on twitter
            </LinkTooltip>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobileFooter() {
  return (
    <footer className="sm:hidden px-4 py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">About this website</h3>
          <p className="font-medium">
            I&apos;m Hiranmaya Gundu, a dev exploring web and systems
            programming. This is my personal blog!
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">Social Media</h3>
          <div className="flex gap-2">
            <GitHubLogoIcon width={24} height={24} />
            <LinkTooltip
              href="https://github.com/HiranmayaGundu/hmgundu.dev"
              rel="me noopener"
            >
              View the source on GitHub
            </LinkTooltip>
          </div>
          <div className="flex gap-2">
            <TwitterLogoIcon width={24} height={24} />
            <LinkTooltip
              href="https://twitter.com/hiranmayagundu"
              rel="me noopener"
            >
              Follow me on twitter
            </LinkTooltip>
          </div>
        </div>
      </div>
    </footer>
  );
}
