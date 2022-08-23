import './styles/index.scss';
export class MainPage {
  loadMainPage() {
    const body: HTMLBodyElement | null = document.querySelector('body');
    if (body) {
      body.innerHTML = '';
    }
  }
}
