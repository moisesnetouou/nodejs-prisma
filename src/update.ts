import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "e9c1e1e7-ff5c-4c38-b778-a7d46603b6a5",
    },
    data: {
      duration: 250,
      name: "Curso de ReactJS e NodeJS"
    }
  })

  console.log(result)
}

main();