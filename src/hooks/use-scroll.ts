import { useCallback, useEffect, useState } from "react";

export default function useScroll(point: number = 0) {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > point) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }, [point]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { scrolling };
}
