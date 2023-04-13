import Nav from "~/components/navigation";
import { cn } from "~/utils/cn";
import type { PropsWithChildren } from "react";

export default function Layout({
  className,
  ...props
}: PropsWithChildren<{ className?: string }>) {
  return (
    <>
      <div
        className={cn(
          "grid h-screen w-screen grid-cols-layout grid-rows-layout grid-areas-layout",
          className
        )}
      >
        <main className="grid-in-main" {...props} />
        <Nav />
        <div className="m-0 flex justify-center border-b border-separator p-4 grid-in-topbar" />
        <div className="m-0 flex justify-center border-r border-separator p-4 grid-in-sidebar" />
      </div>
    </>
  );
}
