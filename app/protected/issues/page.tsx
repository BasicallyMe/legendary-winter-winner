import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function IssuesPage() {
    return (
        <div className="flex-1 w-full h-full">
            <form className="flex flex-col w-96">
                <Input name="title" placeholder="Title" required />
                <Textarea name="description" placeholder="Description" required rows={4} />
            </form>
        </div>
    )
}