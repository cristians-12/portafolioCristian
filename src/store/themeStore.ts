import { create } from "zustand";

interface Theme {
  theme: "light" | "dark";
  setTheme: (theme: "dark" | "light") => void;
}

const useThemeStore = create<Theme>((set) => ({
  theme: "dark",
  setTheme: (newTheme) => set({ theme: newTheme }),
}));

export default useThemeStore;
