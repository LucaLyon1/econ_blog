'use client';

import { publishArticle } from "@/lib/ArticleActions";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

function Page() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title == "") {
            alert("need a title");
            return;
        }
        publishArticle({
            author: "Luca Savio",
            title,
            body,
            published: false,
        });
    }
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <form className="border border-slate-600 flex flex-col gap-4 p-4 rounded-sm w-full h-full" onSubmit={onSubmit}>
                <input className="bg-[#0E1117] border border-gray-800"
                    onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="body" />
                <MDEditor
                    value={body}
                    onChange={setBody}
                />
                {/*<MDEditor.Markdown source={body} style={{ whiteSpace: 'pre-wrap' }} />*/}
                <button className="p-2 hover:bg-gray-700 transition-all m-auto border border-gray-800 rounded-sm"
                    type="submit">Submit article</button>
            </form>
        </div>
    );
}

export default Page;