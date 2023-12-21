import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "./ui/button";

const ProjectStruct = () => {
  const tree: string = "(num) => num + 1";
  return (
    <div className="mt-20 max-w-2xl min-w-[25rem] bg-[#3a] rounded-lg overflow-hidden ">
      <div className="flex justify-between px-4 text-white text-xs items-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-800 via-blue-950 to-black">
        <p className="text-sm">Hello</p>
        <Button variant={"ghost"}>Copy</Button>
      </div>
      <SyntaxHighlighter
        language="bash"
        customStyle={{ padding: "25px" }}
        style={docco}
        wrapLongLines={true}
      >
        {tree}
      </SyntaxHighlighter>
    </div>
  );
};

export default ProjectStruct;
