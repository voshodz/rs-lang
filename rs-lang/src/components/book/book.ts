import { ApiInst, AudioGameInst, AuthInst, CardInst, UtilInst } from '../../instances/instances';
import { Word } from '../../types';

export class Book {
  public init() {
    UtilInst.cleanMainPage();
    this.initContainerWords();
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
    const audioGameBtn = document.createElement('div');
    audioGameBtn.classList.add('btn_group');
    audioGameBtn.innerHTML = 'Аудиоигра';
    audioGameBtn.addEventListener('click', () => {
      let page = 0;
      let group = 0;
      const groupBtns: NodeListOf<HTMLDivElement> | null = document.querySelectorAll('.btn_group');
      if (groupBtns) {
        groupBtns.forEach((btn) => {
          if (btn.classList.contains('active')) {
            const grouId = btn.dataset.group;
            if (grouId) {
              group = parseInt(grouId);
            }
          }
        });
      }
      const pageItems: NodeListOf<HTMLLIElement> | null = document.querySelectorAll('.page-item');
      if (pageItems) {
        pageItems.forEach((pageItem) => {
          if (pageItem.classList.contains('page-item_active')) {
            const pageId = pageItem.dataset.id;
            if (pageId) {
              page = parseInt(pageId) - 1;
            }
          }
        });
      }
      AudioGameInst.loadAudioGameFromBook(group, page);
    });
    wrapperBtn.appendChild(audioGameBtn);
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
      this.removeActiveFromPageItem();
      const btns: NodeListOf<HTMLDivElement> | null = document.querySelectorAll('.btn_group');
      btns.forEach((btn) => {
        btn.classList.remove('active');
      });
      btnGroup.classList.add('active');
      UtilInst.cleanContainerWords();
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
      this.removeActiveFromPageItem();
      pageItem.classList.add('page-item_active');
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
  private removeActiveFromPageItem() {
    const pageItems: NodeListOf<HTMLLIElement> | null = document.querySelectorAll('.page-item');
    if (pageItems) {
      pageItems.forEach((pageItem) => {
        pageItem.classList.remove('page-item_active');
      });
    }
  }

  private createContainerWords(): HTMLDivElement {
    const containerWords = document.createElement('div');
    containerWords.className = 'container-words';
    const containerWordsField = document.createElement('div');
    containerWordsField.className = `container-words__field`;
    containerWords.appendChild(containerWordsField);
    return containerWords;
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
}
