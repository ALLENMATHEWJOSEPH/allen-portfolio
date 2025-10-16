"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Socials } from "./socials";
import { Separator } from "@/components/ui/separator";
import { Writer } from "./writer";
import { JobStatusBadge } from "./job-status-badge";
import { LocationBadge } from "./location-badge";

export function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center space-y-8"
    >
      <div className="space-y-4">
        <JobStatusBadge />
        <h1 className="text-4xl font-bold md:text-6xl text-primary">
          Hi, I'm <span className="text-foreground">Allen Mathew Joseph</span>
        </h1>
        <h2 className="text-lg md:text-2xl text-muted-foreground">
          <Writer />
        </h2>
        <Separator className="my-6 w-24 mx-auto" />
        <p className="max-w-xl mx-auto text-sm md:text-base text-muted-foreground">
          Data Analyst, Business Strategist, and AI Enthusiast crafting digital
          tools that connect innovation with real-world impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Button asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center space-y-6">
        <LocationBadge />
        <Socials />
      </div>
    </section>
  );
}

export default Hero;
