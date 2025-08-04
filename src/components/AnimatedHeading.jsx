// src/components/AnimatedHeading.jsx
import React, { useRef, useEffect, useState } from "react";

export default function AnimatedHeading({ children }) {
  const ref = useRef();
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrigger(false); // Reset, allow retrigger
          setTimeout(() => setTrigger(true), 15); // Small delay for reflow, then animate
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center mb-10">
      <h2
        ref={ref}
        className="text-3xl font-bold text-center text-emerald-300 relative z-10 py-1 px-2"
        style={{
          overflow: "hidden",
        }}
      >
        {children}
        {/* the overlay */}
        <span
          className={`sweep-bg${trigger ? ' sweep-animate' : ''}`}
          aria-hidden="true"
        />
      </h2>
    </div>
  );
}
