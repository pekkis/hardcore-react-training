import { useCallback, useEffect, useState } from "react";

const getVisibilityState = (): "hidden" | "visible" => {
  if (typeof window === "undefined") {
    return "visible";
  }

  return document.visibilityState;
};

const usePageVisibility = () => {
  const [visibility, setVisibility] = useState(getVisibilityState());

  const listener = useCallback(() => {
    setVisibility(getVisibilityState());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    document.addEventListener("visibilitychange", listener);

    return () => {
      document.removeEventListener("visibilitychange", listener);
    };
  }, [listener]);

  return visibility === "hidden" ? false : true;
};

export default usePageVisibility;
