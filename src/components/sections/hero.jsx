"use client";

import React from "react";
import dynamic from "next/dynamic";
import { toast } from "sonner";

import { FaArrowRight } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { TooltipAnchor } from "@/components/ui/link-tooltip";
import Avatar from "@/components/avatar";
import BirthdayConfetti from "@/components/birthday-confetti";
import GitHubContributions from "@/components/github-contributions";

const BIRTHDAY_MODE_EVENT = "portfolio:birthday-mode";

// Register the console helper as soon as the client bundle is evaluated. The
// previous effect-only registration could be unavailable briefly during
// production hydration.
if (typeof window !== "undefined") {
  window.setBirthdayMode = (enabled = true) => {
    window.dispatchEvent(
      new CustomEvent(BIRTHDAY_MODE_EVENT, {
        detail: Boolean(enabled),
      }),
    );

    return enabled ? "Birthday mode enabled 🎂" : "Birthday mode disabled";
  };
}

const getBirthdayDetails = () => {
  const dateParts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  })
    .formatToParts(new Date())
    .reduce((parts, part) => {
      if (part.type !== "literal") {
        parts[part.type] = Number(part.value);
      }

      return parts;
    }, {});

  const birthdayHasPassed =
    dateParts.month > 6 || (dateParts.month === 6 && dateParts.day >= 14);

  return {
    isBirthday: dateParts.month === 6 && dateParts.day === 14,
    level: dateParts.year - 1998 - (birthdayHasPassed ? 0 : 1),
  };
};

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
  const birthday = getBirthdayDetails();
  const [birthdayPreview, setBirthdayPreview] = React.useState(false);
  const showBirthday = birthday.isBirthday || birthdayPreview;

  React.useEffect(() => {
    const handleBirthdayMode = (event) => {
      setBirthdayPreview(Boolean(event.detail));
    };

    window.addEventListener(BIRTHDAY_MODE_EVENT, handleBirthdayMode);

    return () => window.removeEventListener(BIRTHDAY_MODE_EVENT, handleBirthdayMode);
  }, []);

  const handleScheduleMeeting = () => {
    toast.info("Opening Calendly", {
      description: "Choose a convenient 30-minute time slot.",
    });
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
      <section className="relative isolate grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
        {showBirthday && <BirthdayConfetti />}
        <div className="relative z-10 order-2 min-w-0 md:order-1 md:max-w-[560px]">
          <div className="mb-7 flex flex-col text-center md:text-start">
            <p
              className="mb-3 font-space text-xs font-bold uppercase tracking-[0.16em] text-primary/55"
              role={showBirthday ? "status" : undefined}
            >
              {showBirthday ? (
                <>
                  Happy Cake Day! You&rsquo;ve unlocked Level {birthday.level}{" "}
                  <span aria-hidden="true">🎂</span>
                </>
              ) : (
                "AI & Software Engineer"
              )}
            </p>
            <h1 className="text-5xl font-bold leading-none tracking-[-0.04em] sm:text-6xl md:text-[4.75rem]">
              Ralph Ortiz
            </h1>
            <p className="mt-5 font-space text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">
              I turn practical ideas into digital products made for everyday
              use.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="md:flex-1">
              <ContactDialog />
            </div>
            <Button size="lg" className="w-full md:flex-1 md:basis-0" asChild>
              <TooltipAnchor
                href="https://calendly.com/ralphortiz/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleScheduleMeeting}
                tooltip="Schedule a 30-minute meeting"
              >
                Schedule a meeting <FaArrowRight className="ml-2" size="14px" />
              </TooltipAnchor>
            </Button>
          </div>
        </div>
        <div className="relative z-10 order-1 mx-auto md:order-2 md:mr-8">
          <Avatar />
        </div>
      </section>
      <section aria-labelledby="about-heading" className="space-y-6">
        <div>
          <h2 id="about-heading" className="mb-4 font-space text-xl font-bold">
            About
          </h2>
          <p className="mb-4 text-primary/75">
            I&rsquo;m an AI &amp; Software Engineer building reliable,
            accessible digital products through thoughtful UX, robust
            engineering, and practical AI. At{" "}
            <TooltipAnchor
              href="https://asia.viseo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-space font-bold text-primary"
              tooltip="Visit VISEO Asia website"
              tooltipSide="top"
            >
              VISEO Asia,
            </TooltipAnchor>{" "}
            I work across Shopify storefronts, custom apps, APIs, and
            automation.
          </p>
        </div>
      </section>
      <GitHubContributions />
    </div>
  );
};

export default Hero;
