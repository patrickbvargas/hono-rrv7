import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import {
  Select,
  SelectSection,
  SelectItem,
  type SelectProps,
} from "@heroui/react";

interface RootProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<SelectProps, "name"> {}
const Root = <T extends FieldValues>({ name, ...props }: RootProps<T>) => {
  const { field, fieldState } = useController<T>({ name });

  return (
    <Select
      ref={field.ref}
      name={field.name}
      selectedKeys={field.value}
      onSelectionChange={(v) => field.onChange([...v])}
      onBlur={field.onBlur}
      isInvalid={fieldState.invalid}
      errorMessage={fieldState.error?.message}
      {...props}
    />
  );
};

const Section = SelectSection;

const Item = SelectItem;

export const FormSelect = {
  Root,
  Section,
  Item,
};
