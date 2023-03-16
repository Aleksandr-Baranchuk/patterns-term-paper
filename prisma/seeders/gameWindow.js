import { faker } from '@faker-js/faker';
import random from 'lodash-es/random.js';

const gameWindowCount = 20;
const answerCount = 50;
const gameWindowSeeder = async (prisma) => {
  for (let i = 0; i < gameWindowCount; i++) {
    await prisma.gameWindow.create({
      data: {
        title: faker.lorem.words(10),
        image: faker.image.city(1920, 1080, true)
      }
    });
  }

  for (let i = 0; i < answerCount; i++) {
    const gameWindowId = random(1, gameWindowCount);
    const gameWindowNextId = random(1, gameWindowCount);
    await prisma.answer.create({
      data: {
        text: faker.lorem.text(),
        gameWindowId,
        gameWindowNextId: gameWindowId === gameWindowNextId ? random(1, gameWindowCount) : gameWindowNextId
      }
    });
  }
};

export default gameWindowSeeder;
