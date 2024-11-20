"use server";

import prisma from "./db"
import { ArticleInput } from "@/types/types"
import { slugify } from "./slug";

export const publishArticle = async (article: ArticleInput) => {
    await prisma.article.create({
        data: {
            author: "Luca Savio",
            slug: slugify(article.title),
            title: article.title,
            body: article.body,
            published: true,
        },
    })
}

export const getLastestArticles = async (n = 5) => {
    const articles = await prisma.article.findMany({
        take: 4,
        orderBy: {
            date: 'desc'
        }
    });

    return articles;
}

export const findArticle = async (slug: string) => {
    const article = await prisma.article.findUnique({
        where: {
            slug: slug,
        }
    });
    return article;
}