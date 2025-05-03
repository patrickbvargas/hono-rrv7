import * as React from "react";
import { HeroUIProvider } from "@heroui/react";

interface ProvidersProps {
  children: React.ReactNode;
}
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <HeroUIProvider labelPlacement="outside" validationBehavior="aria">
      {children}
    </HeroUIProvider>
  );
};
