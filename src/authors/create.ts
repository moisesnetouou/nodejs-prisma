import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Gaia Tobias Besourinha",
      books: {
        create: {
          name: "Vida dos gatos"
        }
      }
    }
  })

  console.log(result)
}

main();