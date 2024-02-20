import { useLayoutEffect, useRef, useState } from "react";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

export const useModal = (preventScroll: boolean) => {
  const targetRef = useRef<HTMLBodyElement>();
  const targetElement = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    const bodyElement = document.querySelector("body")!;

    setMounted(true);

    targetRef.current = bodyElement;

    return () => {
      clearAllBodyScrollLocks();
      setMounted(false);
    };
  }, []);

  const setModalOpen = (opened: boolean) => {
    if (opened) {
      disableBodyScroll(targetRef.current!);
    } else {
      if (!preventScroll) {
        return;
      }

      enableBodyScroll(targetRef.current!);
    }
  };

  return { setModalOpen, targetRef, targetElement, mounted };
};
