"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const router = useRouter();

  return (
    <div
      className={`flex justify-between m-4 sticky top-0 bg-white backdrop-blur-xl bg-opacity-50 sm:pb-3 md:pb-4 xl:pb-5 dark:bg-transparent dark:bg-opacity-50 z-50`}
    >
      <Link legacyBehavior href="/" onClick={() => router.push("/")}>
        <div className="text-xl font-bold sm:text-2xl xl:text-3xl cursor-pointer">
          filestruct.
        </div>
      </Link>
    </div>
  );
}
