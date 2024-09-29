import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function AnimationCursor() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        outerAlpha={0}
        innerScale={2}
        outerScale={2}
        innerStyle={{ backgroundColor: `var(--cursor-color)` }}
        outerStyle={{ border: `3px solid var(--cursor-color)` }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
}
