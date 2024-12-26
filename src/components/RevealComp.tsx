"use client";
import { root } from "postcss";
import React, { useEffect, useRef, useState } from "react";

const RevealComp = ({
  children,
  thresholdValue,
  duration,
  x,
  y,
  className,
  rootMargin,
}: {
  children: any;
  thresholdValue: any;
  duration: any;
  x: any;
  y: any;
  className?: String;
  rootMargin?: string;
}) => {
  x = x || 0;
  y = y || 0;
  const ref = useRef(null);
  const [intersecting, setIntersecting] = useState(false);
  useEffect(() => {
    if (ref.current) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          console.log(entries);
          if (entries[0].isIntersecting) {
            setIntersecting(true);
          } else {
            setIntersecting(false);
          }
        },
        {
          threshold: thresholdValue,
          rootMargin: rootMargin,
        }
      );

      intersectionObserver.observe(ref.current);

      return () => {
        if (ref.current) {
          intersectionObserver.unobserve(ref.current);
        }
      };
    }
  }, []);

  return (
    <div
      style={{
        transitionDuration: duration,
        transform: !intersecting
          ? `translate(${x}px, ${y}px)`
          : `translate(0px, 0px)`,
      }}
      className={`transition ${
        intersecting ? "opacity-100" : "opacity-0"
      }  ${className}`}
      ref={ref}
    >
      {children}
    </div>
  );
};
export default RevealComp;
