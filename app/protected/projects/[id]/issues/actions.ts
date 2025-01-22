"use server";

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";

export const createIssueAction = async (project_id: string, formData: FormData) => {
    const parsedData = Object.fromEntries(formData);
    const supabase = await createClient();

    if (Object.keys(parsedData).length === 0) {
        return { error: "Required values missing" };
    }
    parsedData["project_id"] = project_id;
    
    const { error } = await supabase.from("issues").insert(parsedData);

    // if (error) {
    //     console.log(`${error.code} ${error.message}`);
    //     return { success: false, code: error.code, message: error.message };
    // } else {
    //     return { success: true, message: "Issue created" }
    // }
    
}

export const getProjectMembers = async (project_id: string) => {
    const supabase = await createClient();
     
}