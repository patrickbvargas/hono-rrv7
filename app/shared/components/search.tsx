import * as React from "react";
import { SearchIcon } from "lucide-react";
import { useSearch } from "~/shared/hooks";
import { cn, Input, type InputProps } from "@heroui/react";

export const Search = ({ className, ...props }: InputProps) => {
  const { query, handleSearch } = useSearch();
  const [searchValue, setSearchValue] = React.useState(query);

  const handleInputSearch = React.useCallback(
    (newQuery: string) => {
      setSearchValue(newQuery);
      handleSearch(newQuery);
    },
    [handleSearch],
  );

  return (
    <Input
      value={searchValue}
      onChange={(e) => handleInputSearch(e.target.value)}
      startContent={<SearchIcon size={16} />}
      className={cn("max-w-80", className)}
      {...props}
    />
  );
};
