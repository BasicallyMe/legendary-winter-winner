"use server";

import { createClient } from "@/utils/supabase/server";

export const createIssueAction = async (
  project_id: string,
  formData: FormData
) => {
  const parsedData = Object.fromEntries(formData);
  const supabase = await createClient();

  if (Object.keys(parsedData).length === 0) {
    return { error: "Required values missing" };
  }
  parsedData["project_id"] = project_id;

  const { error } = await supabase.from("issues").insert(parsedData);

  if (error) {
    console.log(`${error.code} ${error.message}`);
    return { success: false, code: error.code, message: error.message };
  } else {
    return { success: true, message: "Issue created" };
  }
};

export const getProjectMembers = async (project_id: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("project_members_details")
    .select("user_id, email, first_name, last_name")
    .eq("project_id", project_id);

  if (error) {
    console.log(error.code + " " + error.message);
    return {
      success: false,
      code: error.code,
      message: error.message,
    };
  } else {
    return { success: true, message: "Data fetched successfully", data };
  }
};

export const getAllIssues = async (project_id: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("issues")
    .select()
    .eq("projet_id", project_id);

  if (error) {
    console.log(error.code + " " + error.message);
    return {
      success: false,
      code: error.code,
      message: error.message,
    };
  } else {
    return { success: true, message: "Data fetched successfully", data };
  }
};
