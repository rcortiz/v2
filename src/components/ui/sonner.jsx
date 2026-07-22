"use client";

import { Toaster as Sonner } from "sonner";

const Toaster = (props) => {
  return (
    <Sonner
      position="bottom-right"
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "!rounded-base !border-2 !border-primary !bg-background !text-foreground !shadow-dark dark:!shadow-light",
          title: "!font-cera !font-bold",
          description: "!font-inter !text-foreground/70",
          closeButton:
            "!border-2 !border-primary !bg-background !text-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
