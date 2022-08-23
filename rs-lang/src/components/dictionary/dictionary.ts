import { Word, WordDictionary } from '../../types';
import { Api } from '../api';
import { Auth } from '../auth/auth';
import { Card } from '../card';

export class Dictionary {
  wordsOfUser: Array<WordDictionary> = [];
  auth: Auth;
  constructor() {
    this.auth = new Auth();
    //this.api = new Api();
    //this.card = new Card();
  }
  /*public async checkExistWorIdOrNotInDict(wordId: string): Promise<boolean> {
    return await this.api.getWordOfUserByWordId(this.auth.getUserId(), wordId, this.auth.getToken()).then((res) => {
      if (res.status !== 200) {
        return false;
      }
      return true;
    });
  }*/
  /*public async init() {
    this.loadDictionary();
    await this.loadCardsOfUser();
  }*/
  private loadDictionary() {
    const main: HTMLDivElement | null = document.querySelector('.container-main');
    if (main) {
      main.innerHTML = '';
      main.innerHTML += `<div class="container-words">
                        <div class="container-words__field">
                        </div>`;
    }
  }
  /*private async loadCardsOfUser() {
    const containerWords: HTMLDivElement | null = document.querySelector('.container-words__field');
    const words: Array<Word> = await Api.getAllWordsOfUser(this.auth.getUserId(), this.auth.getToken());
    if (containerWords) {
      words.forEach((w) => {
        containerWords.innerHTML += this.card.createCard(w);
      });
    }
  */
  public async getUsersWords(userId: string): Promise<WordDictionary[]> {
    const data: Promise<WordDictionary[]> = Api.getAllWordsOfUser(userId, this.auth.getToken());
    data.then((words) => {
      words.forEach((w) => {
        this.wordsOfUser.push(w);
      });
    });
    return await data;
  }
  public async checkWordInDict(wordId: string): Promise<boolean> {
    const data = await this.getUsersWords(this.auth.getUserId());
    let result = false;
    data.forEach((word) => {
      if (word.wordId === wordId) {
        //console.log('asdfasdf');
        result = true;
      }
    });
    return await result;
  }
}
