import { Hono } from "hono";

const api = new Hono()

api.get('/hello', (c) => {
    return c.json({ hello: 'hello api'})
})

export default api
