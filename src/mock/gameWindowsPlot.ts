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
    dialogs: [
      [
        'Добре. Розібравшись з останньою живою душею тут можна рухатися далі.',
        'Скріпучі двері тварни викликають дивну реакцію у  любителів міцних напоів і пересмажених свиних вух.'
      ],
      [
        'Лойс, агов! Налий мені кухель пива, адже я виконав твоє завдання швидше ніж обіцяв.',
        'Додаткову плату за це не візьму не враховуючи пива і гарячого шматка мяса.'
      ],
      ['Що, значить в тебе для мене нічого не має?'],
      [
        'До Вас підходить озброєна і не дружньо налаштована компанія.',
        '- Якщо Лойс каже, що у нього для тебе нічого немає, значить так і є.',
        'Звільни місце, не затримуй бармена.',
        'Тут усі зайняті своїми справами.'
      ],
      [
        'В данний момент справа Лойса віддати мені борг.',
        'І чим швидше він це зробить, ти швидше ви хлопці зможете напитися до забуття.',
        'Вийдіть покуріть, ми швидко.Правда, Лойс?'
      ],
      ['Агов, блондинчику. Ти здається загубився і ми зараз допоможемо тобі знайти вихід.']
    ],
    image: getImgPath('screen-3.jpg'),
    answers: [
      {
        text: 'Які ж турботливі, давайте мій кулак допоможе вашим зубам знайти вихід.Влаштувати драку в таверні.',
        setHp: -80,
        gameWindowNextId: getUUID('4')
      },
      {
        text: 'Кладу руку на плаче самому кримезному, дивлюсь в очі і глибоко вдихаю. Дозволяю магії вільно рухатись крізь мої пальці.',
        setMana: -10,
        setMoney: 25,
        gameWindowNextId: getUUID('5')
      }
    ]
  },
  {
    id: getUUID('4'),
    image: getImgPath('screen-4.jpg'),
    gameWindowNextId: getUUID('6'),
    title: [
      'Битва була нелегка.',
      'Ви пропустили пару міцних ударів по обличю, але змогли дати гідну відсіч.',
      'Поклавши на лопатки 3 бандітів ви вийшли переможцем.',
      'Заплативши ціну в пару синців і сломане ребро.'
    ]
  },
  {
    id: getUUID('5'),
    image: getImgPath('screen-5.jpeg'),
    gameWindowNextId: getUUID('6'),
    title: [
      'Ще один глибокий вдих і зачаровую решту ворожо налаштованої компанії.',
      'Мені потрібні тільки мої гроші і спокійно піду.',
      'Хлопці зачаровано кивають і відходять до свого столика.'
    ]
  },
  {
    id: getUUID('6'),
    image: getImgPath('screen-5.jpeg'),
    dialogs: [
      ['Зачинивши двері таверни ви вирішили закурити і подумати, що робити далі.', '-Чорт, десь загубив сірники. '],
      ['До Вас підходить дівчинка і простягає сірники.'],
      [
        '{userName}, Маю для вас замовлення.',
        'Точніше мій батько.',
        'А ще мама приготувала обід.',
        'Не пересмажене мясо як в таверні і ніхто не буде намагатися вас вбити.',
        'Прийнамні, я точно.'
      ]
    ],
    gameWindowNextId: getUUID('7')
  },
  {
    id: getUUID('7'),
    dialogs: [
      ['Не встиг суп охолонути як на мене вивалили чергове складне завдання.'],
      [
        'Вся надія тільки на тебе, {userName}! Тільки ти можеш врятувати мою доню.',
        'Вона ж мене одна єдина, а я дурак такий не вберіг.',
        'Здався нам той первоцвіт!',
        'Поперлися ми в ліс о півночі квітку шукати. Думали озолотитися і відремонтувати хату.',
        'Так ось тепер цим золотом, хоч удавись. А доньку покусав перевертень',
        'Допоможи, поки не пізно. Врятуй дівчину від перетворення.'
      ]
    ],
    image: getImgPath('screen-5.jpeg'),
    answers: [
      {
        text: 'А що мені вже втрачати? Згоден.',
        gameWindowNextId: getUUID('9')
      },
      {
        text: 'Слухай, мала, мені добряче дісталося. Треба залягти на дно і залікувати рани. Давай наступного разу, домовились?',
        gameWindowNextId: getUUID('10')
      },
      {
        text: 'Дівчинка хамовита, суп пересолений, мясо маленький шматок поклали. Не варті вони моїх старань, а от грошики я собі візьму. Пограбую цих селюків і поїду собі далі.',
        setMoney: 100,
        setHp: -30,
        gameWindowNextId: getUUID('10')
      }
    ]
  },
  {
    id: getUUID('9'),
    title:
      'Врятувати ії може тільки магічний еліксир. У мене його не має. Треба відправлятися в ліс на пошуки чаклунки',
    image: getImgPath('screen-5.jpeg'),
    gameWindowNextId: getUUID('12')
  },
  {
    id: getUUID('10'),
    image: getImgPath('screen-5.jpeg'),
    dialogs: [
      [
        'Треба рухатись далі і якнайшвидше залишити це зловісне поселення.',
        'Знову спати у лісі на холодній землі.',
        'Проте це краще ніж отримати по пиці від половини міста.'
      ],
      [
        'От лайно!',
        'Тільки я провалився у теплі руки царства Морфея як на мене напав перевертень.',
        'Що ж це за прокляте місце!'
      ],
      ['Тепер мені треба знайти зіля щоб не стати перевертнем, часу обмаль.']
    ],
    gameWindowNextId: getUUID('12')
  },
  {
    id: getUUID('12'),
    dialogs: [
      ['Треба шукати річку в лісі.', 'Чаклунка бере свої сили з природних стихій. Там я ії і впіймаю.'],
      [
        'Юна відьма, саме те що мені потрібно.',
        'Мені потрібно зіля, яке врятує від обернення на перевертень. Скажи, що в тебе воно є.'
      ],
      [
        'Ага, нарешті мені почало щастити.',
        'Стій, що значить залишилась остання порція?',
        'І просто так ти ії не віддаш?'
      ]
    ],
    image: getImgPath('screen-5.jpeg'),
    answers: [
      {
        text: 'Я можу застосувати свою магію і примусити чаклунку віддати мені зілля просто так.',
        setMana: -10,
        gameOver: {
          type: 'success',
          text: [
            '{userName}, вітаю',
            'Завдяки вашому досвіду і навичка ви - встигли принести зілля і врятували дівчину від обернення на перевертня.'
          ]
        }
      },
      {
        text: 'Добре, що в мене є гроші і можу чесно обміняти гроші на порцію елексиру',
        setMoney: -120,
        gameWindowNextId: getUUID('13')
      },
      {
        text: 'Я впораюсь і без твого дурнуватого зілля',
        gameOver: {
          type: 'neutrality',
          text: [
            'Ви ще якийсь час блукали і намагалися роздобути чарівний флакон.',
            'Але час був не навашому боці.',
            'Ви не встиг врятувати ні дівчину ні себе.',
            'Залишаеться тільки чекати на свою участь.',
            'Що ж, це місто саме накликало на себе біду.',
            'Тепер ріки крові зальють його вулиці і будинки.',
            'Кінець.'
          ]
        }
      }
    ]
  },
  {
    id: getUUID('13'),
    image: getImgPath('screen-5.jpeg'),
    title: 'От тільки тепер треба обрати кого рятувати. Відьмак, хто має перетворитися на монстра? Кого ти врятуеш?',
    answers: [
      {
        text: 'Повернутися із зіллям до міста. Врятувати дівчинку.',
        gameWindowNextId: getUUID('14')
      },
      {
        text: 'Я обираю застосувати зілля на собі.',
        gameOver: {
          text: [
            'Всіх грошей не заробиш, а своя шкіра ближча.',
            'Дівчинка стає перевертнем і ролзриває на частини місцевих жителів.',
            'Кінець.',
            'Ти - програв. Кожне життя важливе!'
          ],
          images: ''
        }
      }
    ]
  },
  {
    id: getUUID('14'),
    image: getImgPath('screen-1.jpg'),
    dialogs: [
      ['Ура, мер місто тобі безмежно вдячний. Він і усе місто дарує тобі мішок золота.'],
      ['Шкода, що ти не встигнеш ним скористуватися. В тебе залишилось обмаль часу.']
    ],
    answers: [
      {
        text: 'Піти з міста',
        gameOver: {
          images: '',
          text: [
            'О, ні!',
            'Ти не встиг втекти на безпечну відстань від міста.',
            'Виходить повний місяць.',
            'Ти перетворюешься на перевертня і повертаешься до міста за свіжою кровью.'
          ]
        }
      }
    ]
  }
];

export default gameWindowsPlot;
