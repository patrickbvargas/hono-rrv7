import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import { Switch, type SwitchProps } from "@heroui/react";

interface FormSwitchProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<SwitchProps, "name"> {}
export const FormSwitch = <T extends FieldValues>({
  name,
  ...props
}: FormSwitchProps<T>) => {
  const { field } = useController<T>({ name });

  return (
    <Switch
      ref={field.ref}
      name={field.name}
      isSelected={field.value}
      onValueChange={field.onChange}
      onBlur={field.onBlur}
      {...props}
    />
  );
};
