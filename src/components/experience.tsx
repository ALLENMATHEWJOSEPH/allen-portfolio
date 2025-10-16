import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type ExperienceItem = {
  logo?: string;
  title: string;
  company: string;
  description: string;
  responsibilities: string[];
  skills: string[];
};

const ExperienceCard = ({ logo, title, company, description, responsibilities, skills }: ExperienceItem) => {
  const companyLines = company.split("|");
  return (
    <Card className="h-full flex flex-col rounded-2xl shadow-sm">
      <CardContent className="grow pt-6 px-6">
        <div className="flex flex-col gap-8 ">
          <div className={`flex items-center justify-center space-x-5`}>
            {logo ? (
              <img src={logo} alt={`${companyLines[0]} Logo`} className="h-[30px] w-[30px] object-contain" loading="lazy" />
            ) : null}
            <div className="text-base md:text-lg font-medium text-center line-clamp-3">
              {companyLines.map((line, index) => (<div key={index}>{line}</div>))}
            </div>
          </div>
          <div className="flex-col space-y-3 font-medium text-muted-foreground text-center text-sm md:text-base ">
            <div>{title}</div>
            <div>{description}</div>
          </div>
          <ul className="list-disc space-y-2 text-sm md:text-base text-left pl-5 leading-loose">
            {responsibilities.map((item, index) => (
              <li key={index} className="pl-1"><span className="inline-block align-top">{item}</span></li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardContent className="grow px-6 pb-6">
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, index) => (<Badge key={index} variant={"secondary"}>{skill}</Badge>))}
        </div>
      </CardContent>
    </Card>
  );
};

export const Experience = () => {
  const experiences: ExperienceItem[] = [
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

  return (
    <section className="py-12 md:py-24 lg:py-32 " id="experience">
      <div className="container mx-auto px-10 max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center space-y-6">
          <a href="#experience">
            <Badge className="space-x-2" variant={"secondary"}>
              <div className="">💼</div> <p>Experience</p>
            </Badge>
          </a>
          <h2 className="text-xl line-clamp-1 md:text-2xl font-semibold text-primary tracking-wide">
            Where I have worked
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {experiences.map((exp, index) => (<ExperienceCard key={index} {...exp} />))}
          </div>
        </div>
      </div>
    </section>
  );
};