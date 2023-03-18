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
    title: [
      'Добре. Розібравшись з останньою живою душею тут можна рухатися далі.',
      'Скріпучі двері тварни викликають дивну реакцію у  любителів міцних напоів і пересмажених свиних вух.'
    ],
    image: getImgPath('screen-3.jpg'),
    gameWindowNextId: getUUID('4'),
    answers: []
  },
  {
    id: getUUID('4'),
    title: ['Лойс, агов! Налий мені кухель пива, адже я виконав твоє завдання швидше ніж обіцяв.', 'Додаткову плату за це не візьму не враховуючи пива і гарячого шматка мяса.'],
    image: getImgPath('screen-3.jpg'),
    gameWindowNextId: getUUID('5'),
    answers: []
  },
  {
    id: getUUID('5'),
    title: 'Що, значить в тебе для мене нічого не має?',
    image: getImgPath('screen-3.jpg'),
    gameWindowNextId: getUUID('6'),
    answers: []
  },
  {
    id: getUUID('6'),
    title: [
      'До Вас підходить озброєна і не дружньо налаштована компанія.',
      '- Якщо Лойс каже, що у нього для тебе нічого немає, значить так і є.',
      'Звільни місце, не затримуй бармена.',
      'Тут усі зайняті своїми справами.'
    ],
    image: getImgPath('screen-3.jpg'),
    gameWindowNextId: getUUID('7'),
    answers: []
  },
  {
    id: getUUID('7'),
    title: [
      'В данний момент справа Лойса віддати мені борг.',
      'І чим швидше він це зробить, ти швидше ви хлопці зможете напитися до забуття.',
      'Вийдіть покуріть, ми швидко.Правда, Лойс?'
    ],
    image: getImgPath('screen-3.jpg'),
    gameWindowNextId: getUUID('8'),
    answers: []
  },
  {
    id: getUUID('8'),
    title: 'Агов, блондинчику. Ти здається загубився і ми зараз допоможемо тобі знайти вихід.',
    image: getImgPath('screen-3.jpg'),
    answers: [
      {
        text: 'Які ж турботливі, давайте мій кулак допоможе вашим зубам знайти вихід.Влаштувати драку в таверні.',
        setHp: -80,
        gameWindowNextId: getUUID('9')
      },
      {
        text: 'Кладу руку на плаче самому кримезному, дивлюсь в очі і глибоко вдихаю. Дозволяю магії вільно рухатись крізь мої пальці.',
        setMana: -10,
        setMoney: 25,
        gameWindowNextId: getUUID('10')
      }
    ]
  },
  {
    id: getUUID('9'),
    image: getImgPath('screen-4.jpg'),
    gameWindowNextId: getUUID('11'),
    title: [
      'Битва була нелегка.',
      'Ви пропустили пару міцних ударів по обличю, але змогли дати гідну відсіч.',
      'Поклавши на лопатки 3 бандітів ви вийшли переможцем.',
      'Заплативши ціну в пару синців і сломане ребро.'
    ],
    answers: []
  },
  {
    id: getUUID('10'),
    image: getImgPath('screen-5.jpeg'),
    gameWindowNextId: getUUID('11'),
    title: [
      'Ще один глибокий вдих і зачаровую решту ворожо налаштованої компанії.',
      'Мені потрібні тільки мої гроші і спокійно піду.',
      'Хлопці зачаровано кивають і відходять до свого столика.'
    ],
    answers: []
  }
];

export default gameWindowsPlot;
