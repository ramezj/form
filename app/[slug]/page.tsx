"use server"
import { GetForm } from "@/actions/create-test"
import React from "react";
import { FormHandler } from "@/components/form";

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await GetForm(params.slug);
    return (
        <>
        <FormHandler fields={data?.fields as Field[]} />
        {/* <form onSubmit={formHandler}>
            {data?.fields.map((field: Field) => {
                return (
                    <>
                    {field.type === 'text' && 
                    <>
                    <Label htmlFor={field.label}>{field.label}</Label>
                    <Input className="w-1/2" type='text' name={field.label}/>
                    </>
                    }
                    </>
                )
            })}
            <Button type="submit">Submit</Button>
        </form> */}
        </>
    )
}