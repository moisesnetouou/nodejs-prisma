import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      name: "Jogos de plataforma",
      description: "Como criar jogos de plataforma em 2D",
      courses: {
        create: {
          course: {
            connect: {
              id: "7e6663ae-9eed-44df-a44f-2ca7770255bd"
            }
          }
        }
      }
    }
  })

  console.log(result)
}

main();