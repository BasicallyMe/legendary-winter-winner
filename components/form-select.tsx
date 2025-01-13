"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectItem,
} from "@/components/ui/select";
import { ChevronsUpDown } from "lucide-react";
import { type ComponentProps } from "react";

interface DataItem {
  value: string;
  label: string;
}

type Props = ComponentProps<typeof Select> & {
  data?: DataItem[];
  placeholder?: string;
};

export function FormSelect({
  children,
  name,
  data,
  placeholder,
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
      <SelectPortal>
        <SelectContent className="bg-white px-1 py-1 shadow-md rounded-md border">
          <SelectViewport>
            {data?.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}
