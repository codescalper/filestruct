"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { generateAsciiTree, TreeNode } from "@/lib/fileTree";
import { useRouter } from "next/navigation";
import { useTreeStruct } from "@/state/tree-structure";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

interface GitHubItem {
  path: string;
  type: string;
}

const Form = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [repourl, setRepourl] = useState<string>("");
  const { setTreeStruct, treeStruct } = useTreeStruct();

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
    if (!match) {
      throw new Error("Invalid GitHub repository URL");
      toast({
        variant: "destructive",
        title: "Invalid GitHub repository URL",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
    return { owner: match[1], repo: match[2] };
  };
  const fetchRepoData = async () => {
    if (repourl) {
      setLoading(true);
      const { owner, repo } = extractOwnerAndRepo(repourl);
      const url = `https://api.github.com/repos/${owner}/${repo}/git/trees/main?recursive=1`;
      try {
        const response = await axios.get<{ tree: GitHubItem[] }>(url);
        const tree = generateTree(repo, response.data.tree);
        setTreeStruct(generateAsciiTree(tree));
        router.push("/generate");
        console.log(treeStruct);
      } catch (error) {
        console.error("Error fetching repository data:", error);
        toast({
          variant: "destructive",
          title: "Invalid or inaccessible repository URL",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      } finally {
        setLoading(false);
      }
    } else {
      toast({
        variant: "destructive",
        title: "Please enter a valid GitHub repository URL",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };
  const handleGenerateButtonClick = (e: React.FormEvent) => {
    e.preventDefault();
    fetchRepoData();
  };

  const router = useRouter();

  return (
    <div>
      <form className="flex space-x-2" onSubmit={handleGenerateButtonClick}>
        <Input
          className="max-w-xl flex-1"
          placeholder="https://github.com/codescalper/threadX"
          type="url"
          onChange={(e) => setRepourl(e.target.value)}
        />
        <Button
          type="submit"
          className={`bg-cyan-400 hover:bg-cyan-950 hover:text-white ${
            loading ? "cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Generating..." : "Generate ⚡"}
        </Button>
      </form>
    </div>
  );
};

export default Form;
