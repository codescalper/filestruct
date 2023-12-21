import React from "react";
import ProjectSturct from "@/components/ProjectStruct";

const page = () => {
  return (
    <>
      <div className="flex text-6xl font-bold justify-center mt-30 lg:mt-10 md:mt-10">
        Project Structure of your
        <span className="text-gradient"> &nbsp; repository</span>
      </div>
      <div className="hidden lg:flex justify-center relative w-full">
        <ProjectSturct />
      </div>
    </>
  );
};

export default page;
