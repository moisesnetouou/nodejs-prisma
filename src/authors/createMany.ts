import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Pirata",
      books: {
        createMany: {
          data: [
            {
              name: "Vida de cães"
            },
            {
              name: "Como passar o dia dormindo?"
            }
          ]
        }
      }
    }
  })

  console.log(result)
}

main();