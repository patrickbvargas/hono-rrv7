import {
  Controller,
  useFormContext,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import { Calendar, type CalendarProps } from "@heroui/react";

interface FormCalendarProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<CalendarProps, "name" | "defaultValue"> {}
export const FormCalendar = <T extends FieldValues>({
  name,
  ...props
}: FormCalendarProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Calendar
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          isInvalid={fieldState.invalid}
          errorMessage={fieldState.error?.message}
          {...props}
        />
      )}
    />
  );
};
