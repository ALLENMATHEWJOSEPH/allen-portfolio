import type { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";

type ProjectCardProps = {
  logo: string | ReactNode;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  additionalLink?: string;
  additionalLinkText?: string;
};

const ProjectCard = ({
  logo, title, subtitle, description, technologies, githubLink, additionalLink, additionalLinkText,
}: ProjectCardProps) => (
  <Card className="h-full flex flex-col rounded-2xl shadow-sm">
    <CardContent className="grow pt-6 px-6">
      <div className="flex flex-col space-y-6 ">
        <div className="flex items-center justify-center space-x-3 ">
          {typeof logo === "string" ? (
            <img src={logo} alt={title} className="h-[30px] w-[30px] object-contain rounded-md" loading="lazy" />
          ) : (logo)}
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <div className="text-sm md:text-base text-center line-clamp-1 font-medium text-muted-foreground">
          {subtitle}
        </div>
        <p className="text-sm md:text-base text-left leading-loose">{description}</p>
      </div>
    </CardContent>
    <CardFooter className="flex flex-col items-center gap-6 px-6 pb-6">
      <div className="flex flex-wrap justify-center gap-2 lg:max-w-[75%]">
        {technologies.map((tech, index) => (<Badge key={index} variant={"secondary"}>{tech}</Badge>))}
      </div>
      <div className="flex gap-4 items-center">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer" aria-label={`${title} source code`}>
            <FaGithub size={25} />
          </a>
        )}
        {additionalLink && (
          <a href={additionalLink} target="_blank" rel="noreferrer">
            <Button size={"sm"}>{additionalLinkText || "Demo"}</Button>
          </a>
        )}
      </div>
    </CardFooter>
  </Card>
);

export const Projects = () => {
  const projects = [
    {
      logo: "/kb2.svg",
      title: "Quid Buddy",
      subtitle: "Credit card powered rent and mortgage payments",
      description:
        "MVP for a fintech platform that lets users pay rent or loans with cards, earn rewards, and automate repayments. Built as a lean prototype with secure flows and clear compliance steps.",
      technologies: ["Next.js", "TypeScript", "Stripe", "Supabase", "PostgreSQL", "TailwindCSS", "Vercel"],
      additionalLink: "https://quidbuddy.example.com",
      additionalLinkText: "Live Preview",
    },
    {
      logo: <ShieldCheck className="text-blue-500 w-8 h-8" />,
      title: "AI Tax Document Agent",
      subtitle: "Automated GST HST PST extraction and sorting",
      description:
        "Agent design that ingests scanned documents and classifies totals by code type for claims. Uses OCR, rules, and human approval steps. Power Automate compatible.",
      technologies: ["Python", "OCR", "Azure Form Recognizer", "Power Automate", "Supabase", "FastAPI"],
      githubLink: "https://github.com/your-username/ai-tax-doc-agent",
    },
    {
      logo: "/recycling.png",
      title: "Leadgen Zero Cost",
      subtitle: "Free lead generation engine",
      description:
        "A lightweight lead pipeline that uses OpenCorporates and Google Sheets with simple automations. Focused on fast setup and zero hosting cost.",
      technologies: ["Netlify", "Google Sheets", "Serverless", "TypeScript"],
      additionalLink: "https://leadgen-zero-cost.netlify.app",
    },
    {
      logo: "/placeholder-user.jpg",
      title: "Memorial Website",
      subtitle: "Personal project",
      description:
        "A simple tribute site built with Git hosting, a serverless platform, and a cloud database. Emphasis on clean writing and ease of contribution for family.",
      technologies: ["React", "Vercel", "Supabase", "TailwindCSS"],
      githubLink: "https://github.com/your-username/memorial-site",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <div className="container mx-auto px-10 max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center space-y-6">
          <a href="#projects">
            <Badge variant={"secondary"} className="space-x-2 px-3 py-1">
              <div className="">🚀</div> <p>Projects</p>
            </Badge>
          </a>

          <h2 className="text-xl md:text-2xl font-semibold line-clamp-1 text-primary leading-loose">
            Things I have built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {projects.map((project, index) => (<ProjectCard {...project} key={index} />))}
          </div>
        </div>
      </div>
    </section>
  );
};