import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

import { incident001 } from "../../data/projects/incident001";

type ProjectContextType = {
  currentProject: typeof incident001;
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <ProjectContext.Provider
      value={{
        currentProject: incident001,
        currentSlide,
        setCurrentSlide,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error("useProject must be used inside ProjectProvider");
  }

  return context;
}