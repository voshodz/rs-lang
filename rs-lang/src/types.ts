export type Word = {
  id: string;
  word: string;
  wordTranslate: string;
  group: string;
  page: string;
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
