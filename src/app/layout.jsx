"use client";

import { Toaster } from "@/components/ui/toaster";
import NavigationBar from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import CommandPalette from "@/components/layout/command-palette";

import "./globals.css";
import { inter, fira, ceraRoundPro } from "@/utils/fonts";
import { useCommandPalette } from "@/hooks/useCommandPalette";

export default function RootLayout({ children }) {
  useCommandPalette();

  return (
    <html lang="en" className="dark">
      <body className={`${inter} ${fira} ${ceraRoundPro}`}>
        <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
          <NavigationBar />
          <main>{children}</main>
          <Toaster />
          <CommandPalette />
          <div className="flex justify-center pb-6">
            <p className="text-xs text-primary/70">
              Press
              <code className="mx-2 rounded bg-gray-200 px-2 py-1 text-gray-700">
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
