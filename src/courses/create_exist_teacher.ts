import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React Native",
      description: "Curso avançado",
      duration: 1000,
      teacher: {
        connect: {
          id: "57d2cc34-c26e-4803-85a5-b643b7ff8b50"
        }
      }
    }
  })

  console.log(result);
}

main();