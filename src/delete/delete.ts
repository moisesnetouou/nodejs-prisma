import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "32b4524f-0d24-4624-8df7-ce6165e67542"
    }
  })

  console.log(result)
}

main();