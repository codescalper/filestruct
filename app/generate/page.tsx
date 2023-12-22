import React from "react";
import ProjectSturct from "@/components/ProjectStruct";

const page = () => {
  return (
    <>
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center mt-20 lg:mt-10 md:mt-10">
        Project Structure of your
        <span className="text-gradient"> repository</span>
      </h1>
      <div className=" lg:flex justify-center relative w-full">
        <ProjectSturct />
      </div>
    </>
  );
};

export default page;
