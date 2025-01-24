import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SubmitButton } from "@/components/submit-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { EllipsisVertical } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";
import { Separator } from "@/components/ui/separator";
import { createProjectAction, getProjectsAction } from "./actions";

export default async function ProjectsPage() {
  const { success, projects } = await getProjectsAction();

  return (
    <div className="w-full h-full">
      <div className="header flex justify-between items-start px-3 py-3 mb-7">
        <h2 className="font-semibold">Projects</h2>
        <div className="flex gap-2">
          <Button variant="outline">Sort by</Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Create Project</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create a new project</DialogTitle>
                <DialogDescription>
                  Type a project name and description, add a few members and
                  you're good to go
                </DialogDescription>
              </DialogHeader>
              <div>
                <form className="flex flex-col gap-4">
                  <div>
                    <Label htmlFor="name">Project name*</Label>
                    <Input
                      type="text"
                      name="name"
                      required
                      placeholder="Giant Octopus Dev"
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Project description</Label>
                    <Textarea
                      rows={4}
                      name="description"
                      placeholder="Tracking all the issues while creating this giant octopus"
                    />
                  </div>
                  <Separator />
                  <div>
                    <Label>Members</Label>
                    <div className="mt-2">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add members by name or email"
                          className="mb-1"
                        />
                        <Button>Add member</Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        You'll be added as a member of this project by default
                      </p>
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <SubmitButton
                      formAction={createProjectAction}
                      pendingText="Creating"
                    >
                      Create
                    </SubmitButton>
                  </DialogFooter>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="px-3 py-3">
        <table className="w-full">
          <tbody>
            {projects?.map((project) => (
              <tr key={project.id} className="grid-cols-6">
                <td className="py-3 col-span-3">
                  <Button variant="link" asChild className="py-0 px-0">
                    <Link href={`/protected/projects/${project.id}/issues`}>
                      {project.name}
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </td>
                <td className="col-span-1">
                  <span className="text-sm">Abajit Dey</span>
                  <p className="text-muted-foreground text-xs">
                    abajitdey@devflow.com
                  </p>
                </td>
                <td className="col-span-1">
                  <span className="text-sm">5 members</span>
                </td>
                <td className="col-span-1">
                  <Button variant="ghost">
                    <EllipsisVertical size={15} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
