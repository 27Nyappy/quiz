import { AnswerDataType } from "../types";

export const questions: AnswerDataType[] = [
  {
    label: 'Which breed of dog was originally bred to hunt wolves?',
    options: [
      {
        label: 'Neapolitan Mastiff',
        value: 'neapolitan-mastiff',
      },
      {
        label: 'Leonberger',
        value: 'leonberger',
      },
      {
        label: 'Transylvanian Hound',
        value: 'transylvanian-hound',
      },
      {
        label: 'Irish wolfhound',
        value: 'irish-wolfhound',
      },
    ],
    answer: 'irish-wolfhound',
  },
  {
    label: "Where do Shiba Inu's come from?",
    options: [
      {
        label: 'Liechtenstein',
        value: 'liechtenstein',
      },
      {
        label: 'Gine-Bissau',
        value: 'gine-bissau',
      },
      {
        label: 'Japan',
        value: 'japan',
      },
      {
        label: 'Tonga',
        value: 'tonga',
      },
    ],
    answer: 'japan',
  },
  {
    label: 'Most dog breeds bark, but what does the Basenji breed do instead?',
    options: [
      {
        label: 'Yodel',
        value: 'yodel',
      },
      {
        label: 'Scream',
        value: 'scream',
      },
      {
        label: 'Squeak',
        value: 'squeak',
      },
      {
        label: 'Chirp',
        value: 'chirp',
      },
    ],
    answer: 'yodel',
  },
];
