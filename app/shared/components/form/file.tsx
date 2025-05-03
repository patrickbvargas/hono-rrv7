import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import { Input, type InputProps } from "@heroui/react";

interface FormFileProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<InputProps, "name" | "defaultValue"> {}
export const FormFile = <T extends FieldValues>({
  name,
  type = "file",
  ...props
}: FormFileProps<T>) => {
  const { field, fieldState } = useController<T>({ name });

  return (
    <Input
      type={type}
      ref={field.ref}
      name={field.name}
      onChange={(v) => v.target.files && field.onChange(v.target.files[0])}
      onBlur={field.onBlur}
      isInvalid={fieldState.invalid}
      errorMessage={fieldState.error?.message}
      {...props}
    />
  );
};
