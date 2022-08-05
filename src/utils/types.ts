export type AnswerOptionType = { label: string; value: string };

export type AnswerDataType = {
  label: string;
  options: AnswerOptionType[];
  answer: string;
};