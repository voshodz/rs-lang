import { ApiInst, AuthInst } from '../../instances/instances';
import { BASE_URL, Word, WordDictionary } from '../../types';

export class Card {
  private markdownOfButtons(wordId: string): string {
    const markDown = `
                      <div class="card__btn-wrapper">
                        <button class="btn btn_hard" data-id=${wordId}>Сложное слово</button>
                        <button class="btn btn_learned" data-id=${wordId}>Добавить слово к изученным</button>
                        
                      </div>`;
    return markDown;
  }
  private createButtonsWithListeners(wordId: string): HTMLDivElement {
    const cardBtnWrapper = document.createElement('div');
    cardBtnWrapper.classList.add('card__btn-wrapper');
    cardBtnWrapper.appendChild(this.createBtnAddToHard(wordId));
    cardBtnWrapper.appendChild(this.createBtnAddToLearned(wordId));
    return cardBtnWrapper;
  }
  private createBtnAddToHard(wordId: string): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.classList.add('btn_hard');
    btn.dataset.id = wordId;
    btn.innerHTML = 'Сложное слово';
    btn.addEventListener('click', async () => {
      btn.classList.add('btn_active');
      await ApiInst.createWordforUser(AuthInst.getUserId(), wordId, AuthInst.getToken(), 'hard', {});
    });
    return btn;
  }
  private createBtnAddToLearned(wordId: string): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.classList.add('btn_learned');
    btn.dataset.id = wordId;
    btn.innerHTML = 'Изученое слово';
    btn.addEventListener('click', async () => {
      btn.classList.add('btn_active');
      await ApiInst.createWordforUser(AuthInst.getUserId(), wordId, AuthInst.getToken(), 'learned', {});
    });
    return btn;
  }

  public markdownOfSelect = `<select class="select">
                            <option value="0">Page 1</option>
                            <option value="1">Page 2</option>
                            <option value="2">Page 3</option>
                            <option value="3">Page 4</option>
                            <option value="4">Page 5</option>
                            <option value="5">Page 6</option>
                            <option value="6">Page 7</option>
                            <option value="7">Page 8</option>
                            <option value="8">Page 9</option>
                            <option value="9">Page 10</option>
                            <option value="10">Page 11</option>
                            <option value="11">Page 12</option>
                            <option value="12">Page 13</option>
                            <option value="13">Page 14</option>
                            <option value="14">Page 15</option>
                            <option value="15">Page 16</option>
                            <option value="16">Page 17</option>
                            <option value="17">Page 18</option>
                            <option value="18">Page 19</option>
                            <option value="19">Page 20</option>
                            <option value="20">Page 21</option>
                            <option value="21">Page 22</option>
                            <option value="22">Page 23</option>
                            <option value="23">Page 24</option>
                          </select>`;
  public createCard(word: Word): HTMLDivElement {
    const markdownOfCard = `
                              <div class="card__info" data-id="${word.id}"> 
                                <div class="card__info__text">
                                  Слово: ${word.word}
                                  <br>
                                  Перевод: ${word.wordTranslate}
                                  <br>
                                
                                  <div class="card__meaning">
                                      ${word.textMeaning}
                                      <br>
                                      ${word.textExample}
                                      <br>
                                      <br>
                                      ${word.textMeaningTranslate}
                                      <br>
                                      ${word.textExampleTranslate}
                                      <br>
                                  </div>
                                  <div class="card__audio">
                                      <figure>
                                        <figcaption>Слово:</figcaption>
                                        <audio
                                            controls
                                            src="${ApiInst.getBASE_URL()}/${word.audio}">
                                                Your browser does not support the
                                                <code>audio</code> element.
                                        </audio>
                                      </figure>
                                      <figure>
                                        <figcaption>Аудио пример:</figcaption>
                                        <audio
                                            controls
                                            src="${ApiInst.getBASE_URL()}/${word.audioExample}">
                                                Your browser does not support the
                                                <code>audio</code> element.
                                        </audio>
                                      </figure>
                                    </div>
                                </div>
                                
                              <div class="card__img">
                                <img src="${BASE_URL}/${word.image}" alt="${word.image}">
                              </div>
                              
                            </div
                            `;
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = markdownOfCard;
    cardDiv.appendChild(this.buttonsWithAuthorizationInfo(word.id));
    return cardDiv;
  }
  private buttonsWithAuthorizationInfo(wordId: string): HTMLDivElement {
    if (AuthInst.checkAuthorization()) {
      return this.createButtonsWithListeners(wordId);
    }
    const noAuthButtons = document.createElement('div');
    noAuthButtons.innerHTML = '';
    return noAuthButtons;
  }
  public loadListenersToButtons() {
    this.loadListenerAddHardWord();
    this.loadListenerDeleteWord();
    this.loadListenerLearnedWord();
  }
  private loadListenerAddHardWord() {
    const btnAddHardWords: NodeListOf<HTMLButtonElement> | null = document.querySelectorAll('.btn_hard');
    if (btnAddHardWords) {
      btnAddHardWords.forEach((btn) => {
        btn.addEventListener('click', () => {
          btn.classList.add('btn_active');
          const wordId = btn.dataset.id;
          console.log(wordId);
          if (wordId) {
            ApiInst.createWordforUser(AuthInst.getUserId(), wordId, AuthInst.getToken(), 'hard', {});
          }
        });
      });
    }
  }
  public loadListenerDeleteWord() {
    const btnDeleteWords: NodeListOf<HTMLButtonElement> | null = document.querySelectorAll('.btn_delete');
    if (btnDeleteWords) {
      btnDeleteWords.forEach((btn) => {
        btn.addEventListener('click', () => {
          btn.classList.add('active');
          const wordId = btn.dataset.id;
          console.log('Deleting => ', wordId);
          if (wordId) {
            ApiInst.deleteWordforUser(AuthInst.getUserId(), wordId, AuthInst.getToken());
          }
        });
      });
    }
  }
  private loadListenerLearnedWord() {
    const btnLearnedWords: NodeListOf<HTMLButtonElement> | null = document.querySelectorAll('.btn_learned');
    if (btnLearnedWords) {
      btnLearnedWords.forEach((btn) => {
        btn.addEventListener('click', async () => {
          btn.classList.add('btn_active');
          const wordId = btn.dataset.id;
          console.log('Learned => ', wordId);
          if (wordId) {
            //console.log(await this.dict.checkWordInDict(wordId));
            //console.log(await this.checkWordHardOrNot(wordId));
            //console.log(await ApiInst.getAllWordsOfUser(AuthInst.getUserId(), AuthInst.getToken()));
            await ApiInst.createWordforUser(AuthInst.getUserId(), wordId, AuthInst.getToken(), 'learned', {});
            //const res = await ApiInst.getWordOfUserByWordId(AuthInst.getUserId(), wordId, AuthInst.getToken());
            //console.log(res);
          }
        });
      });
    }
  }
  public async disableListenersToHardWords() {
    let wordsOfUser: WordDictionary[] = await ApiInst.getAllWordsOfUser(AuthInst.getUserId(), AuthInst.getToken());
    wordsOfUser = wordsOfUser.filter((word) => word.difficulty === 'hard');
    const btnsOfHardWords: NodeListOf<HTMLButtonElement> | null = document.querySelectorAll('.btn_hard');
    if (btnsOfHardWords) {
      btnsOfHardWords.forEach((btn) => {
        const id: string | undefined = btn.dataset.id;
        if (id) {
          if (this.checkIncludeIdOfWordsDictionary(wordsOfUser, id)) {
            //console.log(id);
            btn.classList.add('btn_active');
          }
        }
      });
    }
  }
  public async disableListenersToLearnedWords() {
    let wordsOfUser: WordDictionary[] = await ApiInst.getAllWordsOfUser(AuthInst.getUserId(), AuthInst.getToken());
    wordsOfUser = wordsOfUser.filter((word) => word.difficulty === 'learned');
    const btnsOfHardWords: NodeListOf<HTMLButtonElement> | null = document.querySelectorAll('.btn_learned');
    if (btnsOfHardWords) {
      btnsOfHardWords.forEach((btn) => {
        const id: string | undefined = btn.dataset.id;
        if (id) {
          if (this.checkIncludeIdOfWordsDictionary(wordsOfUser, id)) {
            btn.classList.add('btn_active');
          }
        }
      });
    }
  }
  private checkIncludeIdOfWordsDictionary(arr: WordDictionary[], id: string): boolean {
    let result = false;
    arr.forEach((word) => {
      if (word.wordId === id) {
        result = true;
      }
    });
    return result;
  }
}
