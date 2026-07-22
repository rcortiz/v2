"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { FaCheck, FaChevronDown } from "react-icons/fa6";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-11 w-full items-center justify-between rounded-base border-2 border-primary bg-background px-3 py-2 font-inter text-sm shadow-[2px_2px_0_0_hsl(var(--primary))] transition-[box-shadow,transform] focus-visible:-translate-x-px focus-visible:-translate-y-px focus-visible:shadow-[3px_3px_0_0_hsl(var(--primary))] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground aria-[invalid=true]:border-destructive",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <FaChevronDown className="ml-3 shrink-0" size="13px" aria-hidden="true" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef(
  ({ className, children, position = "popper", ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        position={position}
        sideOffset={6}
        className={cn(
          "relative z-[100] max-h-72 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-base border-2 border-primary bg-background text-primary shadow-[4px_4px_0_hsl(var(--primary))] data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          className,
        )}
        {...props}
      >
        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  ),
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center py-2 pl-8 pr-3 font-inter text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 grid h-4 w-4 place-items-center">
      <SelectPrimitive.ItemIndicator>
        <FaCheck size="12px" aria-hidden="true" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };
