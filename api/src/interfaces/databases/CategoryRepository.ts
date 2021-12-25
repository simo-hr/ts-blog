import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Category = {
  id: number
  name: string
}

export default class CategoryRepository {
  list = async (): Promise<Category[]> => {
    return await prisma.category.findMany()
  }
}
