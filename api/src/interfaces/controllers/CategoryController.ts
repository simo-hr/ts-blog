import { Router, Request, Response } from 'express'
import { ListCategory } from '../../application/usecases/ListCategory'
const router = Router()

const listCategory = new ListCategory()

export class CategoryController {
  async listCategories() {
    return await listCategory.execute()
  }
}
