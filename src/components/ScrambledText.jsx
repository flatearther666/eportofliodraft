import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

import "./ScrambledText.css";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const ScrambledText = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = "01",
  className = "",
  style = {},
  children,
}) => {
  const rootRef = useRef(null);
  const wordsRef = useRef([]);

  useEffect(() => {
    if (!rootRef.current) return;

    // Split by words instead of characters to preserve word integrity
    const split = SplitText.create(rootRef.current.querySelector("p"), {
      type: "words",
      wordsClass: "word",
    });
    wordsRef.current = split.words;

    wordsRef.current.forEach((word) => {
      gsap.set(word, {
        display: 'inline-block',
        marginRight: '0.25em',
        attr: { 'data-content': word.innerHTML },
      });
    });

    const handleMove = (e) => {
      wordsRef.current.forEach((word) => {
        const { left, top, width, height } = word.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          gsap.to(word, {
            overwrite: true,
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: word.dataset.content || "",
              chars: scrambleChars,
              speed,
            },
            ease: "none",
          });
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener("pointermove", handleMove);

    return () => {
      el.removeEventListener("pointermove", handleMove);
      split.revert();
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div ref={rootRef} className={`text-block ${className}`} style={style}>
      <p>{children}</p>
    </div>
  );
};

export default ScrambledText;
