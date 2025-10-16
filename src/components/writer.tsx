"use client";

import React, { useEffect, useState } from "react";

// The words that will cycle through in your hero section
const words = [
  "Data Analyst",
  "Business Strategist",
  "AI Enthusiast",
  "Tech Creator",
];

export function Writer() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];

    // Speed of typing and deleting
    const speed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentWord.slice(0, prev.length + 1)
      );

      // Finished typing a word
      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      }
      // Finished deleting a word
      else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <span className="font-semibold text-primary tracking-wide">
      {displayText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}

// If your hero imports it as `import Writer from "./writer"`
export default Writer;
