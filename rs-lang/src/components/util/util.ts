export class Util {
  public cleanMain() {
    const main: HTMLDivElement | null = document.querySelector('.container-main');
    if (main) {
      main.innerHTML = '';
    }
  }
  public cleanContainerWords() {
    const wordsField: HTMLDivElement | null = document.querySelector('.container-words__field');
    if (wordsField) {
      wordsField.innerHTML = '';
    }
  }
}
