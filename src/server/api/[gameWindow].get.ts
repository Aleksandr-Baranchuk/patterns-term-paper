import { PrismaClient } from '@prisma/client';
import { defineEventHandler } from 'h3';

const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const params = event.context.params || {};

  const gameWindow = await prisma.gameWindow.findFirst({
    where: {
      id: +params.gameWindow
    },
    include: {
      answers: true
    }
  });
  if (!gameWindow) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page Not Found'
    });
  }

  return gameWindow;
});
