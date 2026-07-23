"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import {
  FaArrowUpRightFromSquare,
  FaDiscord,
  FaMinus,
  FaXmark,
  SiKick,
} from "@/components/icons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useCommandPaletteStore } from "@/store/store";

const factGroups = [
  {
    name: "Fun facts",
    items: [
      {
        id: "location",
        label: "Based in",
        value: "Manila, Philippines",
        keywords: "location home philippines manila",
      },
      {
        id: "games",
        label: "Games in rotation",
        value: "Dota 2 · Valorant · Tekken 8",
        keywords: "gaming games dota valorant tekken tekken 8",
      },
      {
        id: "dota-heroes",
        label: "Favorite Dota heroes",
        value: "Axe · Slardar · Beastmaster",
        keywords:
          "dota dota 2 favorite favourite heroes axe slardar beastmaster",
        hiddenInitially: true,
      },
      {
        id: "dota-role",
        label: "Dota role",
        value: "Offlane (Pos 3)",
        keywords: "dota dota 2 role position pos 3 position 3 offlane offlaner",
        hiddenInitially: true,
      },
      {
        id: "valorant-agents",
        label: "Favorite Valorant agents",
        value: "Phoenix · Reyna",
        keywords: "valorant favorite favourite agents characters phoenix reyna",
        hiddenInitially: true,
      },
      {
        id: "valorant-guns",
        label: "Favorite Valorant guns",
        value: "Phantom · Vandal · Frenzy",
        keywords:
          "valorant favorite favourite guns weapons phantom vandal frenzy",
        hiddenInitially: true,
      },
      {
        id: "dota-rank",
        label: "Dota 2 rank",
        value: "Currently Ancient 2",
        keywords:
          "dota rank dota 2 rank what is my dota rank current currently ancient 2 mmr",
        hiddenInitially: true,
      },
      {
        id: "valorant-rank",
        label: "Valorant rank",
        value: "Currently Silver 3",
        keywords:
          "valorant rank what is my valorant rank current currently silver 3 competitive",
        hiddenInitially: true,
      },
      {
        id: "birthday",
        label: "My birthday is",
        value: "----- -.... / .---- ....- / .---- ----. ----. ---..",
        keywords:
          "birthday birth date born june 14 1998 when is my birthday morse signal",
        hiddenInitially: true,
      },
      {
        id: "age",
        label: "My current age is",
        value: "..--- ---..",
        keywords: "age years old 28 how old am i morse signal",
        hiddenInitially: true,
      },
      {
        id: "zodiac",
        label: "My star sign is",
        value: "--. . -- .. -. ..",
        keywords: "zodiac star sign horoscope gemini morse signal",
        hiddenInitially: true,
      },
      {
        id: "pc",
        label: "PC setup",
        value: "AMD R5 5600 · RTX 4060 Ti · 16 GB · 2 TB SSD",
        keywords:
          "device desktop computer pc setup hardware amd ryzen r5 5600 nvidia rtx 4060 ti 16gb ram 2tb ssd",
      },
      {
        id: "peripherals",
        label: "Peripherals",
        value: "LAMZU OG V2 4K · MONSGEEK M1",
        keywords:
          "peripherals mouse keyboard lamzu og v2 4k monsgeek m1 setup gear",
      },
      {
        id: "builds",
        label: "What I like building",
        value: "Websites · Keyboards",
        keywords: "builds building websites web keyboards",
      },
      {
        id: "off-screen",
        label: "Away from keyboard",
        value: "Traveling · Gaming · Exploring coffee shops",
        keywords: "hobbies travel games gaming coffee shops",
      },
    ],
  },
];

const CommandPalette = () => {
  const { isOpen, toggle, open, close } = useCommandPaletteStore();
  const router = useRouter();
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const groups = useMemo(
    () => [
      {
        name: "Important shortcuts",
        items: [
          {
            id: "resume",
            label: "Open résumé",
            value: "PDF · latest version",
            keywords: "resume cv download print work history",
            action: () =>
              window.open(
                "/Ralph Ortiz - Full Stack Engineer (Latest).pdf",
                "_blank",
                "noopener,noreferrer",
              ),
          },
          {
            id: "projects",
            label: "View projects",
            value: "/projects",
            keywords: "navigate work portfolio projects",
            action: () => router.push("/projects"),
          },
          {
            id: "experience",
            label: "View experience",
            value: "/experience",
            keywords: "navigate career jobs experience",
            action: () => router.push("/experience"),
          },
          {
            id: "certifications",
            label: "View certifications",
            value: "/certifications",
            keywords: "navigate certifications credentials aws shopify scrum",
            action: () => router.push("/certifications"),
          },
        ],
      },
      ...factGroups,
      {
        name: "Elsewhere",
        items: [
          {
            id: "kick",
            label: "Kick Stream",
            value: "@solacexyz",
            keywords: "social streaming stream kick solacexyz",
            icon: SiKick,
            iconClassName: "h-3.5 w-3.5",
            action: () =>
              window.open(
                "https://kick.com/solacexyz",
                "_blank",
                "noopener,noreferrer",
              ),
          },
          {
            id: "discord",
            label: "Discord",
            value: "solacexyz_",
            keywords: "social discord username id solacexyz",
            icon: FaDiscord,
            iconClassName: "h-[18px] w-[18px]",
          },
        ],
      },
    ],
    [router],
  );

  const filteredGroups = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return groups
        .map((group) => ({
          ...group,
          items: group.items.filter((item) => !item.hiddenInitially),
        }))
        .filter((group) => group.items.length > 0);
    }

    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          `${item.label} ${item.value} ${item.keywords}`
            .toLowerCase()
            .includes(normalizedQuery),
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [groups, query]);

  const filteredItems = filteredGroups.flatMap((group) => group.items);
  const activeItem = filteredItems[activeIndex];

  const runItem = (item) => {
    if (!item?.action) return;
    item.action();
    close();
  };

  const handleKeyDown = (event) => {
    if (!filteredItems.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % filteredItems.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex(
        (index) => (index - 1 + filteredItems.length) % filteredItems.length,
      );
    } else if (event.key === "Enter" && activeItem?.action) {
      event.preventDefault();
      runItem(activeItem);
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (event) => {
      if (event.altKey && event.key.toLowerCase() === "p") {
        event.preventDefault();
        toggle();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [toggle]);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => inputRef.current?.focus());
      return;
    }

    setQuery("");
    setActiveIndex(0);
  }, [isOpen]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  return (
    <>
      {!isOpen && (
        <div className="relative z-40 my-4 flex justify-center sm:fixed sm:bottom-4 sm:left-1/2 sm:my-0 sm:-translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.94 }}
            animate={{
              opacity: [0, 1, 1],
              y: [10, 0, 0],
              scale: [0.94, 1.06, 1],
            }}
            transition={{
              duration: 1.1,
              delay: 0.35,
              times: [0, 0.6, 1],
              ease: "easeOut",
            }}
          >
            <button
              type="button"
              onClick={open}
              className="flex items-center gap-2 px-1 py-1 font-space text-[11px] font-medium text-primary opacity-40 transition-[opacity,transform] hover:-translate-y-0.5 hover:opacity-100 focus-visible:-translate-y-0.5 focus-visible:underline focus-visible:underline-offset-4 focus-visible:opacity-100 focus-visible:outline-none"
              aria-label="Open personal search with Alt plus P"
            >
              <span>Ask anything</span>
              <kbd
                className="rounded-base border-2 border-primary px-1.5 py-0.5 font-inter text-[9px] text-primary"
                aria-hidden="true"
              >
                Alt + P
              </kbd>
            </button>
          </motion.div>
        </div>
      )}

      <Dialog open={isOpen} onOpenChange={(nextOpen) => !nextOpen && close()}>
        <DialogContent
          hideClose
          overlayClassName="bg-background/30 backdrop-blur-xl"
          className="!inset-0 !flex !h-[100dvh] !w-auto !max-w-none !translate-x-0 !translate-y-0 !flex-col !gap-0 !overflow-hidden !rounded-none !border-0 !bg-transparent !p-0 !shadow-none"
        >
          <DialogClose className="absolute right-5 top-4 z-10 grid h-8 w-8 place-items-center rounded-base border-2 border-primary bg-background/80 text-primary shadow-[2px_2px_0_hsl(var(--primary))] backdrop-blur-md transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:right-8 lg:right-12">
            <FaXmark size="16px" aria-hidden="true" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="flex-1 overflow-y-auto px-4 py-20 sm:px-8 sm:py-24 lg:px-12">
            <div className="mx-auto w-full max-w-7xl">
              <DialogHeader className="mb-12 text-left sm:mb-16">
                <DialogTitle className="sr-only">
                  Search Ralph&rsquo;s portfolio
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Search personal facts and important portfolio shortcuts.
                </DialogDescription>
                <Input
                  ref={inputRef}
                  type="text"
                  role="combobox"
                  aria-label="Search portfolio shortcuts and personal facts"
                  aria-autocomplete="list"
                  aria-expanded={isOpen}
                  aria-controls="personal-index-results"
                  aria-activedescendant={
                    activeItem ? `personal-index-${activeItem.id}` : undefined
                  }
                  placeholder="Curious about me? Ask away."
                  autoComplete="off"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={handleKeyDown}
                  className="!h-auto !min-w-0 !max-w-full !rounded-none !border-0 !bg-transparent !px-0 !py-0 !font-space !text-xl !font-medium !leading-tight !shadow-none placeholder:!text-primary/45 focus-visible:!translate-x-0 focus-visible:!translate-y-0 focus-visible:!shadow-none sm:!text-5xl lg:!text-7xl"
                />
              </DialogHeader>

              <div
                id="personal-index-results"
                role="listbox"
                aria-label="Personal facts and important shortcuts"
                className="max-w-4xl"
              >
                {filteredGroups.length ? (
                  filteredGroups.map((group) => {
                    const groupId = `personal-index-group-${group.name
                      .toLowerCase()
                      .replaceAll(" ", "-")}`;

                    return (
                      <section
                        key={group.name}
                        aria-labelledby={groupId}
                        className="mb-12 last:mb-0"
                      >
                        <h3
                          id={groupId}
                          className="mb-4 font-space text-[10px] font-bold uppercase tracking-[0.18em] text-primary/40"
                        >
                          {group.name}
                        </h3>
                        <div className="space-y-1">
                          {group.items.map((item) => {
                            const itemIndex = filteredItems.findIndex(
                              ({ id }) => id === item.id,
                            );
                            const isActive = itemIndex === activeIndex;
                            const ItemIcon = item.icon;

                            return (
                              <button
                                id={`personal-index-${item.id}`}
                                key={item.id}
                                type="button"
                                role="option"
                                aria-selected={isActive}
                                onMouseDown={(event) => event.preventDefault()}
                                onMouseEnter={() => setActiveIndex(itemIndex)}
                                onFocus={() => setActiveIndex(itemIndex)}
                                onClick={() =>
                                  item.action
                                    ? runItem(item)
                                    : setActiveIndex(itemIndex)
                                }
                                className={`grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-2.5 text-left transition-[color,opacity,transform] sm:py-3 ${
                                  isActive
                                    ? "translate-x-1 text-primary opacity-100"
                                    : "text-primary opacity-45 hover:opacity-75"
                                }`}
                              >
                                <span className="min-w-0">
                                  <span className="block font-space text-base font-semibold sm:text-xl">
                                    {item.label}
                                  </span>
                                  <span className="block truncate font-inter text-xs text-primary/55 sm:text-sm">
                                    {item.value}
                                  </span>
                                </span>
                                <span aria-hidden="true">
                                  {ItemIcon ? (
                                    <span className="grid h-5 w-5 place-items-center">
                                      <ItemIcon
                                        className={item.iconClassName}
                                      />
                                    </span>
                                  ) : item.action ? (
                                    <FaArrowUpRightFromSquare
                                      className="h-3 w-3"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <FaMinus
                                      className="h-3 w-3"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </section>
                    );
                  })
                ) : (
                  <div>
                    <p className="font-space text-xl font-semibold">
                      Nothing found.
                    </p>
                    <p className="mt-1 text-sm text-primary/55">
                      Try games, résumé, work, or projects.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 font-inter text-[10px] text-primary/50 sm:px-8 lg:px-12">
            <span className="flex items-center gap-4">
              <span>
                <kbd className="mr-1 rounded-base border-2 border-primary px-1.5 py-0.5 text-primary">
                  ↑ ↓
                </kbd>
                navigate
              </span>
              {activeItem?.action && (
                <span>
                  <kbd className="mr-1 rounded-base border-2 border-primary px-1.5 py-0.5 text-primary">
                    Enter
                  </kbd>
                  open
                </span>
              )}
            </span>
            <span>
              <kbd className="mr-1 rounded-base border-2 border-primary px-1.5 py-0.5 text-primary">
                Esc
              </kbd>
              close
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CommandPalette;
