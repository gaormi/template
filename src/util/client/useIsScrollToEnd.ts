import { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

type UseScrollToEndProps = {
  id: string;
  onScrollEnd: () => void;
};

export default function useIsScrolledToEnd({
  id,
  onScrollEnd,
}: UseScrollToEndProps) {
  const debouncedOnScrollEnd = useDebouncedCallback(onScrollEnd, 200);

  useEffect(() => {
    const element = document.getElementById(id);

    if (!element) {
      console.warn(`Element with id "${id}" not found.`);
      return;
    }

    const handleScroll = () => {
      if (!element) return;

      const { scrollTop, scrollHeight, clientHeight } = element;
      const isScrolledToEnd = scrollTop + clientHeight + 200 >= scrollHeight;

      if (isScrolledToEnd) {
        debouncedOnScrollEnd();
      }
    };

    element.addEventListener("scroll", handleScroll);

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [id, debouncedOnScrollEnd]);
}
