import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import { Slider, type SliderProps } from "@heroui/react";

interface FormSliderProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<SliderProps, "name" | "defaultValue"> {}
export const FormSlider = <T extends FieldValues>({
  name,
  ...props
}: FormSliderProps<T>) => {
  const { field, fieldState } = useController<T>({ name });

  return (
    <Slider
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
