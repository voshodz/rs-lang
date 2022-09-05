import { Auth } from './components/auth/auth';
import { AboutPageInst, AudioGameInst, AuthInst, BookInst, DictionaryInst, MainPageInst } from './instances/instances';
//import { Toast } from 'bootstrap';

export class App {
  loadMain() {
    const markdown = `<header class="header">
          <h1 class="header__icon">Rs Lang</h1>
          <div class="navigation">
            <div class="btn_book">
              Учебник
            </div>
            <div class="btn_dictionary">
              Словарь
            </div>
            <div class="btn_audiogame">
              АудиоИгра
            </div>
            <div class="btn_about">
              О Команде
            </div>
          </div>
          <div class="container-register">
          </div>
      </header>
      <div class="main-page">
        <div class="main-page__wrapper">
          <div class="main-page__text">
            RSLang - приложение для изучения английского языка!
            <span>Учебник с 3600 наиболее употребляемый словами
              Словарь для запоминания, и аудиоигра для закрепления
            - все это ты найдешь в RSLang.</span>
          </div>
          <div class="main-page__img">
            <img src="./assets/main.png" alt="main__png">
          </div>  
        </div>
        <div class="container-main">
          
        </div>;
      </div>
      <footer class="footer">
        <a class="footer__github" href="http://github.voshodz"></a>
        <div class="footer__year">2022</div>

        <a class="footer__icon"href="https://rs.school/" class="footer__course"></a>

      </footer>`;
    const body = document.querySelector('body');
    if (body) {
      body.innerHTML = markdown;
    }
  }
  public loadApp() {
    AuthInst.initAuthorization();
    const btnHeader = document.querySelector('.header__icon');
    btnHeader?.addEventListener('click', () => {
      MainPageInst.loadMainPage();
    });
    const btnReg = document.querySelector('.btn_create');
    btnReg?.addEventListener('click', () => {
      AuthInst.loadRegister();
    });
    const btnLogin = document.querySelector('.btn_login');
    btnLogin?.addEventListener('click', () => {
      AuthInst.loadLogin();
    });
    const btnBook = document.querySelector('.btn_book');
    btnBook?.addEventListener('click', () => {
      BookInst.init();
    });
    const btnDict = document.querySelector('.btn_dictionary');
    btnDict?.addEventListener('click', async () => {
      await DictionaryInst.init();
    });
    const btnAbout = document.querySelector('.btn_about');
    btnAbout?.addEventListener('click', () => {
      AboutPageInst.loadAboutPage();
    });

    const btnAudioGame = document.querySelector('.btn_audiogame');
    btnAudioGame?.addEventListener('click', () => {
      AudioGameInst.loadAudioGameFromMainPage();
    });
  }
}
