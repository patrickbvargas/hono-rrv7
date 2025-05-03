import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import { Textarea, type TextAreaProps } from "@heroui/react";

interface FormTextAreaProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<TextAreaProps, "name" | "defaultValue"> {}
export const FormTextArea = <T extends FieldValues>({
  name,
  ...props
}: FormTextAreaProps<T>) => {
  const { field, fieldState } = useController<T>({ name });

  return (
    <Textarea
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
