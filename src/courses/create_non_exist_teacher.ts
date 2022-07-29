import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Elixir",
      duration: 2000,
      description: "Curso para web de Elixir",
      teacher: {
        create: {
          name: "Besourinha"
        }
      }
    }
  })

  console.log(result);
}

main();