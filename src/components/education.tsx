import { Badge } from "@/components/ui/badge";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";

export const Education = () => {
  return (
    <section className="flex flex-col justify-center items-center mx-10 gap-4 py-12 md:py-24 lg:py-32 space-y-6" id="education">
      <div className="flex flex-col items-center justify-center gap-7 text-center">
        <a href="#education">
          <Badge className="space-x-2 " variant={"secondary"}>
            <div>📚</div> <p>Education</p>
          </Badge>
        </a>
        <h2 className="text-xl line-clamp-1 md:text-2xl font-semibold text-primary tracking-wide">
          My Academic Journey
        </h2>
      </div>
      <Card className="md:w-2/3 mx-auto p-10 bg-card rounded-2xl shadow-sm">
        <div className="flex flex-col justify-center item-center gap-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center space-x-5">
              <img src="/placeholder-user.jpg" alt="Conestoga" className="h-[30px] w-[30px] object-contain md:pt-1" loading="lazy" />
              <h3 className="text-base md:text-lg font-medium text-center line-clamp-3">
                Conestoga College
              </h3>
            </div>
            <div className="flex flex-col gap-4 font-medium text-muted-foreground text-center">
              <p className="line-clamp-2">Business Analytics and Global Business Management</p>
              <p>2023 to 2025</p>
            </div>
          </div>
          <div className="space-y-6 text-left pt-4 leading-loose">
            <p>
              Coursework focused on analytics, operations, and technology. I built projects across Python, SQL, dashboards, and automation with a strong focus on measurable outcomes.
            </p>
            <div className="space-y-4">
              <h4 className="font-medium text-sm md:text-base mb-2">Key Areas</h4>
              <Separator />
              <ul className="grid grid-cols-2 gap-2 list-disc pl-5 font-normal">
                <li className="pl-1 pr-4">Data Analysis with Python</li>
                <li className="pl-1">SQL and Databases</li>
                <li className="pl-1">Business Intelligence</li>
                <li className="pl-1">Operations and Process Design</li>
                <li className="pl-1 pr-6">Cloud Fundamentals</li>
                <li className="pl-1">Project Management</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};