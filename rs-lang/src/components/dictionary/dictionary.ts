import { ApiInst, AuthInst, CardInst, DictionaryInst } from '../../instances/instances';
import { BASE_URL, Word, WordDictionary } from '../../types';

export class Dictionary {
  wordsOfUser: Array<WordDictionary>;
  constructor() {
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
  }
  private async loadDictionary() {
    const main: HTMLDivElement | null = document.querySelector('.container-main');
    if (main) {
      main.innerHTML = '';
      main.innerHTML += `<div class="container-words">
                        <div class="container-words__field">
                        </div>`;
    }
    await this.loadCardsOfHardWordsOfUser();
  }
  private async loadCardsOfHardWordsOfUser() {
    const containerWords: HTMLDivElement | null = document.querySelector('.container-words__field');
    const words: Array<WordDictionary> = await ApiInst.getAllWordsOfUser(AuthInst.getUserId(), AuthInst.getToken());
    //words = this.filterHardWords(words);
    //words = this.filterLearnedWords(words);
    if (containerWords) {
      containerWords.innerHTML = '';
      words.forEach(async (w) => {
        const word: Word = await ApiInst.getWordById(w.wordId);
        containerWords.appendChild(this.createCardInDictionary(word));
      });
    }
  }
  public createCardInDictionary(word: Word): HTMLDivElement {
    const cardDiv: HTMLDivElement = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `<div class="card__info" data-id="${word.id}">                    
                        Слово: ${word.word}
                        <br>
                        Перевод: ${word.wordTranslate}
                        <br>
                        <img src="${BASE_URL}/${word.image}" alt="">
                        page: ${word.page}
                        group: ${word.group}
                      </div>
                        `;
    cardDiv.appendChild(this.createCardBtnWrapper(word.id));
    return cardDiv;
  }
  private createCardBtnWrapper(wordId: string): HTMLDivElement {
    const cardBtnWrapper = document.createElement('div');
    cardBtnWrapper.classList.add('card__btn-wrapper');
    cardBtnWrapper.appendChild(this.createBtnWithDelete(wordId));
    return cardBtnWrapper;
  }
  private createBtnWithDelete(wordId: string): HTMLButtonElement {
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btn');
    btnDelete.classList.add('btn_delete');
    btnDelete.dataset.id = wordId;
    btnDelete.innerHTML = 'Удалить из сложных';
    btnDelete.addEventListener('click', async () => {
      btnDelete.classList.add('btn_active');
      await ApiInst.deleteWordforUser(AuthInst.getUserId(), wordId, AuthInst.getToken());
      await DictionaryInst.init();
    });
    return btnDelete;
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
  private filterHardWords(data: Array<WordDictionary>): Array<WordDictionary> {
    return data.filter((word) => word.difficulty === 'hard');
  }
  private filterLearnedWords(data: Array<WordDictionary>): Array<WordDictionary> {
    return data.filter((word) => word.difficulty === 'learned');
  }
}
