"use client";

import { type NavLinksType } from "@/types";
import {
  createContext,
  useState,
  useContext,
  type PropsWithChildren,
} from "react";

type ActiveSectionContextType = {
  activeSection: NavLinksType;
  timeOfListClick: number;
  setTimeOfListClick: React.Dispatch<React.SetStateAction<number>>;
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
  const [timeOfListClick, setTimeOfListClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfListClick,
        setTimeOfListClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
