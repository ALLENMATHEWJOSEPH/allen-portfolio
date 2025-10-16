import { createRouter, createRootRoute, createFileRoute, lazyRouteComponent, HeadContent, Scripts } from '@tanstack/react-router';
import { jsxs, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { Github, Linkedin, Twitter, X } from 'lucide-react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { ThemeProvider as ThemeProvider$1 } from 'next-themes';

const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "inline-flex text-xs items-center text-muted-foreground font-medium bg-accent/30 flex-col sm:flex-row justify-center pb-6 pt-4 w-full shrink-0 px-4 md:px-6 border-t", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex space-x-2 ", children: [
    /* @__PURE__ */ jsx("p", { children: "Allen Mathew Joseph" }),
    " ",
    /* @__PURE__ */ jsx("p", { children: "|" }),
    /* @__PURE__ */ jsx("p", { children: (/* @__PURE__ */ new Date()).getFullYear() })
  ] }) });
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Button = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    const base = "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50";
    const variants = {
      default: "bg-primary text-white hover:bg-primary/90",
      outline: "border border-border text-foreground hover:bg-muted",
      ghost: "text-foreground hover:bg-muted"
    };
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        className: cn(base, variants[variant], className),
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
const Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
  SeparatorPrimitive.Root,
  {
    ref,
    decorative,
    orientation,
    className: cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    ),
    ...props
  }
));
Separator.displayName = SeparatorPrimitive.Root.displayName;
const Socials = [
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
function Nav() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-6", children: [
    /* @__PURE__ */ jsxs("a", { href: "/", className: "font-semibold text-xl text-primary", children: [
      "Allen",
      /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "MJ" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-6", children: [
      navItems.map((item) => /* @__PURE__ */ jsx(
        "a",
        {
          href: item.href,
          className: "text-sm font-medium text-muted-foreground hover:text-primary transition-colors",
          children: item.name
        },
        item.name
      )),
      /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "h-6" }),
      /* @__PURE__ */ jsx(Socials, {}),
      /* @__PURE__ */ jsx(Button, { variant: "outline", className: "ml-4", children: "Resume" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsxs(Sheet, { children: [
      /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", className: "p-2 text-sm", children: "\u2630" }) }),
      /* @__PURE__ */ jsxs(SheetContent, { side: "right", className: "flex flex-col gap-6 p-6", children: [
        navItems.map((item) => /* @__PURE__ */ jsx(
          "a",
          {
            href: item.href,
            className: "text-base font-medium text-foreground hover:text-primary transition-colors",
            children: item.name
          },
          item.name
        )),
        /* @__PURE__ */ jsx(Separator, {}),
        /* @__PURE__ */ jsx(Socials, {})
      ] })
    ] }) })
  ] }) });
}
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
const $$splitComponentImporter = () => import('./index-hYQfz2S0.mjs');
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
  default: router,
  getRouter,
  router
}, Symbol.toStringTag, { value: "Module" }));

export { Button as B, Separator as S, Socials as a, cn as c, router$1 as r };
//# sourceMappingURL=router-Bdj2-q2n.mjs.map
