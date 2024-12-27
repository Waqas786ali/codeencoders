// src/contexts/AppContext.tsx
import React, { useEffect,createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your context data
interface AppContextType {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  isNavbarHovered: boolean;
  setIsNavbarHovered: (value: boolean) => void;
  IsDesktop: boolean;
}

// Create the context with a default value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isNavbarHovered, setIsNavbarHovered] = useState<boolean>(false);
  const [IsDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1000);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppContext.Provider value={{ isLoading, setIsLoading, isNavbarHovered, setIsNavbarHovered, IsDesktop }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for consuming the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
