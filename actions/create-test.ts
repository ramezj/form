"use server"
// import { supabase } from "@/lib/supabase";
import prisma from "@/lib/database";

export async function createForm(fields:Field[]) {
    try {
        const data = await prisma.form.create({
            data: {
                content: fields
            }
        })
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export async function GetForm(id: string) {
    try {
        const data = await prisma.form.findFirst({
            where: {
                id: id
            }
        })
        if(!data) return null;
        return {
            form:data,
            fields: data?.content as Field[]
        }
    } catch (error) {
       console.error(error); 
    }
}

export async function handleFormSubmission(formData: FormData) {
    const data: { [ key: string ]: string } = {};
    formData.forEach((value, key) => {
        data[key] = value as string; // Store form fields as key-value pairs
    });
    console.log(data);
    return { success: true, data };
}