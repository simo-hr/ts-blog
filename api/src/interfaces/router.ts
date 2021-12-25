import { Router, Request, Response } from 'express'
import { CategoryController } from '../interfaces/controllers/CategoryController'
const categoryController = new CategoryController()
let router = Router()

router.get('/categories', async (req: Request, res: Response) => {
  let categories = await categoryController.listCategories()
  res.status(200).json({ categories })
})

export default router
