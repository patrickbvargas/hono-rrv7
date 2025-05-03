import {
  RadioGroup,
  Radio as RadioPrimitive,
  type RadioGroupProps,
} from "@heroui/react";
import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

interface RootProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<RadioGroupProps, "name" | "defaultValue"> {}
const Root = <T extends FieldValues>({ name, ...props }: RootProps<T>) => {
  const { field, fieldState } = useController<T>({ name });

  return (
    <RadioGroup
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

const Radio = RadioPrimitive;

export const FormRadioGroup = {
  Root,
  Radio,
};
