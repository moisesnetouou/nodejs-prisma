import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "7e6663ae-9eed-44df-a44f-2ca7770255bd",
      fk_id_module: "02b5af4c-4af1-43b1-ba9a-f7dc7d1d16c3"
    }
  })

  console.log(result)
}

main();