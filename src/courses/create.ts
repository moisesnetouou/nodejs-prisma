import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de VueJS",
      duration: 500,
      description: "Curso de VueJS 3",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Moisés Neto"
          },
          create: {
            name: "Moisés Neto"
          }
        }
      }
    }
  })

  console.log(result);
}

main();