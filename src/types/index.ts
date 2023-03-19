import type { Ref } from 'vue';

export type Keyable<T = any> = {
  [key: string]: T;
};

export type GameOver = {
  text: string | string[];
  textStyle?: string;
  image: string;
};

type GameAnswerActions = {
  setHp?: number;
  setMana?: number;
  setMoney?: number;

  setHpPotion?: number;
  gameOver?: GameOver;
};

export type GameAnswer = {
  text: string | string[];
} & GameAnswerActions &
  ({ gameWindowNextId: string; gameOver?: never } | { gameWindowNextId?: never; gameOver: GameOver });

export type GameWindow = {
  id: string;
  image: string;

  contentStyle?: string;

  textStyle?: string;
  actionStyle?: string;
} & ({ title: string | string[]; dialogs?: never } | { title?: never; dialogs: string[][] }) &
  ({ gameWindowNextId: string; answers?: never } | { gameWindowNextId?: never; answers: GameAnswer[] });

export type MaybeRef<T> = Ref<T> | T;
