import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/submit-button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import DialogSelect from "@/components/dialog-select";
import MemberSelect from "@/components/members-select";
import FormDateInput from "@/components/form-date-input";
import { ChevronRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import { createIssueAction, getProjectMembers } from "./actions";

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

const status = [
  {
    value: "open",
    label: "Not started",
  },
  {
    value: "in_progress",
    label: "In progress",
  },
  {
    value: "done",
    label: "Completed",
  },
  {
    value: "deferred",
    label: "Deferred",
  },
  {
    value: "closed",
    label: "Closed",
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
  {
    value: "documentation",
    label: "Documentation",
  },
  {
    value: "discussion",
    label: "Discussion",
  },
];

export default async function IssuesPage({
  params,
}: {
  params: { id: string };
}) {
  const urlParams = await params;
  const createIssueActionBind = createIssueAction.bind(null, urlParams.id);
  const {
    success,
    data: projectMembers,
    message,
  } = await getProjectMembers(urlParams.id);
  return (
    <div className="w-full h-full">
      <div className="header py-3 px-3 flex justify-between items-start">
        <div className="flex gap-1 items-center text-muted-foreground text-sm">
          <Link href="/protected/projects">Projects</Link>
          <ChevronRight size={15} />
          <h2 className="font-semibold text-black">Giant Octopus Dev</h2>
        </div>
      </div>
      <div className="px-3 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline">Table view</Button>
            <span className="text-xs text-muted-foreground">
              More views coming soon
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Input placeholder="Search" />
            <Dialog>
              <DialogTrigger asChild>
                <Button>Create Issue</Button>
              </DialogTrigger>
              <DialogContent className="left-full !translate-x-[-100%] h-full !rounded-none">
                <DialogHeader>
                  <DialogTitle>Create a new issue</DialogTitle>
                  <DialogDescription>
                    Add a new issue to this project
                  </DialogDescription>
                </DialogHeader>
                <div>
                  <form>
                    <div className="mb-3">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        name="title"
                        placeholder="Type a name for the issue"
                      />
                    </div>
                    <div className="mb-4">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        name="description"
                        placeholder="Describe your issue"
                      />
                    </div>
                    <div className="flex gap-3 mb-4">
                      <div className="flex flex-col flex-1 gap-2">
                        <Label htmlFor="type">Issue type</Label>
                        <DialogSelect
                          data={type}
                          name="type"
                          placeholder="Select an option"
                        />
                      </div>
                      <div className="flex flex-col flex-1 gap-2">
                        <Label htmlFor="priority">Priority</Label>
                        <DialogSelect
                          data={priority}
                          name="priority"
                          placeholder="Select an option"
                        />
                      </div>
                    </div>
                    <div className="mb-2 flex gap-3">
                      <div className="flex-1 flex flex-col gap-2">
                        <Label htmlFor="status">
                          When should this be done by?
                        </Label>
                        <FormDateInput name="due_date" />
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <Label htmlFor="status">Status</Label>
                        <DialogSelect
                          name="status"
                          placeholder="Select an option"
                          data={status}
                        />
                      </div>
                    </div>
                    <div className="mb-2">
                      <Label htmlFor="assigned_to">Assigned to</Label>
                      <MemberSelect
                        name="assigned_to"
                        data={projectMembers}
                        placeholder="Select a member"
                        className="w-full"
                      />
                    </div>
                    <DialogFooter>
                      <Button variant="secondary">Cancel</Button>
                      <SubmitButton formAction={createIssueActionBind}>
                        Add new issue
                      </SubmitButton>
                    </DialogFooter>
                  </form>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
