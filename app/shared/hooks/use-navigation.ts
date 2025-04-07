import { useNavigation as useReactNavigation } from "react-router";

export function useNavigation() {
  const navigation = useReactNavigation();
  const isNavigating = Boolean(navigation.location);

  return { navigation, isNavigating };
}
