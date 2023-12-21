"use client";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Button } from "./ui/button";
import { IoCopyOutline } from "react-icons/io5";
import { useToast } from "./ui/use-toast";
import { useTreeStruct } from "@/state/tree-structure";

const ProjectStruct = () => {
  const { treeStruct } = useTreeStruct();
  const [copy, setCopy] = useState<boolean>(false);
  const { toast } = useToast();
  const tree: string = `${treeStruct}`;
  return (
    <div className="mt-20 max-w-2xl border shadow-lg shadow-white bg-[#3a] rounded-lg overflow-hidden ">
      <div className="flex justify-between px-4 text-white text-xs items-center bg-gradient-to-b from-black to-cyan-900 ">
        <p className="text-sm"></p>
        <Button
          variant={"outline"}
          className="hover:bg-cyan-900 hover:text-white border border-cyan-700 shadow-sm shadow-cyan-200"
          onClick={() => {
            toast({
              title: "Copied to your clipboard",
              description: "Project tree structure",
            });

            navigator.clipboard.writeText(tree);
            setCopy(true);
          }}
        >
          <IoCopyOutline />
        </Button>
      </div>

      <SyntaxHighlighter
        language="bash"
        customStyle={{
          padding: "25px",
          backgroundColor: "#09090b",
          color: "white",
        }}
        wrapLongLines={true}
      >
        {tree}
      </SyntaxHighlighter>
    </div>
  );
};

export default ProjectStruct;
