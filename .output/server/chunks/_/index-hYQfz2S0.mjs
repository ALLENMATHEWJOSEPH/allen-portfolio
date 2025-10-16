import { jsxs, jsx } from 'react/jsx-runtime';
import { cva } from 'class-variance-authority';
import { S as Separator, B as Button, a as Socials, c as cn } from './router-Bdj2-q2n.mjs';
import * as React from 'react';
import { createElement, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaChartBar, FaGithub } from 'react-icons/fa';
import { ShieldCheck } from 'lucide-react';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiPostgresql, SiTableau, SiGooglecloud, SiSupabase, SiFirebase, SiGit } from 'react-icons/si';
import { FaAws, FaReact, FaLinux } from 'react-icons/fa6';
import '@tanstack/react-router';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-dialog';
import '@radix-ui/react-separator';
import 'next-themes';

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn("text-2xl font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
const Education = () => {
  return /* @__PURE__ */ jsxs("section", { className: "flex flex-col justify-center items-center mx-10 gap-4 py-12 md:py-24 lg:py-32 space-y-6", id: "education", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-7 text-center", children: [
      /* @__PURE__ */ jsx("a", { href: "#education", children: /* @__PURE__ */ jsxs(Badge, { className: "space-x-2 ", variant: "secondary", children: [
        /* @__PURE__ */ jsx("div", { children: "\u{1F4DA}" }),
        " ",
        /* @__PURE__ */ jsx("p", { children: "Education" })
      ] }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-xl line-clamp-1 md:text-2xl font-semibold text-primary tracking-wide", children: "My Academic Journey" })
    ] }),
    /* @__PURE__ */ jsx(Card, { className: "md:w-2/3 mx-auto p-10 bg-card rounded-2xl shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center item-center gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-5", children: [
          /* @__PURE__ */ jsx("img", { src: "/placeholder-user.jpg", alt: "Conestoga", className: "h-[30px] w-[30px] object-contain md:pt-1", loading: "lazy" }),
          /* @__PURE__ */ jsx("h3", { className: "text-base md:text-lg font-medium text-center line-clamp-3", children: "Conestoga College" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 font-medium text-muted-foreground text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "line-clamp-2", children: "Business Analytics and Global Business Management" }),
          /* @__PURE__ */ jsx("p", { children: "2023 to 2025" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-left pt-4 leading-loose", children: [
        /* @__PURE__ */ jsx("p", { children: "Coursework focused on analytics, operations, and technology. I built projects across Python, SQL, dashboards, and automation with a strong focus on measurable outcomes." }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm md:text-base mb-2", children: "Key Areas" }),
          /* @__PURE__ */ jsx(Separator, {}),
          /* @__PURE__ */ jsxs("ul", { className: "grid grid-cols-2 gap-2 list-disc pl-5 font-normal", children: [
            /* @__PURE__ */ jsx("li", { className: "pl-1 pr-4", children: "Data Analysis with Python" }),
            /* @__PURE__ */ jsx("li", { className: "pl-1", children: "SQL and Databases" }),
            /* @__PURE__ */ jsx("li", { className: "pl-1", children: "Business Intelligence" }),
            /* @__PURE__ */ jsx("li", { className: "pl-1", children: "Operations and Process Design" }),
            /* @__PURE__ */ jsx("li", { className: "pl-1 pr-6", children: "Cloud Fundamentals" }),
            /* @__PURE__ */ jsx("li", { className: "pl-1", children: "Project Management" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
const ExperienceCard = ({ logo, title, company, description, responsibilities, skills }) => {
  const companyLines = company.split("|");
  return /* @__PURE__ */ jsxs(Card, { className: "h-full flex flex-col rounded-2xl shadow-sm", children: [
    /* @__PURE__ */ jsx(CardContent, { className: "grow pt-6 px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 ", children: [
      /* @__PURE__ */ jsxs("div", { className: `flex items-center justify-center space-x-5`, children: [
        logo ? /* @__PURE__ */ jsx("img", { src: logo, alt: `${companyLines[0]} Logo`, className: "h-[30px] w-[30px] object-contain", loading: "lazy" }) : null,
        /* @__PURE__ */ jsx("div", { className: "text-base md:text-lg font-medium text-center line-clamp-3", children: companyLines.map((line, index) => /* @__PURE__ */ jsx("div", { children: line }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-col space-y-3 font-medium text-muted-foreground text-center text-sm md:text-base ", children: [
        /* @__PURE__ */ jsx("div", { children: title }),
        /* @__PURE__ */ jsx("div", { children: description })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "list-disc space-y-2 text-sm md:text-base text-left pl-5 leading-loose", children: responsibilities.map((item, index) => /* @__PURE__ */ jsx("li", { className: "pl-1", children: /* @__PURE__ */ jsx("span", { className: "inline-block align-top", children: item }) }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx(CardContent, { className: "grow px-6 pb-6", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2", children: skills.map((skill, index) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: skill }, index)) }) })
  ] });
};
const Experience = () => {
  const experiences = [
    {
      logo: "/placeholder-user.jpg",
      title: "Business and Data Analyst",
      company: "Refund Associates",
      description: "2024 to present",
      responsibilities: [
        "Built tax claim workflows for First Nations GST, HST, and PST segmentation with strict data handling standards.",
        "Created SOPs and reporting dashboards to cut processing time and reduce errors.",
        "Recommended and supported migration from a local ACT database to a secure cloud stack."
      ],
      skills: ["Python", "SQL", "Power BI", "Excel", "Process Design", "SOPs"]
    },
    {
      logo: "/placeholder-user.jpg",
      title: "Operations and Scheduling Coordinator",
      company: "NEW CS Brothers",
      description: "2022 to 2023",
      responsibilities: [
        "Managed unionized drivers and laborers with daily route planning and schedule optimization.",
        "Coordinated with vendors and port authorities for cargo clearance and delivery.",
        "Introduced improvements for data tracking and customer communication."
      ],
      skills: ["Operations", "Salesforce", "Scheduling", "Logistics", "Stakeholder Management"]
    },
    {
      logo: "/placeholder-user.jpg",
      title: "Customer Support Associate",
      company: "Amazon",
      description: "2021 to 2022",
      responsibilities: [
        "Handled sensitive customer data with care and accuracy across multiple systems.",
        "Created and maintained SOP snippets for faster issue resolution."
      ],
      skills: ["Amazon Connect", "Documentation", "Customer Experience"]
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-12 md:py-24 lg:py-32 ", id: "experience", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-10 max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-4 text-center space-y-6", children: [
    /* @__PURE__ */ jsx("a", { href: "#experience", children: /* @__PURE__ */ jsxs(Badge, { className: "space-x-2", variant: "secondary", children: [
      /* @__PURE__ */ jsx("div", { className: "", children: "\u{1F4BC}" }),
      " ",
      /* @__PURE__ */ jsx("p", { children: "Experience" })
    ] }) }),
    /* @__PURE__ */ jsx("h2", { className: "text-xl line-clamp-1 md:text-2xl font-semibold text-primary tracking-wide", children: "Where I have worked" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 w-full", children: experiences.map((exp, index) => /* @__PURE__ */ jsx(ExperienceCard, { ...exp }, index)) })
  ] }) }) });
};
const words = [
  "Data Analyst",
  "Business Strategist",
  "AI Enthusiast",
  "Tech Creator"
];
function Writer() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const currentWord = words[index % words.length];
    const speed = isDeleting ? 60 : 100;
    const timeout = setTimeout(() => {
      setDisplayText(
        (prev) => isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
      );
      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1e3);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);
  return /* @__PURE__ */ jsxs("span", { className: "font-semibold text-primary tracking-wide", children: [
    displayText,
    /* @__PURE__ */ jsx("span", { className: "animate-pulse text-primary", children: "|" })
  ] });
}
function JobStatusBadge() {
  return /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
      /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" }),
      /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-green-500" })
    ] }),
    /* @__PURE__ */ jsx("span", { children: "Open to Work" })
  ] });
}
const LocationBadge = () => {
  return /* @__PURE__ */ jsxs(Badge, { className: "space-x-2 ", variant: "secondary", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: { y: [0, -5, 0] },
        transition: { duration: 1 },
        children: /* @__PURE__ */ jsx("p", { children: "\u{1F4CD}" })
      }
    ),
    /* @__PURE__ */ jsx("p", { children: "Ontario, Canada" })
  ] });
};
function Hero() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "home",
      className: "flex flex-col items-center justify-center min-h-screen px-6 text-center space-y-8",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(JobStatusBadge, {}),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-bold md:text-6xl text-primary", children: [
            "Hi, I'm ",
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Allen Mathew Joseph" })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-lg md:text-2xl text-muted-foreground", children: /* @__PURE__ */ jsx(Writer, {}) }),
          /* @__PURE__ */ jsx(Separator, { className: "my-6 w-24 mx-auto" }),
          /* @__PURE__ */ jsx("p", { className: "max-w-xl mx-auto text-sm md:text-base text-muted-foreground", children: "Data Analyst, Business Strategist, and AI Enthusiast crafting digital tools that connect innovation with real-world impact." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mt-6", children: [
            /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsx("a", { href: "#projects", children: "View My Work" }) }),
            /* @__PURE__ */ jsx(Button, { variant: "outline", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "#contact", children: "Contact Me" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col items-center space-y-6", children: [
          /* @__PURE__ */ jsx(LocationBadge, {}),
          /* @__PURE__ */ jsx(Socials, {})
        ] })
      ]
    }
  );
}
const ProjectCard = ({
  logo,
  title,
  subtitle,
  description,
  technologies,
  githubLink,
  additionalLink,
  additionalLinkText
}) => /* @__PURE__ */ jsxs(Card, { className: "h-full flex flex-col rounded-2xl shadow-sm", children: [
  /* @__PURE__ */ jsx(CardContent, { className: "grow pt-6 px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-6 ", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-3 ", children: [
      typeof logo === "string" ? /* @__PURE__ */ jsx("img", { src: logo, alt: title, className: "h-[30px] w-[30px] object-contain rounded-md", loading: "lazy" }) : logo,
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium", children: title })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-sm md:text-base text-center line-clamp-1 font-medium text-muted-foreground", children: subtitle }),
    /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-left leading-loose", children: description })
  ] }) }),
  /* @__PURE__ */ jsxs(CardFooter, { className: "flex flex-col items-center gap-6 px-6 pb-6", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2 lg:max-w-[75%]", children: technologies.map((tech, index) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: tech }, index)) }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center", children: [
      githubLink && /* @__PURE__ */ jsx("a", { href: githubLink, target: "_blank", rel: "noreferrer", "aria-label": `${title} source code`, children: /* @__PURE__ */ jsx(FaGithub, { size: 25 }) }),
      additionalLink && /* @__PURE__ */ jsx("a", { href: additionalLink, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(Button, { size: "sm", children: additionalLinkText || "Demo" }) })
    ] })
  ] })
] });
const Projects = () => {
  const projects = [
    {
      logo: "/kb2.svg",
      title: "Quid Buddy",
      subtitle: "Credit card powered rent and mortgage payments",
      description: "MVP for a fintech platform that lets users pay rent or loans with cards, earn rewards, and automate repayments. Built as a lean prototype with secure flows and clear compliance steps.",
      technologies: ["Next.js", "TypeScript", "Stripe", "Supabase", "PostgreSQL", "TailwindCSS", "Vercel"],
      additionalLink: "https://quidbuddy.example.com",
      additionalLinkText: "Live Preview"
    },
    {
      logo: /* @__PURE__ */ jsx(ShieldCheck, { className: "text-blue-500 w-8 h-8" }),
      title: "AI Tax Document Agent",
      subtitle: "Automated GST HST PST extraction and sorting",
      description: "Agent design that ingests scanned documents and classifies totals by code type for claims. Uses OCR, rules, and human approval steps. Power Automate compatible.",
      technologies: ["Python", "OCR", "Azure Form Recognizer", "Power Automate", "Supabase", "FastAPI"],
      githubLink: "https://github.com/your-username/ai-tax-doc-agent"
    },
    {
      logo: "/recycling.png",
      title: "Leadgen Zero Cost",
      subtitle: "Free lead generation engine",
      description: "A lightweight lead pipeline that uses OpenCorporates and Google Sheets with simple automations. Focused on fast setup and zero hosting cost.",
      technologies: ["Netlify", "Google Sheets", "Serverless", "TypeScript"],
      additionalLink: "https://leadgen-zero-cost.netlify.app"
    },
    {
      logo: "/placeholder-user.jpg",
      title: "Memorial Website",
      subtitle: "Personal project",
      description: "A simple tribute site built with Git hosting, a serverless platform, and a cloud database. Emphasis on clean writing and ease of contribution for family.",
      technologies: ["React", "Vercel", "Supabase", "TailwindCSS"],
      githubLink: "https://github.com/your-username/memorial-site"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "w-full py-12 md:py-24 lg:py-32", id: "projects", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-10 max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-4 text-center space-y-6", children: [
    /* @__PURE__ */ jsx("a", { href: "#projects", children: /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "space-x-2 px-3 py-1", children: [
      /* @__PURE__ */ jsx("div", { className: "", children: "\u{1F680}" }),
      " ",
      /* @__PURE__ */ jsx("p", { children: "Projects" })
    ] }) }),
    /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl font-semibold line-clamp-1 text-primary leading-loose", children: "Things I have built" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 w-full", children: projects.map((project, index) => /* @__PURE__ */ createElement(ProjectCard, { ...project, key: index })) })
  ] }) }) });
};
const SkillIcon = ({
  Icon,
  name,
  invert
}) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ jsx(Icon, { className: `h-10 w-10 ${invert ? "" : "text-primary"}` }),
  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-center", children: name })
] });
const Skills = () => {
  const skills = [
    { Icon: FaPython, name: "Python" },
    { Icon: BiLogoTypescript, name: "TypeScript" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
    { Icon: FaChartBar, name: "Power BI" },
    // ✅ fallback icon (always available)
    { Icon: SiTableau, name: "Tableau" },
    { Icon: SiGooglecloud, name: "BigQuery" },
    { Icon: FaAws, name: "AWS" },
    { Icon: FaReact, name: "React" },
    { Icon: SiSupabase, name: "Supabase" },
    { Icon: SiFirebase, name: "Firebase" },
    { Icon: SiGit, name: "Git" },
    { Icon: FaLinux, name: "Linux", invert: true }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-12 md:py-24 lg:py-32", id: "skills", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-4 space-y-6", children: [
    /* @__PURE__ */ jsx("a", { href: "#skills", children: /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "space-x-2", children: [
      /* @__PURE__ */ jsx("div", { children: "\u{1F3AF}" }),
      " ",
      /* @__PURE__ */ jsx("p", { children: "Skills" })
    ] }) }),
    /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl font-semibold text-primary leading-loose text-center", children: "Technologies I use" }),
    /* @__PURE__ */ jsx("div", { className: "grid w-2/3 grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-4", children: skills.map((skill, index) => /* @__PURE__ */ jsx(SkillIcon, { ...skill }, index)) }),
    /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base font-medium text-center text-muted-foreground pt-8", children: "Always learning and improving." })
  ] }) }) });
};
function BgGlowContainer({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("relative isolate", className), ...props, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none absolute inset-0 -z-10 \n                   bg-gradient-to-tr from-primary/30 via-purple-500/20 to-blue-400/30 \n                   blur-3xl opacity-40 animate-pulse"
      }
    ),
    children
  ] });
}
const Contact = () => {
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-12 md:py-24 lg:py-32", children: /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(BgGlowContainer, { className: "opacity-75", children: /* @__PURE__ */ jsx("a", { href: "mailto:allenmathewjoseph.work@gmail.com", children: /* @__PURE__ */ jsx(
    Button,
    {
      variant: "home",
      className: "relative ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start p-6 text-secondary",
      children: /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsx("p", { children: "Send me a message" }) })
    }
  ) }) }) }) });
};
function HomePage() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-1 w-full flex-col justify-center min-h-dvh pt-24", children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Experience, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Education, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
}

export { HomePage as component };
//# sourceMappingURL=index-hYQfz2S0.mjs.map
