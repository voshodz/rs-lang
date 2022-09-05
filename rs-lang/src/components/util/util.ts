export class Util {
  public cleanMain() {
    const main: HTMLDivElement | null = document.querySelector('.container-main');
    if (main) {
      main.innerHTML = '';
    }
  }
  public cleanMainPage() {
    const mainPage: HTMLDivElement | null = document.querySelector('.main-page');
    if (mainPage) {
      mainPage.innerHTML = '';
    }
  }
  public cleanContainerWords() {
    const wordsField: HTMLDivElement | null = document.querySelector('.container-words__field');
    if (wordsField) {
      wordsField.innerHTML = '';
    }
  }
  public AddContainerMainToMainPage() {
    const mainPage = document.querySelector('.main-page');
    if (mainPage) {
      const containerMain = document.createElement('div');
      containerMain.classList.add('container-main');
      mainPage.appendChild(containerMain);
    }
  }
}
