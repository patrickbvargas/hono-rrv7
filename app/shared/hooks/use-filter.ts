import { useURLParams, useDebouncedCallback } from "~/shared/hooks";

export function useFilter() {
  const { setSearchParams } = useURLParams();

  const handleFilter = useDebouncedCallback((key: string, value: unknown) => {
    setSearchParams((prev) => {
      prev.set(key, String(value));
      return prev;
    });
  }, 300);

  return { handleFilter };
}
