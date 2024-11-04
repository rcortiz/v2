"use client";

import { Button } from "../ui/button";
import Bubble from "../Bubble/Bubble";
import SvgHeroImg from "../icons/HeroImg";
import ContactDialog from "../ContactDialog/ContactDialog";

import { ArrowRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

const Hero = () => {
  return (
    <main className="flex flex-col gap-10 md:w-[800px] mx-auto">
      <div className="flex flex-col gap-10 md:flex-row justify-center md:justify-between">
        <div className="space-y-10 md:w-[500px] order-last md:order-1">
          <p className="font-cera font-medium italic text-[24px] leading-8 tracking-wide text-center lg:text-start lg:text-[32px]">
            Hey there! I&apos;m{" "}
            <strong className="font-black">Ralph Ortiz</strong>. I&apos;m
            passionate about integrating functionality and design in
            applications to create intuitive, user-friendly experiences.
          </p>
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
            <ContactDialog />
            <a href="https://calendly.com/ralphortiz/30min" target="_blank">
              <Button size="lg" className="w-full">
                Schedule a meeting <ArrowRightIcon className="ml-3 h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
        <figure className="relative mx-auto order-1 md:order-last">
          <SvgHeroImg className="self-center w-[200px] h-[200px]" />
          <div className="absolute -top-5 left-20">
            <Bubble />
          </div>
        </figure>
      </div>
      <article className="space-y-6">
        <p className="font-cera font-bold">
          Here are a few technologies that I&apos;ve been working with recently:
        </p>
        <div className="flex justify-between md:justify-start">
          <ul className="space-y-2 md:mr-16">
            <li>&rarr; Javascript</li>
            <li>&rarr; Typescript</li>
            <li>→ Tailwind</li>
            <li>→ Node.js</li>
          </ul>
          <ul className="space-y-2">
            <li>&rarr; Express.js</li>
            <li>&rarr; Docker</li>
            <li>&rarr; Git / Github</li>
            <li>&rarr; MongoDB</li>
          </ul>
        </div>
        <p className="font-cera font-bold mb-5">Here&apos;s my social links:</p>
        <div className="flex justify-between md:justify-start">
          <p className="flex md:w-32 items-center">
            <a
              href="https://www.facebook.com/iamrortiz/"
              target="_blank"
              className="flex items-center"
            >
              Facebook <ExternalLinkIcon className="ml-2 h-4 w-4" />
            </a>
          </p>
          <p className="flex items-center">
            <a
              href="https://www.linkedin.com/in/ralphortiz/"
              target="_blank"
              className="flex md:w-32  items-center"
            >
              Linkedin <ExternalLinkIcon className="ml-2 h-4 w-4" />
            </a>
          </p>
          <p className="flex items-center">
            <a
              href="https://dribbble.com/_rcortiz"
              target="_blank"
              className="flex md:w-32  items-center"
            >
              Dribble <ExternalLinkIcon className="ml-2 h-4 w-4" />
            </a>
          </p>
        </div>
      </article>
    </main>
  );
};

export default Hero;
