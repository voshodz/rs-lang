import { ApiInst, AuthInst, CardInst, DictionaryInst, UtilInst } from '../../instances/instances';
import { BASE_URL, Word, WordDictionary } from '../../types';

export class Dictionary {
  wordsOfUser: Array<WordDictionary>;
  constructor() {
    this.wordsOfUser = [];
  }
  public async init() {
    this.loadDictionary();
  }
  private async loadDictionary() {
    UtilInst.cleanMainPage();
    UtilInst.AddContainerMainToMainPage();
    const main: HTMLDivElement | null = document.querySelector('.container-main');
    if (!AuthInst.checkAuthorization()) {
      if (main) {
        AuthInst.loadLogin();
        //main.innerHTML = `<div>Нет авторизации</div`;
        return;
      }
    }
    if (main) {
      main.innerHTML = '';
      main.appendChild(this.createGroupBtnsWithListener());
      main.appendChild(this.createTypeBtnsForDictionary());
      main.appendChild(this.createContainerWords());
    }
    //await this.loadCardsOfHardWordsOfUser();
  }
  private createGroupBtnsWithListener(): HTMLDivElement {
    const wrapperBtn = document.createElement('div');
    wrapperBtn.classList.add('wrapper-btn');
    for (let i = 0; i < 6; i++) {
      const groupBtn = this.createGroupBtn(i);
      if (i === 0) {
        groupBtn.classList.add('active');
      }
      wrapperBtn.appendChild(groupBtn);
    }
    return wrapperBtn;
  }
  private createGroupBtn(group: number): HTMLDivElement {
    const textoFLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const textOfDescriptions = [
      '<b>Easy<b> 1-600',
      '<b>Easy<b> 601-1200',
      '<b>Medium<b> 1201-1800',
      '<b>Medium<b> 1801-2400',
      '<b>Hard<b> 2401-3000',
      '<b>Hard<b> 3001-3600',
    ];
    const btnGroup = document.createElement('div');
    const btnLevel = document.createElement('div');
    btnLevel.classList.add('btn_group__level');
    btnLevel.innerHTML = textoFLevels[group];
    const btnText = document.createElement('div');
    btnText.classList.add('btn_group__text');
    btnText.innerHTML = textOfDescriptions[group];
    //btnGroup.classList.add('btn');
    btnGroup.classList.add('btn_group');
    btnGroup.dataset.group = group.toString();
    //btnGroup.innerHTML = `Group ${group + 1}`;
    btnGroup.appendChild(btnText);
    btnGroup.appendChild(btnLevel);
    btnGroup.addEventListener('click', async () => {
      const btns: NodeListOf<HTMLDivElement> | null = document.querySelectorAll('.btn_group');
      btns.forEach((btn) => {
        btn.classList.remove('active');
      });
      btnGroup.classList.add('active');
      UtilInst.cleanContainerWords();
      const typeBtnHard = document.querySelector('.type-btns__hard');
      const typeBtnLearned = document.querySelector('.type-btns__learned');
      if (typeBtnHard && typeBtnLearned) {
        typeBtnHard.classList.remove('active');
        typeBtnLearned.classList.remove('active');
      }
      //await this.loadCardsOfHardWordsOfUser(group);
    });
    return btnGroup;
  }
  private createContainerWords(): HTMLDivElement {
    const containerWords = document.createElement('div');
    containerWords.className = 'container-words';
    const containerWordsField = document.createElement('div');
    containerWordsField.className = `container-words__field`;
    containerWords.appendChild(containerWordsField);
    return containerWords;
  }
  private createTypeBtnsForDictionary(): HTMLDivElement {
    const wrapperTypeBtns = document.createElement('div');
    wrapperTypeBtns.classList.add('type-btns');
    const btnTypeHard = document.createElement('div');
    btnTypeHard.classList.add('type-btns__hard');
    btnTypeHard.innerHTML = 'Сложные слова';

    btnTypeHard.addEventListener('click', async () => {
      document.querySelector('.type-btns__learned')?.classList.remove('active');
      btnTypeHard.classList.add('active');
      await this.loadCardsOfUserWithType(this.getCurrentActiveGroup(), 'hard');
    });
    const btnTypeLearned = document.createElement('div');
    btnTypeLearned.classList.add('type-btns__learned');
    btnTypeLearned.innerHTML = 'Изученные слова';

    btnTypeLearned.addEventListener('click', async () => {
      document.querySelector('.type-btns__hard')?.classList.remove('active');
      btnTypeLearned.classList.add('active');
      await this.loadCardsOfUserWithType(this.getCurrentActiveGroup(), 'learned');
    });
    wrapperTypeBtns.appendChild(btnTypeHard);
    wrapperTypeBtns.appendChild(btnTypeLearned);
    return wrapperTypeBtns;
  }
  private async loadCardsOfUserWithType(group: number, type = 'hard') {
    const containerWords: HTMLDivElement | null = document.querySelector('.container-words__field');
    let words: Array<WordDictionary> = await ApiInst.getAllWordsOfUser(AuthInst.getUserId(), AuthInst.getToken());
    if (type === 'hard') {
      words = words.filter((word) => word.difficulty === 'hard');
    } else {
      words = words.filter((word) => word.difficulty === 'learned');
    }
    if (containerWords) {
      containerWords.innerHTML = '';
      words.forEach(async (w) => {
        const word: Word = await ApiInst.getWordById(w.wordId);
        if (word.group === group) {
          containerWords.appendChild(this.createCardInDictionary(word));
        }
      });
    }
  }
  private createCardInDictionary(word: Word): HTMLDivElement {
    const cardDiv: HTMLDivElement = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `
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
                                  ${word.audioExample}
                              </div>
                            </div>
                            
                          <div class="card__img">
                            <img src="${BASE_URL}/${word.image}" alt="${word.image}">
                          </div>
                        </div
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
    btnDelete.innerHTML = 'Восстановить слово';
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
  private getCurrentActiveGroup(): number {
    let result = 0;
    const btns: NodeListOf<HTMLDivElement> | null = document.querySelectorAll('.btn_group');
    btns.forEach((btn) => {
      if (btn.classList.contains('active')) {
        const group: string | undefined = btn.dataset.group;
        if (group) {
          result = parseInt(group);
        }
      }
    });
    return result;
  }
}
