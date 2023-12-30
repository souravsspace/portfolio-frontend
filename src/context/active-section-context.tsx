"use client";

import { type links } from "@/constant";
import {
  createContext,
  useState,
  useContext,
  type PropsWithChildren,
} from "react";

type NavLinksType = (typeof links)[number]["name"];

type ActiveSectionContextType = {
  activeSection: NavLinksType;
  setActiveSection: React.Dispatch<React.SetStateAction<NavLinksType>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionContextProvider",
    );
  }
  return context;
}

export default function ActiveSectionContextProvider({
  children,
}: PropsWithChildren) {
  const [activeSection, setActiveSection] = useState<NavLinksType>("Home");

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
