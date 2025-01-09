import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/submit-button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { ChevronsUpDown } from "lucide-react";
import { createIssueAction } from "./actions";

export default function IssuesPage() {
  return (
    <div className="flex-1 w-full h-full">
      <form className="flex flex-col gap-3 w-96">
        <Input name="title" placeholder="Title" required />
        <Textarea
          name="description"
          placeholder="Description"
          required
          rows={4}
        />
        <div className="flex gap-3">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a priority" />
              <SelectIcon>
                <ChevronsUpDown size={15} />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </SelectPortal>
          </Select>
        </div>
        <SubmitButton formAction={createIssueAction} pendingText="Creating...">
          Create Issue
        </SubmitButton>
      </form>
    </div>
  );
}
