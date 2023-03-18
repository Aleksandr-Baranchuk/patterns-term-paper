import { gameWindow, answer } from '@prisma/client';

export type GameWindow = gameWindow & { answers: answer[] };

export type MaybeRef<T> = Ref<T> | T;
