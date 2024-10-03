import { GetForm } from "@/actions/create-test"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await GetForm(params.slug);
    return (
        <>
        <form>
            
        </form>
        </>
    )
}