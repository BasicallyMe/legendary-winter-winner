"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;
// const SelectTrigger = SelectPrimitive.Trigger;
const SelectValue = SelectPrimitive.Value;
const SelectIcon = SelectPrimitive.Icon;
const SelectPortal = SelectPrimitive.Portal;
const SelectContent = SelectPrimitive.Content;
const SelectViewport = SelectPrimitive.Viewport;
const SelectGroup = SelectPrimitive.Group;

const SelectTrigger = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, forwardedRef ) => (
    <SelectPrimitive.Trigger {...props} ref={forwardedRef} className={cn("flex-1 inline-flex items-center border rounded-md")}>
        {children}
    </SelectPrimitive.Trigger>
))

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, forwardedRef) => (
  <SelectPrimitive.Item {...props} ref={forwardedRef}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator>
        <Check />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));

SelectItem.displayName = SelectPrimitive.Item.displayName;

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
}
