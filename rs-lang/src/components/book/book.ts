import { ApiInst, AuthInst, CardInst } from '../../instances/instances';
import { Word } from '../../types';
import { Auth } from '../auth/auth';
//const token =
//  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDIxMTRjODY5ODA3MDAxNWEzYTA3MCIsImlhdCI6MTY2MTA4MDA0OSwiZXhwIjoxNjYxMDk0NDQ5fQ.XgPP6VHAo-wlzzlPCxwSLB6frxQK6zc1KwfyT0bPvrY';
export class Book {
  //api: Api;
  //auth: Auth;
  public init() {
    this.initContainerWords();
    this.initSelectOfGroupWords();
    this.initGroupButtons();
  }
  private initContainerWords() {
    const main: HTMLDivElement | null = document.querySelector('.container-main');
    if (main) {
      main.innerHTML = '';
    }
    if (main) {
      main.innerHTML += `
                          <div class="wrapper-btn">
                          <div class="btn btn_group" data-group="0">Group1</div>
                          <div class="btn btn_group" data-group="1">Group2</div>
                          <div class="btn btn_group" data-group="2">Group3</div>
                          <div class="btn btn_group" data-group="3">Group4</div>
                          <div class="btn btn_group" data-group="4">Group5</div>
                          <div class="btn btn_group" data-group="5">Group6</div>
                        </div>
                          <div class="container-words">
                          <div class="container-words__select">
                            ${CardInst.markdownOfSelect}
                          </div>
                          <div class="container-words__field">
                          </div>
                        </div>`;
    }
  }
  private initGroupButtons() {
    const btnsGroup = document.querySelectorAll('.btn_group') as NodeListOf<HTMLDivElement>;
    let group = 0;
    btnsGroup.forEach((btn) => {
      btn.addEventListener('click', async () => {
        this.deleteActiveFromButtons(btnsGroup);
        btn.classList.add('active');
        group = 0;
        if (btn.dataset.group) {
          group = parseInt(btn.dataset.group);
        }
        const words: Array<Word> = await ApiInst.getWordsWithPageAndGroup(AuthInst.getToken(), 0, group);
        const containerWords: HTMLDivElement | null = document.querySelector('.container-words__field');
        if (containerWords) {
          containerWords.innerHTML = '';
          words.forEach((word) => {
            containerWords.innerHTML += CardInst.createCard(word);
            CardInst.loadListenersToButtons();
          });
          CardInst.disableListenersToHardWords();
        }
      });
    });
  }
  private initSelectOfGroupWords() {
    const select: HTMLSelectElement | null = document.querySelector('.select');
    const btnsGroup = document.querySelectorAll('.btn_group') as NodeListOf<HTMLDivElement>;
    if (select) {
      select.addEventListener('change', async () => {
        const group: number = this.findActiveBtnOfGroup(btnsGroup);
        console.log(group);
        const containerWords: HTMLDivElement | null = document.querySelector('.container-words__field');
        if (containerWords) {
          containerWords.innerHTML = '';
          const words: Array<Word> = await ApiInst.getWordsWithPageAndGroup(
            AuthInst.getToken(),
            parseInt(select.value),
            group
          );
          words.forEach((word) => {
            containerWords.innerHTML += CardInst.createCard(word);
            CardInst.loadListenersToButtons();
          });
          CardInst.disableListenersToHardWords();
        }
      });
    }
  }
  private findActiveBtnOfGroup(btns: NodeListOf<HTMLDivElement>): number {
    let result = '0';
    btns.forEach((btn) => {
      if (btn.className.includes('active')) {
        if (btn.dataset.group) {
          result = btn.dataset.group;
        }
      }
    });
    return parseInt(result);
  }
  private deleteActiveFromButtons(btns: NodeListOf<HTMLDivElement>) {
    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  }
}
