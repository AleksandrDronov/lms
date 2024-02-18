import { create } from "zustand";

export const useSearchStore = create<{
  value: string;
  setValue: (value: string) => void;
}>((set) => ({
  value: "",
  setValue: (value) => set({ value: value }),
}));
