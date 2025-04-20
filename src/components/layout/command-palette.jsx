"use client";

import { useState, useEffect, useRef } from "react";

import { Input } from "../ui/input";
import { useCommandPaletteStore } from "@/store/store";

import { FaXmark, FaMagnifyingGlass } from "react-icons/fa6";

const CommandPalette = () => {
  const { isOpen, close } = useCommandPaletteStore();
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const commands = [
    {
      name: "Actions",
      commands: [
        {
          id: "print",
          label: "Print",
          shortcut: { key: "P", modifier: "Ctrl" },
          action: () => {
            window.print();
            close();
          },
        },
      ],
    },
    {
      name: "Social",
      commands: [
        {
          id: "linkedin",
          label: "Visit LinkedIn",
          shortcut: { key: "L", modifier: "Ctrl" },
          action: () => {
            window.open("https://www.linkedin.com/in/ralphortiz/", "_blank");
            close();
          },
        },
        {
          id: "github",
          label: "Visit GitHub",
          shortcut: { key: "G", modifier: "Ctrl" },
          action: () => {
            window.open("https://github.com/rcortiz", "_blank");
            close();
          },
        },
      ],
    },
  ];

  const filteredCommands =
    query.length > 0
      ? commands
          .map((group) => ({
            ...group,
            commands: group.commands.filter((cmd) =>
              cmd.label.toLowerCase().includes(query.toLowerCase()),
            ),
          }))
          .filter((group) => group.commands.length > 0)
      : commands;

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    const filteredCommand = filteredCommands.flatMap((cmd) => cmd.commands);

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((activeIndex + 1) % filteredCommand.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex(
          (activeIndex - 1 + filteredCommand.length) % filteredCommand.length,
        );
        break;
      case "Enter":
        e.preventDefault();
        if (filteredCommand[activeIndex]) {
          filteredCommand[activeIndex].action();
        }
        break;
      case "Escape":
        e.preventDefault();
        close();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }

    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        close();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setActiveIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg overflow-hidden rounded-lg border border-white bg-background px-6 pb-6 pt-8 shadow-lg">
        <div
          className="absolute right-2 top-2 cursor-pointer"
          aria-label="Close command palette"
        >
          <FaXmark
            size="16px"
            className="opacity-60 hover:opacity-100"
            onClick={close}
          />
        </div>

        <div className="relative">
          <Input
            type="text"
            placeholder="Search commands..."
            name="search"
            ref={inputRef}
            className="w-full px-8 outline-none"
            autoComplete="off"
            onKeyDown={handleKeyDown}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value), setActiveIndex(0);
            }}
          />
          <FaMagnifyingGlass
            className="absolute left-3 top-1/2 -translate-y-1/2 transform"
            size="14px"
          />
        </div>

        <div className="overflow-y-auto px-4 py-6 text-sm">
          {filteredCommands.map((command, commandIndex) => (
            <div key={commandIndex} className="pb-2">
              <h3 className="pb-2">{command.name}</h3>
              {command.commands.map((command) => {
                return (
                  <div
                    key={command.id}
                    className={`flex cursor-pointer items-center justify-between`}
                    onClick={command.action}
                  >
                    <div className="flex items-center text-primary/75">
                      <span>{command.label}</span>
                    </div>
                    {command.shortcut && (
                      <div className="flex items-center pb-2">
                        <code className="rounded bg-gray-200 px-2 py-1 text-xs text-gray-800">
                          {command.shortcut.modifier} + {command.shortcut.key}
                        </code>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-primary px-4 py-2 text-sm text-primary md:flex-row md:gap-0">
          <div className="flex items-center">
            <span className="mr-2">&#8629;</span>
            <span>to select</span>

            <span className="mx-2 flex items-center">
              <span className="mx-1">&uarr;</span>
              <span className="mx-1">&darr;</span>
            </span>
            <span>to navigate</span>
          </div>

          <div className="flex items-center">
            <code className="rounded bg-gray-200 px-2 py-1 text-sm text-xs text-gray-800">
              Ctrl + K
            </code>
            <span className="mx-2">|</span>
            <code className="rounded bg-gray-200 px-2 py-1 text-sm text-xs text-gray-800">
              Escape
            </code>
            <span className="ml-2">to close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
