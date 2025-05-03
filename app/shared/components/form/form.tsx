import * as React from "react";
import {
  FormProvider,
  type FieldValues,
  type SubmitHandler,
  type UseFormReturn,
} from "react-hook-form";

interface FormProps<T extends FieldValues> extends UseFormReturn<T> {
  submitCallback: SubmitHandler<T>;
  children: React.ReactNode;
  className?: string;
}
export const Form = <T extends FieldValues>({
  children,
  className,
  submitCallback,
  handleSubmit,
  ...props
}: FormProps<T>) => {
  return (
    <FormProvider handleSubmit={handleSubmit} {...props}>
      <form className={className} onSubmit={handleSubmit(submitCallback)}>
        {children}
      </form>
    </FormProvider>
  );
};
