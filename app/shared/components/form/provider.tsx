import * as React from "react";
import {
  FormProvider as FormProviderPrimitive,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";

interface FormProviderProps<T extends FieldValues> extends UseFormReturn<T> {
  children: React.ReactNode;
}
export const FormProvider = <T extends FieldValues>({
  children,
  ...props
}: FormProviderProps<T>) => {
  return <FormProviderPrimitive {...props}>{children}</FormProviderPrimitive>;
};
