import { PrismaClient } from '@prisma/client';
import gameWindowSeeder from './seeders/gameWindow.js';

const prisma = new PrismaClient();
try {
  await gameWindowSeeder(prisma);
} catch (error) {
  console.error(error);
  process.exit(1);
} finally {
  await prisma.$disconnect();
}
