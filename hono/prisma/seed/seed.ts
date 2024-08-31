import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    await prisma.$connect()

    // User
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

    // Post
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

    // Post_User
    const post_user1 = await prisma.post_User.create({
        data: {
            user_id: user1.id,
            post_id: post1.id
        },
    })
    const post_user2 = await prisma.post_User.create({
        data: {
            user_id: user1.id,
            post_id: post2.id
        },
    })
    const post_user3 = await prisma.post_User.create({
        data: {
            user_id: user2.id,
            post_id: post3.id
        },
    })
    const post_user4 = await prisma.post_User.create({
        data: {
            user_id: user3.id,
            post_id: post4.id
        },
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
