import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import { DatePicker, type DatePickerProps } from "@heroui/react";

interface FormDatePickerProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<DatePickerProps, "name" | "defaultValue"> {}
export const FormDatePicker = <T extends FieldValues>({
  name,
  ...props
}: FormDatePickerProps<T>) => {
  const { field, fieldState } = useController<T>({ name });

  return (
    <DatePicker
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
