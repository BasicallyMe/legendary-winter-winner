"use server";

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";

export const createIssueAction = async (formData: FormData) => {
    const data = Object.fromEntries(formData);
    const supabase = await createClient();

    if (Object.keys(data).length === 0) {
        return { error: "Required values missing" };
    }

    const { error } = await supabase.from("issues").insert(data);

    if (error) {
        console.log(`${error.code} ${error.message}`);
        return { success: false, code: error.code, message: error.message };
    } else {
        return { success: true, message: "Issue created" }
    }
    
}