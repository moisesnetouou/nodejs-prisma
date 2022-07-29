import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 400,
      name: "Curso de TypeORM e Prisma",
      description: "Curso avançado de TypeORM e Prisma"
    }
  })

  console.log(result);
}

main();