import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  let includePosts: boolean = false
  let category: Prisma.CategoryCreateInput

  if (includePosts) {
    category = {
      name: 'プログラミング',
    }
  } else {
    category = {
      name: 'キャリア',
    }
  }

  // Pass 'category' object into query
  const createCategory = await prisma.category.create({ data: category })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
