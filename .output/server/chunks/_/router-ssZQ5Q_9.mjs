import { createRouter, createRootRoute, createFileRoute, lazyRouteComponent, HeadContent, Scripts } from '@tanstack/react-router';
import { jsxs, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { X, Sun, Moon, Github, Linkedin, Twitter } from 'lucide-react';
import { ThemeProvider as ThemeProvider$1, useTheme } from 'next-themes';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as SheetPrimitive from '@radix-ui/react-dialog';

const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "inline-flex text-xs items-center text-muted-foreground font-medium bg-accent/30 flex-col sm:flex-row justify-center pb-6 pt-4 w-full shrink-0 px-4 md:px-6 border-t", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex space-x-2 ", children: [
    /* @__PURE__ */ jsx("p", { children: "Allen Mathew Joseph" }),
    " ",
    /* @__PURE__ */ jsx("p", { children: "|" }),
    /* @__PURE__ */ jsx("p", { children: (/* @__PURE__ */ new Date()).getFullYear() })
  ] }) });
};
function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
      className: "rounded-md p-2 hover:bg-muted transition",
      "aria-label": "Toggle theme",
      children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "h-5 w-5 text-yellow-400" }) : /* @__PURE__ */ jsx(Moon, { className: "h-5 w-5 text-slate-800" })
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        className: cn(buttonVariants({ variant, size, className })),
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const SheetContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed z-50 gap-4 bg-background p-6 shadow-lg transition data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
function Socials() {
  const links = [
    {
      name: "GitHub",
      href: "https://github.com/ALLENMATHEWJOSEPH",
      icon: /* @__PURE__ */ jsx(Github, { className: "h-5 w-5" })
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/allenmathewjoseph",
      icon: /* @__PURE__ */ jsx(Linkedin, { className: "h-5 w-5" })
    },
    {
      name: "Twitter",
      href: "https://x.com/AllenThekkekara",
      icon: /* @__PURE__ */ jsx(Twitter, { className: "h-5 w-5" })
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: links.map((link) => /* @__PURE__ */ jsx(
    "a",
    {
      href: link.href,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": link.name,
      className: "text-muted-foreground hover:text-primary transition-colors",
      children: link.icon
    },
    link.name
  )) });
}
const NavLink = ({ href, children, onClick, isActive }) => /* @__PURE__ */ jsx(
  "a",
  {
    href,
    className: `text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`,
    onClick,
    children
  }
);
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#top");
  useEffect(() => {
    return;
  }, []);
  const setHash = (hash) => () => {
    setActiveHash(hash || "#top");
    if (hash.startsWith("#")) {
      setTimeout(() => setIsOpen(false), 0);
    }
  };
  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" }
  ];
  return /* @__PURE__ */ jsx("header", { className: "bg-card fixed top-0 left-0 right-0 z-50 border-b", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto py-4 px-10 flex items-center justify-evenly space-x-3", children: [
    /* @__PURE__ */ jsxs("nav", { className: "hidden w-full lg:flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 items-center", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#top",
            className: "text-primary text-lg font-semibold tracking-wider hover:text-muted-foreground",
            onClick: setHash("#top"),
            children: "Allen Mathew Joseph"
          }
        ),
        /* @__PURE__ */ jsx(Socials, {})
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex space-x-6 items-center", children: navItems.map((item, index) => /* @__PURE__ */ jsx(
        NavLink,
        {
          href: item.href,
          isActive: activeHash === item.href,
          onClick: setHash(item.href),
          children: item.label
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "flex items-center lg:hidden justify-between w-full", children: /* @__PURE__ */ jsxs(Sheet, { open: isOpen, onOpenChange: setIsOpen, children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#top",
          className: "text-primary text-base font-semibold tracking-wider hover:text-muted-foreground",
          onClick: setHash("#top"),
          children: "Allen Mathew Joseph"
        }
      ),
      /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "ml-2 text-muted-foreground", children: /* @__PURE__ */ jsx(RxHamburgerMenu, { className: "h-5 w-5" }) }) }),
      /* @__PURE__ */ jsx(SheetContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col lg:flex-row text-left items-start lg:items-center font-sm lg:space-y-0 space-y-6 w-full", children: navItems.map((item, index) => /* @__PURE__ */ jsx("div", { className: "py-1 w-full", children: /* @__PURE__ */ jsx(
          NavLink,
          {
            href: item.href,
            onClick: setHash(item.href),
            isActive: activeHash === item.href,
            children: item.label
          }
        ) }, index)) }),
        /* @__PURE__ */ jsx(Socials, {})
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(ThemeSwitcher, {})
  ] }) });
};
function ThemeProvider({
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(ThemeProvider$1, { ...props, children });
}
const Route$1 = createRootRoute({
  head: () => ({
    meta: [{
      charSet: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      title: "Allen Mathew Joseph"
    }, {
      name: "description",
      content: "Allen Mathew Joseph \u2014 portfolio, projects, experience, and contact."
    }],
    links: [
      // Removed the CSS link — not needed
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-16x16.png"
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "manifest",
        href: "/site.webmanifest"
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({
  children
}) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "bg-background text-foreground", children: [
      /* @__PURE__ */ jsx(ThemeProvider, { attribute: "class", defaultTheme: "dark", disableTransitionOnChange: true, enableSystem: true, children: /* @__PURE__ */ jsxs("div", { id: "top", className: "min-h-dvh flex flex-col text-sm md:text-base", children: [
        /* @__PURE__ */ jsx(Nav, {}),
        /* @__PURE__ */ jsx("main", { className: "w-full flex flex-1 flex-col justify-start mt-20 pb-10", children }),
        /* @__PURE__ */ jsx(Footer, {})
      ] }) }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter = () => import('./index-BPc64zCL.mjs');
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true
});
const getRouter = () => router;
const router$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter,
  router
}, Symbol.toStringTag, { value: "Module" }));

export { Button as B, cn as c, router$1 as r };
//# sourceMappingURL=router-ssZQ5Q_9.mjs.map
