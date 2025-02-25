"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;
// const SelectTrigger = SelectPrimitive.Trigger;
const SelectValue = SelectPrimitive.Value;
const SelectPortal = SelectPrimitive.Portal;
const SelectContent = SelectPrimitive.Content;
const SelectViewport = SelectPrimitive.Viewport;
const SelectGroup = SelectPrimitive.Group;
const SelectItemText = SelectPrimitive.ItemText;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, forwardedRef) => (
  <SelectPrimitive.Trigger
    {...props}
    ref={forwardedRef}
    className={cn(
      "flex-1 inline-flex items-center justify-between px-3 py-2 h-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border rounded-md",
      className
    )}
  >
    {children}
  </SelectPrimitive.Trigger>
));

const SelectIcon = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Icon>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Icon>
>(({ className, children, ...props }, forwardedRef) => (
  <SelectPrimitive.Icon
    className={cn("text-gray-400")}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </SelectPrimitive.Icon>
));

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, forwardedRef) => (
  <SelectPrimitive.Item
    className={cn(
      "py-2 px-3 flex items-center text-sm rounded-md hover:outline-none hover:bg-gray-300",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <SelectPrimitive.ItemIndicator>
      <Check size={15} />
    </SelectPrimitive.ItemIndicator>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));

SelectItem.displayName = SelectPrimitive.Item.displayName;

const MemberSelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, forwardedRef) => (
  <SelectPrimitive.Item
    className={cn(
      "py-2 px-3 flex items-center text-sm rounded-md hover:outline-none hover:bg-gray-300",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </SelectPrimitive.Item>
));

MemberSelectItem.displayName = SelectPrimitive.Item.displayName;

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectGroup,
  SelectItem,
  SelectItemText,
  MemberSelectItem,
};
