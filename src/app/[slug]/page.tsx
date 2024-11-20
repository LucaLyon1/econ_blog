import { findArticle } from "@/lib/ArticleActions";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';


async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const datas = await params;
    const { slug } = datas;
    const article = await findArticle(slug)
    return (
        <div className="w-3/4 md:w-1/2 flex flex-col m-auto gap-12 mt-[100px] relative">
            <Link className="absolute -left-16 p-2 hover:bg-gray-800 transition-all" href="/">v---</Link>
            <span>
                <h1 className="text-3xl">{article?.title}</h1>
                <p className="text-gray-400">{article?.author} - {article?.date.toLocaleDateString('en-GB')}</p>
            </span>
            <div className="prose text-gray-300">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{article?.body}</ReactMarkdown>
            </div>
        </div>
    );
}

export default Page;