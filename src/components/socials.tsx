import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

/**
 * Socials component — displays your GitHub, LinkedIn, and Twitter icons
 * with links that open in a new tab.
 */
export function Socials() {
  const links = [
    {
      name: "GitHub",
      href: "https://github.com/ALLENMATHEWJOSEPH",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/allenmathewjoseph",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Twitter",
      href: "https://x.com/AllenThekkekara",
      icon: <Twitter className="h-5 w-5" />,
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
