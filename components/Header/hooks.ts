import { useEffect, useState } from "react";

export function useShadow() {
  const [shadow, setShadow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setShadow(false);
    } else {
      setShadow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return shadow;
}
