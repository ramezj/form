"use client"
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import createForm from "@/actions/create-test";

export default function Home() {
  const [fields, setFields] = useState<Field[]>([]);
  const addField = (type: string) => {
    const newField = { id: fields.length + 1, label: '', type };
    setFields([...fields, newField]);
  };
  // const updateFieldLabel = (id: number, label: string) => {
  //   setFields(fields.map(field => field.id === id ? { ...field, label } : field));
  // };
  // const removeField = (id: number) => {
  //   setFields(fields.filter(field => field.id !== id));
  // };
  const submitForm = async (e:React.FormEvent) => {
    e.preventDefault();
    console.log(fields);
    const res = await createForm(fields);
    console.log(res);
  }
  return (
    <>
    <div className="mt-4 align-center justify-center">
      <Button onClick={() => addField('text')}>Add Text</Button>
      <Button onClick={() => addField('number')}>Add Number</Button>
      <form onSubmit={submitForm}>
        {fields.map((field) => (
          <div key={field.id}>
           {field.type === 'text' && <><Input className="w-1/2" type='text'/></>}
           {field.type === 'number' && <><Input className='w-1/2' type='number' /></>}
          </div>
        ))}
        <Button>Submit</Button>
      </form>
    </div>
    </>
  );
}
