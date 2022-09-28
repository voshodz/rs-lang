import { ApiInst, MainPageInst, UtilInst } from '../../instances/instances';
import { AuthUser } from '../../types';
import './login.scss';

export class Auth {
  token = '';
  userId = '';
  email = '';
  main: HTMLElement | null;
  constructor() {
    this.main = document.querySelector('.container-main');
    if (this.checkAuthorization()) {
      this.setTokenAndUserIdFromLocalStorage();
    }
  }
  initAuthorization() {
    const containerRegister: HTMLDivElement | null = document.querySelector('.container-register');
    if (!this.checkAuthorization()) {
      if (containerRegister) {
        containerRegister.innerHTML = '';
        const btnRegister = document.createElement('div');
        btnRegister.classList.add('btn');
        btnRegister.classList.add('btn_create');
        btnRegister.classList.add('btn_register-form');
        btnRegister.innerHTML = 'Регистрация';
        btnRegister.addEventListener('click', () => {
          this.loadRegister();
        });
        containerRegister.appendChild(btnRegister);
        const btnLogin = document.createElement('div');
        btnLogin.classList.add('btn');
        btnLogin.classList.add('btn_login');
        btnLogin.classList.add('btn_register-form');
        btnLogin.innerHTML = 'Логин';
        btnLogin.addEventListener('click', () => {
          this.loadLogin();
        });
        containerRegister.appendChild(btnLogin);
      }
      return;
    }
    /***Succes Authorization** */
    if (containerRegister) {
      containerRegister.innerHTML = '';
      const emailInfo = document.createElement('div');
      emailInfo.classList.add('email__info');
      emailInfo.innerHTML = this.getEmail();
      containerRegister.appendChild(emailInfo);
      const btnExit = document.createElement('div');
      btnExit.classList.add('btn_exit');
      //btnExit.classList.add('btn-primary');
      btnExit.innerHTML = 'Выйти';
      btnExit.addEventListener('click', () => {
        localStorage.clear();
        MainPageInst.loadMainPage();
        this.initAuthorization();
      });
      containerRegister.appendChild(btnExit);
    }
  }
  public checkAuthorization(): boolean {
    if (localStorage.getItem('token') && localStorage.getItem('userId')) {
      return true;
    }
    return false;
  }
  private setTokenAndUserIdFromLocalStorage() {
    const token: string | null = localStorage.getItem('token');
    const userId: string | null = localStorage.getItem('userId');
    const email: string | null = localStorage.getItem('email');
    //const email: string | null
    if (token && userId && email) {
      this.setEmail(email);
      this.setToken(token);
      this.setUserId(userId);
    }
  }
  public setEmail(email: string) {
    this.email = email;
  }
  public getEmail(): string {
    return this.email;
  }
  public getToken(): string {
    return this.token;
  }
  public setToken(token: string): void {
    this.token = token;
  }
  public setUserId(userId: string): void {
    this.userId = userId;
  }
  public getUserId(): string {
    return this.userId;
  }
  public loadLogin() {
    UtilInst.cleanMainPage();
    UtilInst.AddContainerMainToMainPage();
    const main = document.querySelector('.container-main');
    if (main) {
      main.innerHTML = `<div class="wrapper-register">
                            <form action="#" method="#" id="form">
                            <div>
                              <label>
                                Ваш email для входа:
                                <input type="text" name="name" value="" >
                              </label>
                            </div>
                            <div>
                              <label>
                                Ваш пароль:
                                <input type="password" name="password" value="" autocomplete="off">
                              </label>
                            </div>                     
                            <div>
                              <button class="register-button" type="submit">Отправить</button>
                            </div>
                          </form>
                          </div>`;
    }
    this.loadListenertoLoginForm();
  }
  private loadListenertoLoginForm() {
    const formInfo: HTMLElement | null = document.getElementById('form');
    if (formInfo) {
      formInfo.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email: HTMLInputElement | null = formInfo.querySelector('[name="name"]');
        const password: HTMLInputElement | null = formInfo.querySelector('[name="password"]');
        if (email && password) {
          await ApiInst.loginUser(email.value, password.value)
            .then(async (res) => {
              const data: AuthUser = await res.json();
              console.log(data);
              localStorage.setItem('email', email.value);
              this.setEmail(email.value);
              this.successAuth(data);
            })
            .catch((err) => {
              this.incorrectAuth(err);
            });
        }
      });
    }
  }
  private incorrectAuth(err: string) {
    console.log(err);
    alert('Нeправильные введенные данные');
    /*const toastTrigger: any = document.getElementById('liveToastBtn');
    const toastLiveExample: any = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();*/
  }
  private successAuth(data: AuthUser) {
    this.setToken(data.token);
    this.setUserId(data.userId);
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
    this.initAuthorization();
    UtilInst.cleanMainPage();
    const mainPage = document.querySelector('.main-page');
    if (mainPage) {
      mainPage.innerHTML = MainPageInst.startMainPage();
    }
  }
  public loadRegister() {
    UtilInst.cleanMainPage();
    UtilInst.AddContainerMainToMainPage();
    const main = document.querySelector('.container-main');
    if (main) {
      main.innerHTML = this.markdowncontainerRegister;
    }
    this.loadListenerTocontainerRegister();
  }
  private loadListenerTocontainerRegister() {
    const regForm: HTMLElement | null = document.getElementById('register-form');
    if (regForm) {
      regForm.addEventListener('submit', (e) => {
        this.handlerTocontainerRegister(regForm, e);
      });
    }
  }
  private async handlerTocontainerRegister(form: HTMLElement, event: SubmitEvent) {
    event.preventDefault();
    const name: HTMLInputElement | null = form.querySelector('[name="name"]');
    const email: HTMLInputElement | null = form.querySelector('[name="email"]');
    const password: HTMLInputElement | null = form.querySelector('[name="password"]');
    if (name && password && email) {
      const result = await ApiInst.createUser(email.value, password.value);
      if (result.status === 417) {
        alert('User already exist');
        this.loadRegister();
        return;
      }
      if (result.status === 422) {
        alert('Incorrect input data, pls try again');
        localStorage.setItem('email', email.value);
        this.loadRegister();
        return;
      }
      if (result.status === 200) {
        UtilInst.cleanMain();
        await ApiInst.loginUser(email.value, password.value).then(async (res) => {
          const data: AuthUser = await res.json();
          localStorage.setItem('email', email.value);
          this.setEmail(email.value);
          this.successAuth(data);
        });
      }
    }
  }
  markdowncontainerRegister = `
          <div class="wrapper-register">
                <form action="#" method="#" id="register-form">
                  <div>
                    <label>
                      Введите ваше имя регистрации:
                      <input type="text" name="name" value="" autocomplete="off" required placeholder="Ваше имя">
                    </label>
                  </div>
                  <div>
                    <label>
                      Введите ваше email регистрации:
                      <input type="text" name="email" value="" autocomplete="off" required placeholder="Ваше email">
                    </label>
                  </div>
                  <div>
                    <label>
                      Придумайте пароль:
                      <input type="password" name="password" value="" autocomplete="off" required placeholder="Ваш пароль">
                    </label>
                  </div>                     
                  <div>
                    <button class="register-button" type="submit">Регистрация</button>
                  </div>
                </form>
            </div>`;
}
