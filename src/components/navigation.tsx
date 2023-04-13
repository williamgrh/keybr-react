import Link from "next/link";
import {
  FontSizeIcon,
  FullScreenIcon,
  HelpIcon,
  HighScoresIcon,
  LayoutsIcon,
  MultiplayerIcon,
  PracticeIcon,
  ProfileIcon,
  SignInIcon,
  SunMoonIcon,
  TextToolsIcon,
  TypingTestIcon,
} from "~/assets/icons";

export default function Nav() {
  return (
    <nav className="max-w=[12rem] sticky top-0 m-0 border-l border-separator p-4 grid-in-nav">
      <div className="border-b border-separator">
        <Link
          href="/account"
          title="Sign‑in for an online account."
          className="flex flex-col items-center justify-center bg-navlink-background py-4 text-navlink-text hover:bg-navlink-background-current"
        >
          <SignInIcon className="h-16 w-16 fill-icon" />
          <span>Sign-In</span>
        </Link>
      </div>

      <div className="border-b border-separator">
        <div className="flex h-12 items-center justify-center">
          <div className="flex h-12 items-center justify-center">
            <button className="btn-primary">
              <SunMoonIcon className="inline-block h-icon w-icon fill-icon" />
            </button>
            <button className="btn-primary">
              <FontSizeIcon className="inline-block h-icon w-icon fill-icon " />
            </button>
            <button className="btn-primary">
              <FullScreenIcon className="inline-block h-icon w-icon fill-icon " />
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-separator">
        <Link
          href="/"
          title="Practice typing lessons to improve your typing speed."
          className="m-0 flex h-12 items-center justify-start bg-navlink-background px-4 leading-[3rem] text-navlink-text hover:bg-navlink-background-current"
        >
          <PracticeIcon className="inline-block h-icon w-icon fill-icon " />
          <span className="ml-2 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
            Practice
          </span>
        </Link>
      </div>

      <div className="border-b border-separator">
        <Link
          href="/"
          title="See the detailed statistics about your learning progress."
          className="m-0 flex h-12 items-center justify-start bg-navlink-background px-4 leading-[3rem] text-navlink-text hover:bg-navlink-background-current"
        >
          <ProfileIcon className="inline-block h-icon w-icon fill-icon " />
          <span className="ml-2 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
            Profile
          </span>
        </Link>
      </div>

      <div className="border-b border-separator">
        <Link
          href="/"
          title="Take a typing speed test."
          className="m-0 flex h-12 items-center justify-start bg-navlink-background px-4 leading-[3rem] text-navlink-text hover:bg-navlink-background-current"
        >
          <TypingTestIcon className="inline-block h-icon w-icon fill-icon " />
          <span className="ml-2 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
            Typing Test
          </span>
        </Link>
      </div>

      <div className="border-b border-separator">
        <Link
          href="/"
          title="Get the instructions on how to use this application."
          className="m-0 flex h-12 items-center justify-start bg-navlink-background px-4 leading-[3rem] text-navlink-text hover:bg-navlink-background-current"
        >
          <HelpIcon className="inline-block h-icon w-icon fill-icon " />
          <span className="ml-2 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
            Help
          </span>
        </Link>
      </div>

      <div className="border-b border-separator">
        <Link
          href="/"
          title="See the high score table featuring the fastest typists."
          className="m-0 flex h-12 items-center justify-start bg-navlink-background px-4 leading-[3rem] text-navlink-text hover:bg-navlink-background-current"
        >
          <HighScoresIcon className="inline-block h-icon w-icon fill-icon " />
          <span className="ml-2 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
            High Scores
          </span>
        </Link>
      </div>

      <div className="border-b border-separator">
        <Link
          href="/"
          title="Compete against other players in an online multiplayer game."
          className="m-0 flex h-12 items-center justify-start bg-navlink-background px-4 leading-[3rem] text-navlink-text hover:bg-navlink-background-current"
        >
          <MultiplayerIcon className="inline-block h-icon w-icon fill-icon " />
          <span className="ml-2 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
            Multiplayer
          </span>
        </Link>
      </div>

      <div className="border-b border-separator">
        <Link
          href="/"
          title="Compare the efficiency of different keyboard layouts."
          className="m-0 flex h-12 items-center justify-start bg-navlink-background px-4 leading-[3rem] text-navlink-text hover:bg-navlink-background-current"
        >
          <LayoutsIcon className="inline-block h-icon w-icon fill-icon " />
          <span className="ml-2 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
            Layouts
          </span>
        </Link>
      </div>

      <div className="border-b border-separator">
        <Link
          href="/"
          title="Count the characters and words in your text."
          className="m-0 flex h-12 items-center justify-start bg-navlink-background px-4 leading-[3rem] text-navlink-text hover:bg-navlink-background-current"
        >
          <TextToolsIcon className="inline-block h-icon w-icon fill-icon " />
          <span className="ml-2 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
            Text Tools
          </span>
        </Link>
      </div>

      <div className="border-b border-separator">
        <div className="m-0 flex flex-col items-center justify-center py-4 text-center text-[.8rem]">
          <Link
            href="/"
            className="hover:text-text hover:underline hover:decoration-dotted"
          >
            info@keybr.com
          </Link>
          <Link
            href="/"
            className="hover:text-text hover:underline hover:decoration-dotted"
          >
            Discord
          </Link>
          <Link
            href="/"
            className="hover:text-text hover:underline hover:decoration-dotted"
          >
            Google Groups
          </Link>
          <Link
            href="/"
            className="hover:text-text hover:underline hover:decoration-dotted"
          >
            Terms of Service
          </Link>
          <Link
            href="/"
            className="hover:text-text hover:underline hover:decoration-dotted"
          >
            Privacy Policy
          </Link>
          <span>
            <Link
              href="/"
              title="German (Deutsch)"
              className="px-[.1rem] hover:text-text hover:underline hover:decoration-dotted"
            >
              de
            </Link>
            <Link
              href="/"
              className="px-[.1rem] hover:text-text hover:underline hover:decoration-dotted"
            >
              en
            </Link>
            <Link
              href="/"
              className="px-[.1rem] hover:text-text hover:underline hover:decoration-dotted"
            >
              es
            </Link>
            <Link
              href="/"
              className="px-[.1rem] hover:text-text hover:underline hover:decoration-dotted"
            >
              fr
            </Link>
            <Link
              href="/"
              className="px-[.1rem] hover:text-text hover:underline hover:decoration-dotted"
            >
              pl
            </Link>
            <Link
              href="/"
              className="px-[.1rem] hover:text-text hover:underline hover:decoration-dotted"
            >
              ru
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
}
