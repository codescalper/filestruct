import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Link from "next/link";
import Footer from "@/components/Footer";
import Form from "@/components/Form";

export default function Component() {
  return (
    <>
      <section className="w-full py-48 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div
                aria-hidden="true"
                className="pointer-events-none hidden sm:block absolute w-72 sm:h-44 top-0 sm:top-[1px] scale-150 right-0 sm:right-56 transform-gpu overflow-hidden blur-3xl opacity-50"
              >
                <div className="relative">
                  <div className="rounded-full sm:h-36 w-full bg-blue-200 dark:bg-purple-800"></div>
                  <div className="absolute top-24 left-0 sm:left-24 rounded-full sm:h-36 w-full bg-cyan-400 dark:bg-blue-400"></div>
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Generate <span className="text-gradient">Ascii File Tree</span>{" "}
                from GitHub Repository
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl  dark:text-gray-400">
                Enter a GitHub repository URL and get the file structure of the
                project in markdown format.
              </p>
            </div>

            <div className="w-full max-w-sm space-y-2">
              <div
                aria-hidden="true"
                className="absolute overflow-hidden pointer-events-none top-[50%] left-5 opacity-50 backdrop-blur blur-3xl"
              >
                <div className="rounded-full h-20 w-20 sm:h-52 dark:h-44 sm:w-52 dark:bg-sky-500"></div>
              </div>
              <Form />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
