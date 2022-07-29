import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de GameMaker",
      duration: 600,
      description: "Curso de criação de jogos",
      fk_id_teacher: "7a182d04-a756-4f0d-a63d-e947538ef769"
    }
  })

  console.log(result);
}

main();