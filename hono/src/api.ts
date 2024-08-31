import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";
import { User, Users } from "../types/type";

const api = new Hono()
const prisma = new PrismaClient()

api.get('/hello', (c) => {
    return c.json({ hello: 'hello api'})
})

api.get('/users/:id', async (c) => {
    const userId = Number(c.req.param('id'))
    const user: User | null = await prisma.user.findUnique({
        where: { id: userId }
    })

    if (user === null) {
        return c.json({ error: 'user not found' }, 404)
    }

    return c.json(user)
})

api.get('/users', async (c) => {
    const users: Users | null = await prisma.user.findMany()

    if (users === null) {
        return c.json({ error: 'users not found' }, 404)
    }

    return c.json(users)
})

export default api
