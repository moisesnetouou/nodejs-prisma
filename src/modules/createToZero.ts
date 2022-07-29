import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          duration: 700,
          name: "Curso de Python",
          description: "Curso básico de Python",
          teacher: {
            create: {
              name: "Neto"
            }
          }
        },
      },
      module: {
        create: {
          description: "Aprendendo a utilizar a IDE",
          name: "Python 1.6"
        }
      }
    }
  })

  console.log(result);
}

main();