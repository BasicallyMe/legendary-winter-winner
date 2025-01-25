"use client"

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function FormDateInput({ name }: { name: string }) {
  const [month, setMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [inputValue, setInputValue] = useState("");

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      setMonth(date);
      setInputValue(date.toISOString())
    }
  }

  return (
    <Popover modal={true}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "pl-3 text-left font-normal",
            !selectedDate && "text-muted-foreground"
          )}
        >
          {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
          <CalendarIcon className="ml-auto opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          month={month}
          onMonthChange={setMonth}
          selected={selectedDate}
          onSelect={handleDayPickerSelect}
          initialFocus
        />
      </PopoverContent>
      <input type="hidden" name={name} value={inputValue} />
    </Popover>
  )
}
