import { useLocation, useSearchParams } from "react-router";

export function useURLParams() {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  return { pathname, searchParams, setSearchParams };
}
