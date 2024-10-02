"use server"
import { supabase } from "@/lib/supabase";

export default async function createForm(fields:Field[]) {
    try {
        const { data, error } = await supabase
        .from('Form')
        .insert([{ fields }]); 
        if (error) {
            console.error('Error saving form structure:',);
          } else {
            console.log('Form saved successfully:', data);
          }
    } catch (error) {
        console.log(error);
    }
}