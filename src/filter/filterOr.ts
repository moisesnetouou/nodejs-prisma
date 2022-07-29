import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      OR: [ //Ou
        {
          name: {
            contains: "Python"
          }
        },
        {
          name: {
            contains: "GameMaker"
          }
        }
      ],
      AND: [
        { duration: 700 }
      ]
    }
  })

  console.log(result)
}

main();