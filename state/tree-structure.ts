import { create } from "zustand";

interface treeState {
  treeStruct: string;
  setTreeStruct: (treeStruct: string) => void;
}
export const useTreeStruct = create<treeState>()((set) => ({
  treeStruct: "",
  setTreeStruct: (treeStruct: string) => set({ treeStruct }),
}));
