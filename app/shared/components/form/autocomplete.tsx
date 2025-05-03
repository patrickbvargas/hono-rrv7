import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
  type AutocompleteProps,
} from "@heroui/react";
import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

interface RootProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Omit<AutocompleteProps, "name"> {}
const Root = <T extends FieldValues>({
  name,
  children,
  ...props
}: RootProps<T>) => {
  const { field, fieldState } = useController<T>({ name });

  return (
    <Autocomplete
      ref={field.ref}
      name={field.name}
      selectedKey={field.value}
      onSelectionChange={field.onChange}
      onBlur={field.onBlur}
      isInvalid={fieldState.invalid}
      errorMessage={fieldState.error?.message}
      {...props}
    >
      {children}
    </Autocomplete>
  );
};

const Section = AutocompleteSection;

const Item = AutocompleteItem;

export const FormAutocomplete = {
  Root,
  Section,
  Item,
};
