"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ChevronsUpDown } from "lucide-react";
import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface DataItem {
  value: string;
  label: string;
}

type Props = ComponentProps<typeof Select> & {
  data?: DataItem[];
  placeholder?: string;
  className?: string;
};

export default function DialogSelect({
  data,
  name,
  placeholder,
  className,
  ...props
}: Props) {
  return (
    <Select name={name}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
        <SelectIcon>
          <ChevronsUpDown size={15} />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent className={cn("bg-white min-w-[130px] shadow-lg", className)}>
        {data?.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
