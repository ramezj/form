"use server"
// import { supabase } from "@/lib/supabase";
import prisma from "@/lib/database";

export async function createForm(fields:Field[]) {
    try {
        const data = await prisma.form.create({
            data: {
                fields: fields
            }
        });
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
       const fields = data?.fields ? JSON.parse(data.fields) : [];
    } catch (error) {
        console.log(error);
    }
}