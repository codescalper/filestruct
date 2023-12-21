"use client";
import axios from "axios";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { generateAsciiTree, TreeNode } from "@/lib/fileTree";

interface GitHubItem {
  path: string;
  type: string;
}
const Form = () => {
  const [url, setUrl] = useState<string>("");
  //   console.log(url);

  const generateTree = (repoName: string, items: GitHubItem[]) => {
    const treeData: TreeNode = {
      label: repoName + "/",
      nodes: [],
    };

    const traverse = (currentPath: string, nodes: TreeNode[]) => {
      items
        .filter(
          (item) =>
            item.path.startsWith(currentPath) &&
            item.path.slice(currentPath.length + 1).indexOf("/") === -1
        )
        .forEach((item) => {
          const name = item.path.split("/").pop() || "";
          const newNode: TreeNode = {
            label: item.type === "tree" ? name + "/" : name,
            nodes: [],
          };
          nodes.push(newNode);
          if (item.type === "tree") {
            traverse(item.path + "/", newNode.nodes);
          }
        });
    };

    traverse("", treeData.nodes);
    return treeData;
  };

  return (
    <div>
      <form className="flex space-x-2">
        <Input
          className="max-w-lg flex-1"
          placeholder="https://github.com/codescalper/threadX"
          type="email"
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          type="submit"
          className="bg-cyan-400  hover:bg-cyan-950 hover:text-white"
        >
          Generate ⚡
        </Button>
      </form>
    </div>
  );
};

export default Form;
