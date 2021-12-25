import { PrismaClient } from '@prisma/client'
import { Router, Request, Response } from 'express'

const prisma = new PrismaClient()
const router = Router()

// GET /api/users
router.get('/', async (_req: Request, res: Response) => {
  res.status(200).json('hello')
})

export default router
