import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import { DateInput, type DateInputProps } from "@heroui/react";

interface FormDateProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<DateInputProps, "name" | "defaultValue"> {}
export const FormDate = <T extends FieldValues>({
  name,
  ...props
}: FormDateProps<T>) => {
  const { field, fieldState } = useController<T>({ name });

  return (
    <DateInput
      ref={field.ref}
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      isInvalid={fieldState.invalid}
      errorMessage={fieldState.error?.message}
      {...props}
    />
  );
};
