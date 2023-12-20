export type Tree = {
  path: string;
  mode?: string;
  type: TypeFile;
  sha?: string;
  size?: number;
  url?: string;
};

export enum TypeFile {
  Blob = "blob",
  Tree = "tree",
}
