import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import { Input, type InputProps } from "@heroui/react";

interface FormInputProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<InputProps, "name" | "defaultValue"> {}
export const FormInput = <T extends FieldValues>({
  name,
  ...props
}: FormInputProps<T>) => {
  const { field, fieldState } = useController<T>({ name });

  return (
    <Input
      ref={field.ref}
      name={field.name}
      value={field.value}
      onValueChange={field.onChange}
      onBlur={field.onBlur}
      isInvalid={fieldState.invalid}
      errorMessage={fieldState.error?.message}
      {...props}
    />
  );
};
