import { ApiInst, AuthInst, CardInst } from '../../instances/instances';
import { Word, WordDictionary } from '../../types';

export class Dictionary {
  wordsOfUser: Array<WordDictionary>;
  //auth: Auth;
  //card: Card;
  constructor() {
    //this.auth = new Auth();
    //this.api = new Api();
    //this.card = new Card();
    console.log('ok');
    this.wordsOfUser = [];
  }
  /*public async checkExistWorIdOrNotInDict(wordId: string): Promise<boolean> {
    return await this.api.getWordOfUserByWordId(this.auth.getUserId(), wordId, this.auth.getToken()).then((res) => {
      if (res.status !== 200) {
        return false;
      }
      return true;
    });
  }*/
  public async init() {
    this.loadDictionary();
    await this.loadCardsOfUser();
  }
  private loadDictionary() {
    const main: HTMLDivElement | null = document.querySelector('.container-main');
    if (main) {
      main.innerHTML = '';
      main.innerHTML += `<div class="container-words">
                        <div class="container-words__field">
                        </div>`;
    }
  }
  private async loadCardsOfUser() {
    const containerWords: HTMLDivElement | null = document.querySelector('.container-words__field');
    const words: Array<WordDictionary> = await ApiInst.getAllWordsOfUser(AuthInst.getUserId(), AuthInst.getToken());
    //console.log(words);
    if (containerWords) {
      words.forEach(async (w) => {
        const word: Word = await ApiInst.getWordById(w.wordId);
        containerWords.innerHTML += CardInst.createCard(word);
      });
    }
  }
  public async getUsersWords(userId: string): Promise<WordDictionary[]> {
    const data: Promise<WordDictionary[]> = ApiInst.getAllWordsOfUser(userId, AuthInst.getToken());
    data.then((words) => {
      words.forEach((w) => {
        this.wordsOfUser.push(w);
      });
    });
    return await data;
  }
  public async checkWordInDict(wordId: string): Promise<boolean> {
    const data = await this.getUsersWords(AuthInst.getUserId());
    let result = false;
    data.forEach((word) => {
      if (word.wordId === wordId) {
        result = true;
      }
    });
    return await result;
  }
}
