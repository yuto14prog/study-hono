import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const postUserSeed = async () => {
    const post_user1 = await prisma.post_User.create({
        data: {
            user_id: 1,
            post_id: 1,
        },
    })
    const post_user2 = await prisma.post_User.create({
        data: {
            user_id: 1,
            post_id: 2,
        },
    })
    const post_user3 = await prisma.post_User.create({
        data: {
            user_id: 2,
            post_id: 3,
        },
    })
    const post_user4 = await prisma.post_User.create({
        data: {
            user_id: 3,
            post_id: 4,
        },
    })
}
