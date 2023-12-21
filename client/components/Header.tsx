"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const router = useRouter();
  const { setTheme, theme, resolvedTheme } = useTheme();

  // Determine the theme to use based on the user's system preference
  const selectedTheme = resolvedTheme || theme;

  return (
    <div
      className={`flex justify-between m-4 sticky top-0 bg-white backdrop-blur-md bg-opacity-50 sm:pb-3 md:pb-4 xl:pb-5 dark:bg-black dark:bg-opacity-50 z-50`}
    >
      <Link legacyBehavior href="/" onClick={() => router.push("/")}>
        <div className="text-xl font-bold sm:text-2xl xl:text-3xl cursor-pointer">
          MHT-CET Counselling
        </div>
      </Link>
      <div className="flex items-center cursor-pointer  ">
        <Link href="/" legacyBehavior onClick={() => router.push("/")}>
          <a
            className={`mx-2 ${
              selectedTheme === "light"
                ? "text-link-light hover:text-black"
                : "text-link-dark hover:text-white"
            }`}
          >
            About Us
          </a>
        </Link>
        <Link href="/" legacyBehavior onClick={() => router.push("/")}>
          <a
            className={`mx-2 ${
              selectedTheme === "light"
                ? "text-link-light hover:text-black"
                : "text-link-dark hover:text-white"
            }`}
          >
            Testimonials
          </a>
        </Link>
        <Link href="/" legacyBehavior onClick={() => router.push("/")}>
          <a
            className={`mx-2 ${
              selectedTheme === "light"
                ? "text-link-light hover:text-black"
                : "text-link-dark hover:text-white"
            }`}
          >
            Pricing
          </a>
        </Link>
        <Link href="/" legacyBehavior onClick={() => router.push("/")}>
          <a
            className={`mx-2 ${
              selectedTheme === "light"
                ? "text-link-light hover:text-black"
                : "text-link-dark hover:text-white"
            }`}
          >
            Youtube
          </a>
        </Link>
      </div>
    </div>
  );
}
