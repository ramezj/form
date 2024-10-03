"use client"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";
import { handleFormSubmission } from "@/actions/create-test";

export function FormHandler({fields} : { fields: Field []}) {
    const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget); 
        const data = await handleFormSubmission(formData);
        console.log(data);
    }
    return (
        <>
        <form onSubmit={formHandler}>
            {fields.map((field: Field) => {
                return (
                    <>
                    {field.type === 'text' && 
                    <>
                    <Label htmlFor={field.label}>{field.label}</Label>
                    <Input className="w-1/2" type='text' name={field?.label} required/>
                    </>
                    }
                    </>
                )
            })}
            <Button type="submit">Submit</Button>
        </form>
        </>
    )
}