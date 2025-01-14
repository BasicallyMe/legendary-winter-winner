"use server";

import { createClient } from "@/utils/supabase/server";
import { count } from "console";

interface ProjectData {
  name: string;
  description: string;
  created_by: string;
  id: string;
}

export const createProjectAction = async (formData: FormData) => {
  const parsedFormData = Object.fromEntries(formData);
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (Object.keys(parsedFormData).length === 0) {
    return { error: "Required values missing" };
  }

  const { data: project, error: projectError } = await supabase
    .from("projects")
    .insert(parsedFormData)
    .select("id")
    .limit(1)
    .single();

  if (projectError) {
    console.log(`${projectError} ${projectError.code} ${projectError.message}`);
    return {
      success: false,
      code: projectError.code,
      message: projectError.message,
    };
  }
  const project_id = project.id;
  const memberData = {
    user_id: user?.id,
    project_id
  };

  const { error: errorMember } = await supabase.from("project_members").insert(memberData)

  if (errorMember) {
    return { success: false, code: errorMember.code, message: errorMember.message }
  } else {
    return { success: true, message: "Project created" }
  }

  // return { success: true, message: "Project created"}
};
