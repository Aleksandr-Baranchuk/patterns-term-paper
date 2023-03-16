import { PrismaClient } from '@prisma/client';
import { defineEventHandler } from 'h3';

const prisma = new PrismaClient();
export default defineEventHandler(() => {
  return prisma.gameWindow.findMany({
    include: {
      answers: true
    }
  });
});
