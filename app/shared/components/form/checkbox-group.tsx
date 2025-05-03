import {
  CheckboxGroup,
  Checkbox as CheckboxPrimitive,
  type CheckboxGroupProps,
} from "@heroui/react";
import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

interface RootProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<CheckboxGroupProps, "name" | "defaultValue"> {}
const Root = <T extends FieldValues>({ name, ...props }: RootProps<T>) => {
  const { field, fieldState } = useController<T>({ name });

  return (
    <CheckboxGroup
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

const Checkbox = CheckboxPrimitive;

export const FormCheckboxGroup = {
  Root,
  Checkbox,
};
