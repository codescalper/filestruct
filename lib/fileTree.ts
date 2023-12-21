export interface TreeNode {
  label: string;
  nodes: TreeNode[];
}

export const generateAsciiTree = (treeData: TreeNode): string => {
  //This is the function that generates the tree structure from the tree data
  const lines: string[] = [];
  const traverse = (node: TreeNode, prefix = "", nextPrefix = "") => {
    lines.push(prefix + node.label);
    const isLastChild = (index: number) => index === node.nodes.length - 1;
    node.nodes.forEach((childNode, index) => {
      const childPrefix = isLastChild(index) ? "└─ " : "├─ "; //This is the prefix that is used to draw the tree structure
      const nextChildPrefix = isLastChild(index) ? "   " : "│  "; //This is the prefix that is used to draw the tree structure
      traverse(
        //This is the recursive call to traverse the tree
        childNode,
        nextPrefix + childPrefix,
        nextPrefix + nextChildPrefix
      );
    });
  };
  traverse(treeData);
  return lines.join("\n");
};
