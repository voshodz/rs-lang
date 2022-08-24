export const BASE_URL = 'https://api-rs-lang.herokuapp.com';
export type Word = {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
};

export type AuthUser = {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
};
export type WordDictionary = {
  id: string;
  difficulty: string;
  wordId: string;
};
