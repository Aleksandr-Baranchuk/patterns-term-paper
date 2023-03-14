import { GameViewItem } from '@/types';

const ASSET_URL = '';
const getAssetPath = (path: string) => ASSET_URL + path;
const getImagePath = (imgSrc: string) => getAssetPath('/assets/images/' + imgSrc);
// const getAudioPath = (imgSrc: string) => getAssetPath('assets/audio/' + imgSrc)
const gameViewItems: GameViewItem[] = [
  {
    id: '1',
    content: {
      title: 'First slide'
      // audio: getAudioPath('X2Download.mp3')
    },
    answers: [
      {
        text: 'go two',
        to: '2'
      },
      {
        text: 'go three',
        to: '3'
      }
    ],
    img: getImagePath('01.jpg')
  },
  {
    id: '2',
    content: {
      title: 'Secondary slide'
    },
    answers: [
      {
        text: 'go first',
        to: '1'
      },
      {
        text: 'go three',
        to: '3'
      }
    ],
    img: getImagePath('02.jpg')
  },
  {
    id: '3',
    content: {
      title: 'Three slide'
    },
    answers: [
      {
        text: 'go first',
        to: '1'
      },
      {
        text: 'go two',
        to: '2'
      }
    ],
    img: getImagePath('03.jpg')
  }
];
export default gameViewItems;
