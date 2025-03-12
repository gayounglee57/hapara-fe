import Image from "next/image";
import cn from "classnames";

export default function Home() {
  return (
    <div
      className={cn(
        "grid min-h-screen",
        "grid-rows-[20px_1fr_20px]",
        "items-center justify-items-center",
        "gap-16",
        "p-8 pb-20 sm:p-20",
        "font-[family-name:var(--font-geist-sans)]"
      )}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/hapara-logo.png"
          alt="Hapara logo"
          width={180}
          height={38}
          priority
        />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className={cn(
              "rounded-full border border-solid border-transparent",
              "transition-colors",
              "flex items-center justify-center gap-2",
              "bg-foreground text-background",
              "hover:bg-[#383838] dark:hover:bg-[#ccc]",
              "font-medium",
              "text-sm sm:text-base",
              "h-10 sm:h-12",
              "px-4 sm:px-5",
              "sm:w-auto"
            )}
            href="/dashboard"
            rel="noopener noreferrer"
          >
            Go to dashboard
          </a>
        </div>
      </main>
    </div>
  );
}
