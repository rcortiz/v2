"use client";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import NavigationBar from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import CommandPalette from "@/components/layout/command-palette";

import "./globals.css";
import { inter, roboto, ceraRoundPro } from "@/utils/fonts";
import { useCommandPaletteStore } from "@/store/store";

export default function RootLayout({ children }) {
  const { toggle } = useCommandPaletteStore();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        ((e.metaKey || e.ctrlKey) && e.key === "k") ||
        ((e.metaKey || e.ctrlKey) && e.key === "K")
      ) {
        e.preventDefault();
        toggle();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggle]);

  return (
    <html lang="en" className="dark">
      <body className={`${inter} ${roboto} ${ceraRoundPro}`}>
        <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
          <NavigationBar />
          <main>{children}</main>
          <Toaster />
          <CommandPalette />
          <div className="flex justify-center pb-6">
            <p className="text-xs text-primary/70">
              Press
              <code
                className="mx-2 cursor-pointer rounded bg-gray-200 px-2 py-1 text-gray-800"
                onClick={toggle}
              >
                Ctrl + K
              </code>
              to open command palette
            </p>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
