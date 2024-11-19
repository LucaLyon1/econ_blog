"use server";

import prisma from "./db"
import { ArticleInput } from "@/types/types"

export const publishArticle = async (article: ArticleInput) => {
    await prisma.article.create({
        data: {
            author: "Luca Savio",
            title: article.title,
            body: article.body,
            published: true,
        },
    })
}