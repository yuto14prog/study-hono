import { PrismaClient } from "@prisma/client"
import { userSeed } from "./user"
import { postSeed } from "./post"
import { postUserSeed } from "./post_user"

const prisma = new PrismaClient()

async function main() {
    await prisma.$connect()

    await userSeed()
    await postSeed()
    await postUserSeed()

    console.info("==== Seeding completed. ====")
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
