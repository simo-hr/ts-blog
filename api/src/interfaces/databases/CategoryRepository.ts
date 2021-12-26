import { ICategoryRepository } from '../../application/repositories/ICategoryRepository'
import { PrismaClient, Prisma, PrismaPromise } from '@prisma/client'
import { Category } from '../../domain/models/Category'
const prisma = new PrismaClient()

export default class CategoryRepository extends ICategoryRepository {
  list = async (): Promise<Category[]> => {
    return await prisma.category.findMany()
  }

  create = async (category: { name: string }): Promise<Category> => {
    return await prisma.category.create({ data: category })
  }
}
