"use client";

import React, { useState, useEffect } from "react";
import _ from "lodash";

import {
  FaArrowRight,
  FaGithub,
  FaCodepen,
  FaLinkedin,
  FaDribbble,
} from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import Avatar from "@/components/avatar";
import ContactDialog from "@/components/layout/contact-dialog";
import AnimatedIcon from "@/components/floating-icon";
import ReactIcon from "@/components/icons/react";
import NodeIcon from "@/components/icons/node";
import ExpressIcon from "@/components/icons/express";
import TailwindIcon from "@/components/icons/tailwind";
import BulmaIcon from "@/components/icons/bulma";
import NextIcon from "@/components/icons/next";
import BootstrapIcon from "@/components/icons/bootstrap";

const Hero = () => {
  const [randomIcons, setRandomIcons] = useState([null, null, null]);
  const icons = [
    ReactIcon,
    ExpressIcon,
    NodeIcon,
    TailwindIcon,
    BulmaIcon,
    NextIcon,
    BootstrapIcon,
  ];

  useEffect(() => {
    const selectedIcons = _.sampleSize(icons, 3);
    setRandomIcons(selectedIcons);
  }, []);

  if (randomIcons.includes(null)) {
    return null;
  }

  return (
    <div className="mx-auto flex flex-col gap-10 md:w-[800px]">
      <div className="flex flex-col justify-center gap-10 md:flex-row md:justify-between">
        <div className="order-last md:order-1 md:w-[500px]">
          <div className="mb-6 flex flex-col gap-y-2 text-center md:text-start">
            <h1 className="text-4xl font-bold">Ralph Ortiz</h1>
            <h2 className="text-lg font-medium">Full Stack Engineer</h2>
            <p>
              I am passionate about integrating functionality and design in
              applications to create intuitive, user-friendly experiences.
            </p>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <ContactDialog />
            <a href="https://calendly.com/ralphortiz/30min" target="_blank">
              <Button size="lg" className="w-full">
                Schedule a meeting <FaArrowRight className="ml-2" size="14px" />
              </Button>
            </a>
          </div>
          <div className="mt-10 flex justify-center space-x-5 md:justify-start">
            <a href="https://github.com/rcortiz" target="_blank">
              <FaGithub size="24px" className="opacity-60 hover:opacity-100" />
            </a>
            <a href="https://codepen.io/rcortiz" target="_blank">
              <FaCodepen size="24px" className="opacity-60 hover:opacity-100" />
            </a>
            <a href="https://www.linkedin.com/in/ralphortiz/" target="_blank">
              <FaLinkedin
                size="24px"
                className="opacity-60 hover:opacity-100"
              />
            </a>
            <a href="https://dribbble.com/_rcortiz" target="_blank">
              <FaDribbble
                size="24px"
                className="opacity-60 hover:opacity-100"
              />
            </a>
          </div>
        </div>
        <div className="relative order-1 mx-auto md:order-last">
          <Avatar />
          <AnimatedIcon
            IconComponent={randomIcons[0]}
            className="-right-6 -top-4 h-8 w-8"
            animateProps={{ y: [0, -10, 0] }}
            transitionProps={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
          <AnimatedIcon
            IconComponent={randomIcons[1]}
            className="-left-5 top-12 h-10 w-10"
            animateProps={{ y: [0, 10, 0] }}
            transitionProps={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
          <AnimatedIcon
            IconComponent={randomIcons[2]}
            className="-right-8 bottom-8 h-12 w-12"
            animateProps={{ y: [0, -8, 0] }}
            transitionProps={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <h5 className="mb-4 font-cera text-lg font-medium">About Me</h5>
          <p className="mb-4">
            I&rsquo;m a software engineer passionate about creating seamless,
            high-performance user interfaces that blend thoughtful design with
            strong engineering principles. I enjoy working at the intersection
            of design and development, ensuring that the experiences I build are
            not only visually compelling but also highly usable and efficient.
          </p>
          <p className="mb-4">
            Currently, I&rsquo;m a Software Developer at{" "}
            <a
              href="https://www.gmanmi.com/"
              target="_blank"
              className="font-medium text-[#EE4865] hover:underline dark:text-[#FFAB00]"
            >
              GMA New Media Inc.
            </a>
            , where I contribute to the design, development, and maintenance of
            web applications, ensuring they meet performance, usability, and
            scalability standards. I collaborate with cross-functional teams to
            implement new features, troubleshoot issues, and enhance existing
            systems.
          </p>
          <p className="mb-4">
            In the past, I&rsquo;ve had the opportunity to work in diverse
            environments, from large corporations to start-ups, and have gained
            valuable experience in managing group systems, APIs, and integrating
            modern technologies like ReactJS and Node.js. Additionally, I enjoy
            creating personal projects that explore different aspects of web
            development.
          </p>
          <p className="mb-4">
            Outside of work, I&rsquo;m usually at the gym, playing video games,
            reading, or watching TV series and documentaries. Traveling is
            another one of my passions, and I&rsquo;m always looking for new
            adventures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
