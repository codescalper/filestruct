"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { generateAsciiTree, TreeNode } from "@/lib/fileTree";

interface GitHubItem {
  path: string;
  type: string;
}

const Form = () => {
  const [repourl, setRepourl] = useState<string>("");
  const [asciiTree, setAsciiTree] = useState("");
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

  const extractOwnerAndRepo = (url: string) => {
    const match = url.match(/github.com\/(.+?)\/(.+?)(?:\/|$)/);
    if (!match) throw new Error("Invalid GitHub repository URL");
    return { owner: match[1], repo: match[2] };
  };
  const fetchRepoData = async () => {
    if (repourl) {
      const { owner, repo } = extractOwnerAndRepo(repourl);
      const url = `https://api.github.com/repos/${owner}/${repo}/git/trees/main?recursive=1`;
      try {
        const response = await axios.get<{ tree: GitHubItem[] }>(url);
        const tree = generateTree(repo, response.data.tree);
        setAsciiTree(generateAsciiTree(tree));
        console.log(asciiTree); // log the updated value
      } catch (error) {
        console.error("Error fetching repository data:", error);
        setAsciiTree("Invalid or inaccessible repository URL");
      }
    } else {
      setAsciiTree("Please enter a valid GitHub repository URL");
    }
  };
  const handleGenerateButtonClick = (e: React.FormEvent) => {
    e.preventDefault(); // prevent the default form submission behavior
    fetchRepoData();
  };

  return (
    <div>
      <form className="flex space-x-2" onSubmit={handleGenerateButtonClick}>
        <Input
          className="max-w-lg flex-1"
          placeholder="https://github.com/codescalper/threadX"
          type="url"
          onChange={(e) => setRepourl(e.target.value)}
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
