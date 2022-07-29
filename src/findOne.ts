import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// async function main() {
//   // SELECT * FROM COURSES LIMIT 1
//   // Baseado na data de criação, o primeiro registro criado.
//   const course = await prisma.courses.findFirst();

//   console.log(course);
// }

async function main() {
  // SELECT * FROM COURSES LIMIT 1
  // Retorna o registro mais recente.
  const course = await prisma.courses.findFirst({
    orderBy: { created_at: "desc" }
  });

  console.log(course);
}

main();