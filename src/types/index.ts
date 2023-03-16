import { gameWindow, answer } from '@prisma/client';

export type GameWindow = gameWindow & { answers: answer[] };
