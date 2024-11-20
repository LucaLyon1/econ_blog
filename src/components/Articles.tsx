import { getLastestArticles } from "@/lib/ArticleActions";
import { slugify } from "@/lib/slug";
import Link from "next/link";

const articleDescription = (body: string) => {
    const description: string[] = [];
    const arr = body.split(" ");
    for (let i = 0; i < 40; i++) {
        description.push(arr[i]);
    }
    description.push("...");
    return description.join(" ");
}


async function Articles() {
    const articles = await getLastestArticles();
    return (
        <div className="flex flex-col gap-16 w-5/6">
            {articles.map((art) => {
                return (
                    <Link href={`/${slugify(art.title)}`} key={art.id}>
                        <div className="flex flex-col gap-2 border border-transparent hover:border-gray-700 transition-all p-4 duration-300 cursor-pointer rounded-lg">
                            <h1 className="text-2xl font-semibold">{art.title}</h1>
                            <p className="text-justify">{articleDescription(art.body)}</p>
                            <p className="text-gray-400">{art.author} - {art.date.toLocaleDateString('en-GB')}</p>
                        </div>
                    </Link>
                )
            })}

        </div>
    );
}

export default Articles;