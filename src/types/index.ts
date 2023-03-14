interface AnswerItem {
  text: string;
  to: string;
}
export interface GameViewItem {
  id: string;
  content: {
    title: string;
    classes?: string | string[];
    audio?: string;
  };

  answers: AnswerItem[];
  img: string;
}
