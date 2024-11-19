'use client';

import { publishArticle } from "@/lib/ArticleActions";
import { useState } from "react";

function Page() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        publishArticle({
            author: "Luca Savio",
            title,
            body,
            published: false,
        });
    }
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <form className="border border-slate-600 flex flex-col gap-4 p-4 rounded-sm w-1/2" onSubmit={onSubmit}>
                <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="body" />
                <textarea onChange={(e) => setBody(e.target.value)} name="body" id="body" className="h-[50vh]"></textarea>
                <button type="submit">Submit article</button>
            </form>
        </div>
    );
}

export default Page;