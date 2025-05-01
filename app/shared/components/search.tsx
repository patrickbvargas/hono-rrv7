import * as React from "react";
import { cn } from "~/shared/utils";
import { useSearch } from "~/shared/hooks";
import { Input, Button } from "~/shared/components";
import { ListFilterIcon, XIcon } from "lucide-react";

export const Search = ({
  className,
  ...props
}: React.ComponentProps<typeof Input>) => {
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
    <div className="relative">
      <ListFilterIcon className="absolute size-4 opacity-60 left-2 top-1/2 -translate-y-1/2 text-foreground" />
      <Input
        className={cn("px-10", className)}
        value={searchValue}
        onChange={(e) => handleInputSearch(e.target.value)}
        {...props}
      />
      <Button
        className={cn(
          "absolute size-6 right-2 top-1/2 -translate-y-1/2 opacity-0",
          query && "opacity-100",
        )}
        variant="ghost"
        size="icon"
        onClick={() => handleInputSearch("")}
      >
        <XIcon className="size-4 opacity-60" />
      </Button>
    </div>
  );
};
