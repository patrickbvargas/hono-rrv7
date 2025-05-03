import * as React from "react";
import { cn, ScrollShadow, type ScrollShadowProps } from "@heroui/react";

function Wrapper({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "size-full grid grid-rows-[auto_1fr_auto] gap-3",
        className,
      )}
      {...props}
    />
  );
}

function WrapperHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex justify-between items-center gap-3", className)}
      {...props}
    />
  );
}

function WrapperContent({ className, ...props }: ScrollShadowProps) {
  return (
    <ScrollShadow
      visibility="bottom"
      className={cn("flex flex-col gap-3 overflow-scroll", className)}
      {...props}
    />
  );
}

function WrapperFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex justify-end items-center gap-3", className)}
      {...props}
    />
  );
}

export { Wrapper, WrapperHeader, WrapperContent, WrapperFooter };
