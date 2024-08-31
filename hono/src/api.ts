import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";
import { Users } from "../types/type";

const api = new Hono()
const prisma = new PrismaClient()

api.get('/hello', (c) => {
    return c.json({ hello: 'hello api'})
})

api.get('/users', async (c) => {
    const users: Users = await prisma.user.findMany()
    return c.json(users)
})

export default api
