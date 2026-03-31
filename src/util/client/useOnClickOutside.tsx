import { useEffect, RefObject } from "react";

type Handler = (event: MouseEvent | TouchEvent) => void;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  refs: RefObject<T> | Array<RefObject<T>>,
  handler: Handler
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Convert single ref to array for consistent handling
      const refsArray = Array.isArray(refs) ? refs : [refs];

      // If click is inside any of the refs, do nothing
      const clickedInsideRefs = refsArray.some((ref) => {
        const el = ref?.current;
        return el && el.contains((event?.target as Node) || null);
      });

      if (clickedInsideRefs) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
}

export default useOnClickOutside;
