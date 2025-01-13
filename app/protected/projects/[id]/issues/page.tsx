import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/submit-button";
import { FormSelect } from "@/components/form-select";
import { createIssueAction } from "./actions";

const priority = [
  {
    value: "low",
    label: "Low",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "high",
    label: "High",
  },
];

const type = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "improvement",
    label: "Improvement",
  },
  {
    value: "review",
    label: "Review",
  },
];

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
          <FormSelect
            name="priority"
            placeholder="Select a priority"
            data={priority}
          />
          <FormSelect name="type" placeholder="Select a type" data={type} />
        </div>
        <SubmitButton formAction={createIssueAction} pendingText="Creating...">
          Create Issue
        </SubmitButton>
      </form>
    </div>
  );
}
