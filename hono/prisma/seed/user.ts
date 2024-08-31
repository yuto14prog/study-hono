import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const userSeed = async () => {
    const user1  = await prisma.user.create({
        data: {
            email: "user1@test.com",
            name: "User 1",
        },
    })
    const user2  = await prisma.user.create({
        data: {
            email: "user2@test.com",
            name: "User 2",
        },
    })
    const user3  = await prisma.user.create({
        data: {
            email: "user3@test.com",
            name: "User 3",
        },
    })
}
