import { ApiInst, AuthInst, DictionaryInst } from '../../instances/instances';
import { BASE_URL, Word } from '../../types';

export class Card {
  //auth: Auth;

  private markdownOfButtons(wordId: string): string {
    const markDown = `
                      <div class="card__btn-wrapper">
                        <button class="btn btn_hard" data-id=${wordId}>Сложное слово</button>
                        <button class="btn btn_learned" data-id=${wordId}>Изученное слово</button>
                        <button class="btn btn_delete" data-id=${wordId}>Удалить слово</button>
                      </div>`;
    return markDown;
  }
  /*private async checkWordHardOrNot(wordId: string): Promise<string> {
    //await this.dict.checkExistWorIdOrNotInDict(wordId).then((res) => console.log(res));
    const res = await DictionaryInst.checkWordInDict(wordId);
    //console.log(await res);
    if ((await res) === true) {
      return 'btn_hard active';
    } else {
      return 'btn_hard';
    }
  }*/
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
                          </select>`;
  public createCard(word: Word): string {
    const markdownOfCard = `<div class="card">
                <div class="card__info" data-id="${word.id}">
                  
                  Слово: ${word.word}
                  <br>
                  Перевод: ${word.wordTranslate}
                  <br>
                  <img src="${BASE_URL}/${word.image}" alt="">
                  page: ${word.page}
                  group: ${word.group}
                </div>
                ${this.buttonsWithAuthorizationInfo(word.id)}
            </div>`;
    this.loadListenersToButtons();
    return markdownOfCard;
  }
  private buttonsWithAuthorizationInfo(wordId: string): string {
    if (AuthInst.checkAuthorization()) {
      return this.markdownOfButtons(wordId);
    }
    return '<div>Нет авторизации</div>';
  }
  public loadListenersToButtons() {
    //console.log('loading');
    this.loadListenerAddHardWord();
    this.loadListenerDeleteWord();
    this.loadListenerLearnedWord();
  }
  private loadListenerAddHardWord() {
    const btnAddHardWords: NodeListOf<HTMLButtonElement> | null = document.querySelectorAll('.btn_hard');
    if (btnAddHardWords) {
      btnAddHardWords.forEach((btn) => {
        btn.addEventListener('click', () => {
          btn.classList.add('active');
          const wordId = btn.dataset.id;
          console.log(wordId);
          if (wordId) {
            ApiInst.createWordforUser(AuthInst.getUserId(), wordId, AuthInst.getToken(), 'hard', {});
          }
        });
      });
    }
  }
  private loadListenerDeleteWord() {
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
          btn.classList.add('active');
          const wordId = btn.dataset.id;
          console.log('Learned => ', wordId);
          if (wordId) {
            //console.log(await this.dict.checkWordInDict(wordId));
            //console.log(await this.checkWordHardOrNot(wordId));
            await ApiInst.getAllWordsOfUser(AuthInst.getUserId(), AuthInst.getToken());
            //const res = await ApiInst.getWordOfUserByWordId(AuthInst.getUserId(), wordId, AuthInst.getToken());
            //console.log(res);
          }
        });
      });
    }
  }
}
