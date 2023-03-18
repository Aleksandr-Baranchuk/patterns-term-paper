import { gameWindow, answer } from '@prisma/client';

export type GameWindow = gameWindow & { answers: answer[] };

export type GameOver = {
  type: 'success' | 'neutrality' | 'failure';
  message: string;
};
