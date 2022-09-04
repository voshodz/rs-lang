import { ApiInst, AuthInst, CardInst, DictionaryInst, UtilInst } from '../../instances/instances';
import { Word } from '../../types';
import { Auth } from '../auth/auth';

export class Book {
  public init() {
    UtilInst.cleanMainPage();
    this.initContainerWords();
    //this.initSelectOfGroupWords();
    this.initGroupButtons();
  }

  private initContainerWords() {
    const mainPage = document.querySelector('.main-page');
    if (mainPage) {
      const containerMain = document.createElement('div');
      containerMain.classList.add('container-main');
      mainPage.appendChild(containerMain);
    }
    const main: HTMLDivElement | null = document.querySelector('.container-main');
    if (main) {
      main.innerHTML = '';
    }
    if (main) {
      main.appendChild(this.createGroupBtnsWithListener());
      main.appendChild(this.createPaginationMenu());
      main.appendChild(this.createContainerWords());
      /*main.innerHTML += `
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
                        </div>`;*/
    }
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
      //const words: Array<Word> = await ApiInst.getWordsWithPageAndGroup(AuthInst.getToken(), 0, group);
      const containerWords: HTMLDivElement | null = document.querySelector('.container-words__field');
      if (containerWords) {
        containerWords.innerHTML = '';
        /*words.forEach((word) => {
          containerWords.appendChild(CardInst.createCard(word));
        });
        CardInst.disableListenersToHardWords();
        CardInst.disableListenersToLearnedWords();*/
      }
    });
    return btnGroup;
  }
  private createPaginationMenu(): HTMLDivElement {
    const wrapperPagination = document.createElement('div');
    wrapperPagination.classList.add('wrapper-pagination');
    const navigationBar = document.createElement('nav');
    navigationBar.ariaLabel = 'Page navigation example';
    const uListNavigation = document.createElement('ul');
    uListNavigation.classList.add('pagination');
    for (let i = 1; i <= 30; i++) {
      uListNavigation.appendChild(this.creatPageLinkWithListener(i));
    }
    navigationBar.appendChild(uListNavigation);
    wrapperPagination.appendChild(navigationBar);
    return wrapperPagination;
  }
  private creatPageLinkWithListener(page: number): HTMLLIElement {
    const pageItem: HTMLLIElement = document.createElement('li');
    pageItem.classList.add('page-item');
    pageItem.dataset.id = `${page}`;
    const pageLink = document.createElement('a');
    pageLink.classList.add('page-link');
    pageLink.innerHTML = `${page}`;
    pageItem.appendChild(pageLink);
    pageItem.addEventListener('click', async () => {
      const words: Array<Word> = await ApiInst.getWordsWithPageAndGroup(
        AuthInst.getToken(),
        page - 1,
        this.findActiveBtnOfGroup()
      );
      const containerWords: HTMLDivElement | null = document.querySelector('.container-words__field');
      if (containerWords) {
        containerWords.innerHTML = '';
        words.forEach((word) => {
          //containerWords.innerHTML += CardInst.createCard(word);
          containerWords.appendChild(CardInst.createCard(word));
        });
        CardInst.disableListenersToHardWords();
        CardInst.disableListenersToLearnedWords();
      }
    });
    return pageItem;
  }
  private initGroupButtons() {
    const btnsGroup = document.querySelectorAll('.btn_group') as NodeListOf<HTMLDivElement>;
    let group = 0;
    btnsGroup.forEach((btn) => {
      btn.addEventListener('click', async () => {
        console.log(this.findActiveBtnOfGroup());
        this.deleteActiveFromButtons(btnsGroup);
        btn.classList.add('active');
        group = 0;
        if (btn.dataset.group) {
          group = parseInt(btn.dataset.group);
        }
        /*const words: Array<Word> = await ApiInst.getWordsWithPageAndGroup(AuthInst.getToken(), 0, group);
        const containerWords: HTMLDivElement | null = document.querySelector('.container-words__field');
        if (containerWords) {
          containerWords.innerHTML = '';
          words.forEach((word) => {
            //containerWords.innerHTML += CardInst.createCard(word);
            containerWords.appendChild(CardInst.createCard(word));
          });
          CardInst.disableListenersToHardWords();
          CardInst.disableListenersToLearnedWords();
        }*/
      });
    });
  }
  private createContainerWords(): HTMLDivElement {
    const containerWords = document.createElement('div');
    containerWords.className = 'container-words';
    const containerWordsField = document.createElement('div');
    containerWordsField.className = `container-words__field`;
    containerWords.appendChild(containerWordsField);
    return containerWords;
  }
  private initSelectOfGroupWords() {
    const select: HTMLSelectElement | null = document.querySelector('.select');
    const btnsGroup = document.querySelectorAll('.btn_group') as NodeListOf<HTMLDivElement>;
    if (select) {
      select.addEventListener('change', async () => {
        const group: number = this.findActiveBtnOfGroup();
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
            //containerWords.innerHTML += CardInst.createCard(word);
            containerWords.appendChild(CardInst.createCard(word));
            //CardInst.loadListenersToButtons();
          });
          CardInst.disableListenersToHardWords();
        }
      });
    }
  }
  private findActiveBtnOfGroup(): number {
    const btns: NodeListOf<HTMLDivElement> = document.querySelectorAll('.btn_group');
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
