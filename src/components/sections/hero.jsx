"use client";

import React from "react";
import dynamic from "next/dynamic";
import { toast } from "sonner";

import { FaArrowRight } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import Avatar from "@/components/avatar";
import GitHubContributions from "@/components/github-contributions";
import AnimatedIcon from "@/components/floating-icon";
import ReactIcon from "@/components/icons/react";
import NodeIcon from "@/components/icons/node";
import TailwindIcon from "@/components/icons/tailwind";

const ContactDialog = dynamic(
  () => import("@/components/layout/contact-dialog"),
  {
    loading: () => (
      <Button size="lg" className="w-full" aria-disabled="true" tabIndex={-1}>
        Contact Me <FaArrowRight className="ml-2" size="14px" />
      </Button>
    ),
  },
);

const Hero = () => {
  const icons = [ReactIcon, NodeIcon, TailwindIcon];

  const handleScheduleMeeting = () => {
    toast.info("Opening Calendly", {
      description: "Choose a convenient 30-minute time slot.",
    });
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
      <section className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
        <div className="order-2 min-w-0 md:order-1 md:max-w-[560px]">
          <div className="mb-6 flex flex-col text-center md:text-start">
            <h1 className="text-4xl font-bold">Ralph Ortiz</h1>
            <code className="pb-4 pt-1 text-lg font-semibold">
              AI &amp; Software Engineer
            </code>
            <p>
              I build accessible web products, Shopify experiences, and
              practical AI solutions with thoughtful UX and robust engineering.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="md:flex-1">
              <ContactDialog />
            </div>
            <Button size="lg" className="w-full md:flex-1 md:basis-0" asChild>
              <a
                href="https://calendly.com/ralphortiz/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleScheduleMeeting}
              >
                Schedule a meeting <FaArrowRight className="ml-2" size="14px" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative order-1 mx-auto md:order-2 md:mr-8">
          <Avatar />
          <AnimatedIcon
            IconComponent={icons[0]}
            className="-right-6 -top-4 h-8 w-8"
            animateProps={{ y: [0, -10, 0] }}
            transitionProps={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
          <AnimatedIcon
            IconComponent={icons[1]}
            className="-left-5 top-12 h-10 w-10"
            animateProps={{ y: [0, 10, 0] }}
            transitionProps={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
          <AnimatedIcon
            IconComponent={icons[2]}
            className="-right-8 bottom-8 h-12 w-12"
            animateProps={{ y: [0, -8, 0] }}
            transitionProps={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </section>
      <section aria-labelledby="about-heading" className="space-y-6">
        <div>
          <h2 id="about-heading" className="mb-4 font-cera text-xl font-bold">
            About Me
          </h2>
          <p className="mb-4 text-primary/75">
            I&rsquo;m an AI &amp; Software Engineer focused on building
            reliable, accessible products that combine thoughtful UX, robust
            engineering, and practical AI.{" "}
            <span className="font-semibold text-primary">
              Currently, I work at{" "}
            </span>
            <a
              href="https://asia.viseo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-cera font-bold text-[#EE4865] hover:underline dark:text-[#FFAB00]"
            >
              VISEO Asia
            </a>{" "}
            as a Software Engineer, maintaining multi-market L&rsquo;Occitane
            storefronts across 14 regional stores and building custom Shopify
            apps, middleware APIs, and automations. Outside of work, I&rsquo;m
            usually at the gym, playing video games, reading, watching
            documentaries, or planning the next place to travel.
          </p>
        </div>
      </section>
      <GitHubContributions />
    </div>
  );
};

export default Hero;
