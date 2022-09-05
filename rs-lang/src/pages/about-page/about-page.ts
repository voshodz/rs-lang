import { UtilInst } from '../../instances/instances';

export class AboutPage {
  public createAboutPage(): string {
    return `<div class="about-page">
              <div class="about-page__info">
                <div class="about-page__img">
                  <img src="./assets/about.jpg" alt="about-img">
                </div>
                <h4 class="about-page__title">Alex N. 2022</h4>
                <div class="about-page__text">
                  <a href="http://github.com/voshodz"><span>github.com/voshodz</span></a>
                </div>
              </div>
            </div>`;
  }
  public loadAboutPage() {
    UtilInst.cleanMainPage();
    const mainPage = document.querySelector('.main-page');
    if (mainPage) {
      mainPage.innerHTML = this.createAboutPage();
    }
  }
}
