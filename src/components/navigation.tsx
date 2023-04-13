import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="max-w=[12rem] sticky top-0 m-0 border-l border-separator p-4 grid-in-nav">
      <div className="border-b border-separator">
        <Link href="/account" title="Sign‑in for an online account.">
          <Image src="/images/sign-in.svg" alt="" height={72} width={72} />
          <span>Sign-In</span>
        </Link>
      </div>
    </nav>
  );
}
