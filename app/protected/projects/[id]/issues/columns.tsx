"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Issue = {
    id: string
    title: string
    description: string
    status: "open" | "in_progress" | "done" | "deferred" | "closed"
    priority: "low" | "medium" | "high" | "critical"
    type: "bug" | "feature" | "improvement" | "review" | "documentation" | "discussion"
    due_date: string
    assigned_to: string
    created_by: string
}