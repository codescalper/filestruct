import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Link from "next/link";

export default function Component() {
  return (
    <>
      <section className="w-full py-48 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute w-72 sm:h-44 top-0 sm:top-[1px] scale-150 right-0 sm:right-56 transform-gpu overflow-hidden blur-3xl opacity-50"
              >
                <div className="relative">
                  <div className="rounded-full sm:h-36 w-full bg-blue-200 dark:bg-purple-800"></div>
                  <div className="absolute top-24 left-0 sm:left-24 rounded-full sm:h-36 w-full bg-cyan-400 dark:bg-blue-400"></div>
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Generate{" "}
                <span className="text-gradient">Markdown File Tree</span> from
                GitHub Repository
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl  dark:text-gray-400">
                Enter a GitHub repository URL and get the file structure of the
                project in markdown format.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="https://github.com/codescalper/threadX"
                  type="email"
                />
                <Button
                  type="submit"
                  className="bg-cyan-400  hover:bg-cyan-950 hover:text-white"
                >
                  Generate ⚡
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="bottom-0 xl:block w-full border-t border-gray-700 border-opacity-50 dark:border-opacity-20 mt-16">
        <div className="mx-auto sm:max-w-7xl text-center py-5 px-6 sm:px-0">
          <div className="text-gray-500 dark:text-white/80 text-base sm:text-lg">
            Built by{" "}
            <a
              href="https://twitter.com/mayanks_tw"
              rel="noopener"
              target="_blank"
              className="underline underline-offset-4"
            >
              mayank
            </a>{" "}
            deployed on{" "}
            <a
              href="https://vercel.com"
              rel="noopener"
              target="_blank"
              className="underline underline-offset-4"
            >
              vercel
            </a>
            <div className="flex  items-center justify-center p-3 xl:p-4  dark:text-gray-500 hover:dark:text-white/80 space-x-2 xl:space-x-4">
              <FaGithub />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
