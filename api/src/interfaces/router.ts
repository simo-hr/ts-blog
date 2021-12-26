import { log } from 'console'
import { Router, Request, Response } from 'express'
import { CategoryController } from '../interfaces/controllers/CategoryController'
import { PostController } from '../interfaces/controllers/PostController'
const categoryController = new CategoryController()
const postController = new PostController()
let router = Router()

router.get('/categories', async (req: Request, res: Response) => {
  let categories = await categoryController.listCategories()
  res.status(200).json({ categories })
})

router.post('/categories', async (req: Request, res: Response) => {
  const { name } = req.body
  let categories = await categoryController.createCategories({ name: name })
  res.status(201).json({ categories })
})

router.post('/posts', async (req: Request, res: Response) => {
  const { category, title, content, published } = req.body
  let categories = await postController.create({ category, title, content, published })
  res.status(201).json({ categories })
})

export default router
