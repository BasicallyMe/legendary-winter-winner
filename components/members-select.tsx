"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemText,
  MemberSelectItem,
} from "@/components/ui/select";
import { ChevronsUpDown } from "lucide-react";
import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface DataItem {
  user_id: string;
  email: string;
  first_name: string;
  last_name: string;
}

type Props = ComponentProps<typeof Select> & {
  data?: DataItem[];
  placeholder?: string;
  className?: string;
};

export default function MemberSelect({
  data,
  name,
  placeholder,
  className,
  ...props
}: Props) {
  return (
    <Select name={name}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
        <SelectIcon>
          <ChevronsUpDown size={15} />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent
        className={cn("bg-white min-w-[130px] shadow-lg", className)}
      >
        {data?.map((item) => (
          // <SelectItem
          //   key={item.email}
          //   value={item.user_id}
          //   textValue={`${item.first_name} ${item.last_name}`}
          // >
          //   <div className="flex gap-2">
          //     <Avatar>
          //       <AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/vibrent_6.png" />
          //       <AvatarFallback>{`${item.first_name.charAt(0)} ${item.last_name.charAt(0)}`}</AvatarFallback>
          //     </Avatar>
          //     <div>
          //       <div>{`${item.first_name} ${item.last_name}`}</div>
          //       <div className="text-sm text-muted-foreground">
          //         {item.email}
          //       </div>
          //     </div>
          //   </div>
          // </SelectItem>
          <MemberSelectItem key={item.email} value={item.user_id}>
            <div className="flex gap-2">
              <Avatar>
                <AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/vibrent_6.png" />
                <AvatarFallback>{`${item.first_name.charAt(0)}${item.last_name.charAt(0)}`}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <SelectItemText>{`${item.first_name} ${item.last_name}`}</SelectItemText>
                <span className="text-muted-foreground text-xs">
                  {item.email}
                </span>
              </div>
            </div>
          </MemberSelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
