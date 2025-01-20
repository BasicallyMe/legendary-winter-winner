"use server";

import { createClient } from "@/utils/supabase/server";

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
    project_id,
  };

  const { error: errorMember } = await supabase
    .from("project_members")
    .insert(memberData);

  if (errorMember) {
    return {
      success: false,
      code: errorMember.code,
      message: errorMember.message,
    };
  } else {
    return { success: true, message: "Project created" };
  }
};


interface Project {
  id: string;
  name: string;
  description: string;
}

export const getProjectsAction = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("project_members")
    .select(`projects(id, name, description)`)
    .eq("user_id", user?.id);

  if (error) {
    return {
      success: false,
      error: error.code,
      message: error.message,
    };
  } else {
    const parsedData: Project[] = data.flatMap((item) => item.projects);
    return { success: true, projects: parsedData, message: "Data fetched successfully" };
  }
};