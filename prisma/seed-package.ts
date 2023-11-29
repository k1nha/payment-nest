import { PrismaClient } from '@prisma/client';
import { PackageEnum } from '@prisma/client';

const prisma = new PrismaClient();

async function main(packages: { packageName: PackageEnum; price: number }[]) {
  return prisma.$transaction(async (tx) => {
    for (const { packageName, price } of packages) {
      const packageAlreadyExists = await tx.package.findFirst({
        where: {
          type: packageName,
        },
      });

      if (packageAlreadyExists) {
        return packageAlreadyExists;
      }

      await tx.package.create({
        data: {
          type: packageName,
          price,
        },
      });
    }
  });
}

const packages = [
  {
    packageName: PackageEnum.FREE,
    price: 0,
  },
  {
    packageName: PackageEnum.BASIC,
    price: 20000,
  },
  {
    packageName: PackageEnum.PRO,
    price: 40000,
  },
  {
    packageName: PackageEnum.TEAM,
    price: 80000,
  },
];

main(packages)
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
