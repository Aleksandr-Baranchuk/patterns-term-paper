import { defineStore } from 'pinia';
import useGameStore from '~/store/game';
import setCountWithMin from '~/utils/setCountWithMin';

const initialState = {
  userName: '',
  hp: 100,
  money: 0,
  mana: 0,
  hpPotion: 1
};

const useUserStore = defineStore(
  'userStore',
  () => {
    const userName = ref(initialState.userName);
    const hp = ref(initialState.hp);
    const money = ref(initialState.money);
    const mana = ref(initialState.mana);
    const hpPotion = ref(initialState.hpPotion);
    const gameStore = useGameStore();
    const reset = () => {
      userName.value = initialState.userName;
      hp.value = initialState.hp;
      money.value = initialState.money;
      mana.value = initialState.mana;
      hpPotion.value = initialState.hpPotion;
    };

    const initGame = (name: string) => {
      if (!name) {
        throw new Error('User name required!');
      }
      userName.value = name;
    };

    const drinkPotion = () => {
      if (hpPotion.value > 0) {
        hpPotion.value -= 1;
        hp.value += 40;
      }
    };

    const setHp = (count: number): boolean => {
      const countHP = count + hp.value;
      if (countHP <= 0) {
        if (hpPotion.value > 0 && confirm('Випти зілля?')) {
          drinkPotion();
          return setHp(count);
        }

        hp.value = 0;

        gameStore.onGameOver({
          image: '/assets/images/game-over-screen-6.jpg',
          textStyle: 'mt-auto pb-12',
          text: ['Ви дуже сильно намагались вижти в цьому суровому світі, але нажаль він переміг вас.']
        });

        return false;
      }
      hp.value = countHP > 100 ? 100 : countHP;
      return true;
    };

    const setMoney = (count: number) => {
      money.value = setCountWithMin(count, money);
    };

    const setMana = (count: number) => {
      mana.value = setCountWithMin(count, mana);
    };

    const setHpPotion = (count: number) => {
      hpPotion.value = setCountWithMin(count, hpPotion);
    };

    return {
      userName,
      hp,
      hpPotion,
      mana,
      money,

      reset,
      initGame,
      setHp,
      setMana,
      setMoney,
      setHpPotion
    };
  },
  {
    persist: true
  }
);

export default useUserStore;
