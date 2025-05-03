import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import { Checkbox, type CheckboxProps } from "@heroui/react";

interface FormCheckboxProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<CheckboxProps, "name"> {}
export const FormCheckbox = <T extends FieldValues>({
  name,
  ...props
}: FormCheckboxProps<T>) => {
  const { field, fieldState } = useController<T>({ name });

  return (
    <Checkbox
      ref={field.ref}
      name={field.name}
      isSelected={field.value}
      onValueChange={field.onChange}
      onBlur={field.onBlur}
      isInvalid={fieldState.invalid}
      {...props}
    />
  );
};
