import { Ref } from 'vue-demi';

export type Keyable = {
  [key: string]: any;
};

export type GameOver = {
  type: 'success' | 'neutrality' | 'failure';
  text: string;
};

type GameAnswerActions = {
  setHp?: number;
  setMana?: number;
  setMoney?: number;

  setHpPotion?: number;
  gameOver?: GameOver;
};

export type GameAnswer = {
  text: string;
  gameWindowNextId?: string;
} & GameAnswerActions;

export type GameWindow = {
  id: string;
  title: string | string[];
  image: string;

  contentStyle?: string;

  textStyle?: string;
  actionStyle?: string;

  gameWindowNextId?: string;
  answers: GameAnswer[];
};

export type MaybeRef<T> = T | Ref<T>;
