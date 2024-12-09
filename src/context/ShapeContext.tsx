import React, { createContext, useContext, useState } from "react";

interface ShapeContextType {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const ShapeContext = createContext<ShapeContextType | undefined>(undefined);

export const ShapeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentSection, setCurrentSection] = useState("hero");

  return (
    <ShapeContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </ShapeContext.Provider>
  );
};

export const useShape = () => {
  const context = useContext(ShapeContext);
  if (!context) {
    throw new Error("useShape must be used within a ShapeProvider");
  }
  return context;
};
