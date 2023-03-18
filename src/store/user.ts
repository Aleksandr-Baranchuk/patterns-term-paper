import { defineStore } from 'pinia';
import useGameStore from '~/store/game';
import { SERVICE_MESSAGES } from '~/globals';

const initialState = {
  userName: '',
  hp: 100,
  money: 0,
  mana: 0
};

const useUserStore = defineStore('userStore', () => {
  const userName = ref(initialState.userName);
  const hp = ref(initialState.hp);
  const money = ref(initialState.money);
  const mana = ref(initialState.mana);

  const gameStore = useGameStore();
  const reset = () => {
    userName.value = initialState.userName;
    hp.value = initialState.hp;
    money.value = initialState.money;
    mana.value = initialState.mana;
  };

  const setName = (newName: string) => {
    userName.value = newName;
  };

  const addHp = (count: number) => {
    const countHP = count + hp.value;
    hp.value = countHP > 100 ? 100 : countHP;
  };

  const minusHp = (count: number) => {
    const countHP = count - hp.value;
    if (countHP <= 0) {
      gameStore.gameOver({
        type: 'failure',
        message: SERVICE_MESSAGES.gameOverFailure
      });
    }
    hp.value = countHP < 0 ? 100 : countHP;
  };

  const addMoney = (count: number) => {
    money.value += count;
  };

  const minusMoney = (count: number) => {
    const countMoney = count - money.value;
    money.value = countMoney < 0 ? 0 : countMoney;
  };

  const addMana = (count: number) => {
    money.value += count;
  };

  const minusMana = (count: number) => {
    const countMana = count - mana.value;
    mana.value = countMana < 0 ? 0 : countMana;
  };

  return {
    userName,
    hp,
    mana,
    money,

    reset,
    setName,
    addHp,
    minusHp,
    addMana,
    minusMana,
    addMoney,
    minusMoney
  };
});

export default useUserStore;
