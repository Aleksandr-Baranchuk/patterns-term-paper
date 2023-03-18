import { v5 as uuidv5 } from 'uuid';
import { GameWindow } from '~/types';

const GAME_WINDOWS_NAMESPACE = 'ff7a34c7-01b7-4dbb-a496-65055db9d042';

const getUUID = (id: string) => uuidv5(id, GAME_WINDOWS_NAMESPACE);
const getImgPath = (img: string) => '/assets/images/' + img;

const gameWindowsPlot: GameWindow[] = [
  {
    id: getUUID('1'),
    title: [
      'Тумани застеляє землю, черевики вгрузають у багнюку, кров і залишки людських тіл.',
      'А може і не тільки людських?',
      'Що ж тут трапилось?',
      'Чи залишився хтось в живих?',
      'Здається щось ворушиться у тих хащах.',
      '{userName}, що будеш робити?'
    ],
    image: getImgPath('screen-1.jpg'),
    contentStyle: 'max-w-3xl text-right ml-auto',
    answers: [
      {
        text: 'Залишитись на місці, чорт з ним.',
        gameOver: {
          type: 'failure',
          text: '{userName}, вибач, але в такі буремні часи не можно бути боягузом. Ти ще не готов йти далі.'
        }
      },
      {
        text: 'Подивитися',
        gameWindowNextId: getUUID('2')
      }
    ]
  },
  {
    id: getUUID('2'),
    title: [
      'Ризикнувши ви знаходити поранену тварину.',
      'Бідному оленю залишилось не довго.',
      'Принайні без допомоги.',
      'Але хто тоді допоможе Вaм?',
      'Памятайте після важкого шляху і перебуванні на болотах у вас залишилось мало здоровʼя.'
    ],
    image: getImgPath('screen-2.jpg'),
    contentStyle: 'max-w-3xl top-24',
    actionStyle: 'my-auto max-w-2xl',
    answers: [
      {
        text: 'Полегшити страждання тварини і подарувати легку смерть.',
        setHp: -20,
        gameWindowNextId: getUUID('3')
      },
      {
        text: 'Покластися на волю Богів і пройти повз. Якщо така воля Богів, тварина виживе.',
        gameWindowNextId: getUUID('3')
      },
      {
        text: 'Проявити милосердця. Використати свій флакон із чарівним зіллям і вилікувати тварину.',
        setMana: 10,
        setHpPotion: -1,
        gameWindowNextId: getUUID('3')
      }
    ]
  },
  {
    id: getUUID('3'),
    title:
      'Добре. Розібравшись з останньою живою душею тут можна рухатися далі. Скріпучі двері тварни викликають дивну реакцію у  любителів міцних напоів і пересмажених свиних вух.',
    image: '',
    answers: []
  }
];

export default gameWindowsPlot;
