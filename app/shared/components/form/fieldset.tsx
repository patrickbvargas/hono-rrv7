import { cn } from "@heroui/react";

export const FormFieldset = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLFieldSetElement>) => {
  return (
    <fieldset
      className={cn("flex flex-col gap-2 md:grid md:grid-cols-10", className)}
      {...props}
    />
  );
};
