import { useForm } from "react-hook-form";
import { useFilter } from "../hooks/use-filter";
import { SlidersHorizontalIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { zFilter, type Filter } from "../schemas/filter";
import { Form, FormCheckboxGroup } from "~/shared/components";
import { EMPLOYEE_ROLES, EMPLOYEE_TYPES } from "../constants/filter-options";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";

export const EmployeesFilter = () => {
  const { filter, handleFilter } = useFilter();
  const methods = useForm<Filter>({
    resolver: zodResolver(zFilter),
    values: filter,
  });

  const handleSubmit = (data: Filter) => {
    handleFilter(data);
  };

  return (
    <Popover placement="bottom-start" backdrop="opaque">
      <PopoverTrigger>
        <Button isIconOnly variant="flat">
          <SlidersHorizontalIcon size={16} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-4">
        <Form
          submitCallback={handleSubmit}
          className="flex flex-col gap-4"
          {...methods}
        >
          <FormCheckboxGroup.Root<Filter> name="type" label="Tipo">
            {EMPLOYEE_TYPES.map(({ value, label }) => (
              <FormCheckboxGroup.Checkbox key={value} value={value}>
                {label}
              </FormCheckboxGroup.Checkbox>
            ))}
          </FormCheckboxGroup.Root>
          <FormCheckboxGroup.Root<Filter> name="role" label="Cargo">
            {EMPLOYEE_ROLES.map(({ value, label }) => (
              <FormCheckboxGroup.Checkbox key={value} value={value}>
                {label}
              </FormCheckboxGroup.Checkbox>
            ))}
          </FormCheckboxGroup.Root>

          <Button
            type="submit"
            variant="flat"
            className="place-self-end"
            size="sm"
          >
            Aplicar
          </Button>
        </Form>
      </PopoverContent>
    </Popover>
  );
};
