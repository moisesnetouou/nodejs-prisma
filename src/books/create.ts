import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Como descer de escadas",
      author_id: "7f638d5a-4f38-42eb-8441-0366e6fb8f75"
    }
  })

  console.log(result)
}

main();