"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useScrollToOffset = <T extends HTMLElement = HTMLElement>(
  offset: number = 100,
  threshold: number = 0.5
): [React.RefCallback<T>, boolean] => {
  const { ref, inView, entry } = useInView({ threshold });

  useEffect(() => {
    if (inView && entry) {
      const targetElement = entry.target as T;

      if (targetElement) {
        let top = targetElement.getBoundingClientRect().top;

        const navbar = document.querySelector("nav");
        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        let totalOffset = offset + navbarHeight;

        let parent = targetElement.parentElement;
        while (parent && parent !== document.body) {
          const parentOffsetTop = parent.offsetTop;
          if (parentOffsetTop) {
            totalOffset += parentOffsetTop;
          }
          parent = parent.parentElement;
        }

        const scrollPosition = window.scrollY + top - totalOffset;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [inView, entry, offset]);

  return [ref as React.RefCallback<T>, inView];
};

export default useScrollToOffset;
