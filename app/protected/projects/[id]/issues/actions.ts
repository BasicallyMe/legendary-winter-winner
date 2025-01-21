"use server";

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";

export const createIssueAction = async (project_id: string, formData: FormData) => {
    const parsedData = Object.fromEntries(formData);
    const supabase = await createClient();

    if (Object.keys(parsedData).length === 0) {
        return { error: "Required values missing" };
    }

    console.log(parsedData)

    // const { error } = await supabase.from("issues").insert(data);

    // if (error) {
    //     console.log(`${error.code} ${error.message}`);
    //     return { success: false, code: error.code, message: error.message };
    // } else {
    //     return { success: true, message: "Issue created" }
    // }
    
}