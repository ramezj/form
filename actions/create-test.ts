"use server"
import { supabase } from "@/lib/supabase";

export default async function createForm(fields:Field[]) {
    try {
        const { data, error } = await supabase.from('forms').insert([{ fields: fields}]);    
        if (error) {
            console.error('Error saving form structure:', error);
          } else {
            console.log('Form saved successfully:', data);
          }
    } catch (error) {
        console.log(error);
    }
}