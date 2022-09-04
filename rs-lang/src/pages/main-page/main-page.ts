export class MainPage {
  public startMainPage(): string {
    const markDownMainPage = `<div class="main-page__wrapper">
                                <div class="main-page__text">
                                  RSLang - удобное приложение для изучения английского языка!
                                </div>
                                <div class="main-page__img">
                                  <img src="./assets/main.png" alt="main__png">
                                </div>  
                              </div>
                              <div class="container-main">
                                
                              </div>`;
    return markDownMainPage;
  }
  public loadMainPage() {
    const mainPage = document.querySelector('.main-page');
    if (mainPage) {
      mainPage.innerHTML = '';
      mainPage.innerHTML = this.startMainPage();
    }
  }
}
