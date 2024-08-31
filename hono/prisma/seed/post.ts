import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const postSeed = async () => {
    const post1  = await prisma.post.create({
        data: {
            content: "Content 1 is owned by User 1",
        },
    })
    const post2  = await prisma.post.create({
        data: {
            content: "Content 2 is owned by User 1",
        },
    })
    const post3  = await prisma.post.create({
        data: {
            content: "Content 3 is owned by User 2",
        },
    })
    const post4 = await prisma.post.create({
        data: {
            content: "Content 4 is owned by User 3",
        },
    })
}
