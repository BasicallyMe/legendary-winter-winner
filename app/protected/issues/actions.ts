"use server";

export const createIssueAction = async (formData: FormData) => {
    const data = Object.fromEntries(formData);
    console.log('data', data);
}