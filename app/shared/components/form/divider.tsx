import { cn, Divider, type DividerProps } from "@heroui/react";

export const FormDivider = ({ className, ...props }: DividerProps) => {
  return (
    <Divider className={cn("w-5 hidden md:block", className)} {...props} />
  );
};
