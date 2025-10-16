import { Badge } from "@/components/ui/badge";
import { IconType } from "react-icons/lib";

// Core skill icons
import { FaPython, FaChartBar } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiPostgresql,
  SiGit,
  SiGooglecloud,
  SiTableau,
  SiSupabase,
  SiFirebase,
} from "react-icons/si";
import { FaAws, FaReact, FaLinux } from "react-icons/fa6";

// Component to render each skill icon
const SkillIcon = ({
  Icon,
  name,
  invert,
}: {
  Icon: IconType;
  name: string;
  invert?: boolean;
}) => (
  <div className="flex flex-col items-center gap-4">
    <Icon className={`h-10 w-10 ${invert ? "" : "text-primary"}`} />
    <span className="text-sm font-medium text-center">{name}</span>
  </div>
);

// Main Skills section
export const Skills = () => {
  const skills = [
    { Icon: FaPython, name: "Python" },
    { Icon: BiLogoTypescript, name: "TypeScript" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
    { Icon: FaChartBar, name: "Power BI" }, // ✅ fallback icon (always available)
    { Icon: SiTableau, name: "Tableau" },
    { Icon: SiGooglecloud, name: "BigQuery" },
    { Icon: FaAws, name: "AWS" },
    { Icon: FaReact, name: "React" },
    { Icon: SiSupabase, name: "Supabase" },
    { Icon: SiFirebase, name: "Firebase" },
    { Icon: SiGit, name: "Git" },
    { Icon: FaLinux, name: "Linux", invert: true },
  ];

  return (
    <section className="py-12 md:py-24 lg:py-32" id="skills">
      <div className="container mx-auto px-10">
        <div className="flex flex-col items-center justify-center gap-4 space-y-6">
          <a href="#skills">
            <Badge variant="secondary" className="space-x-2">
              <div>🎯</div> <p>Skills</p>
            </Badge>
          </a>

          <h2 className="text-xl md:text-2xl font-semibold text-primary leading-loose text-center">
            Technologies I use
          </h2>

          <div className="grid w-2/3 grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <SkillIcon key={index} {...skill} />
            ))}
          </div>

          <p className="text-sm md:text-base font-medium text-center text-muted-foreground pt-8">
            Always learning and improving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
