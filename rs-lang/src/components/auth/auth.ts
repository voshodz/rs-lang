import bootstrap from 'bootstrap';
import { ApiInst, MainPageInst, UtilInst } from '../../instances/instances';
import { AuthUser } from '../../types';
import './login.scss';

export class Auth {
  token = '';
  userId = '';
  main: HTMLElement | null;
  constructor() {
    this.main = document.querySelector('.container-main');
    if (this.checkAuthorization()) {
      this.setTokenAndUserIdFromLocalStorage();
    }
  }
  initAuthorization() {
    const registerForm: HTMLDivElement | null = document.querySelector('.container-register');
    if (!this.checkAuthorization()) {
      if (registerForm) {
        registerForm.innerHTML = '';
        const btnRegister = document.createElement('div');
        btnRegister.classList.add('btn');
        btnRegister.classList.add('btn_create');
        btnRegister.classList.add('btn_register-form');
        btnRegister.innerHTML = 'Регистрация';
        btnRegister.addEventListener('click', () => {
          this.loadRegister();
        });
        registerForm.appendChild(btnRegister);
        const btnLogin = document.createElement('div');
        btnLogin.classList.add('btn');
        btnLogin.classList.add('btn_login');
        btnLogin.classList.add('btn_register-form');
        btnLogin.innerHTML = 'Логин';
        btnLogin.addEventListener('click', () => {
          this.loadLogin();
        });
        registerForm.appendChild(btnLogin);
      }
      return;
    }
    /***Succes Authorization** */
    if (registerForm) {
      registerForm.innerHTML = '';
      const btnExit = document.createElement('div');
      btnExit.classList.add('btn_exit');
      //btnExit.classList.add('btn-primary');
      btnExit.innerHTML = 'Выйти';
      btnExit.addEventListener('click', () => {
        localStorage.clear();
        MainPageInst.loadMainPage();
        this.initAuthorization();
      });
      registerForm.appendChild(btnExit);
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
    if (token && userId) {
      this.setToken(token);
      this.setUserId(userId);
    }
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
    //UtilInst.
    if (main) {
      main.innerHTML = `<form action="#" method="#" id="form">
                            <div>
                              <label>
                                Ваш email для входа:
                                <input type="text" name="name" value="abc2@mail.ru" autocomplete="off">
                              </label>
                            </div>
                            <div>
                              <label>
                                Ваш пароль:
                                <input type="text" name="password" value="kolorit1313" autocomplete="off">
                              </label>
                            </div>                     
                            <div>
                              <button type="submit">Отправить</button>
                            </div>
                          </form>`;
    }
    this.loadListenertoLoginForm();
  }
  private loadListenertoLoginForm() {
    const formInfo: HTMLElement | null = document.getElementById('form');
    if (formInfo) {
      formInfo.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name: HTMLInputElement | null = formInfo.querySelector('[name="name"]');
        const password: HTMLInputElement | null = formInfo.querySelector('[name="password"]');
        if (name && password) {
          await ApiInst.loginUser(name.value, password.value)
            .then(async (res) => {
              const data: AuthUser = await res.json();
              console.log(data);
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
      main.innerHTML = this.markdownRegisterForm;
    }
    this.loadListenerToRegisterForm();
  }
  private loadListenerToRegisterForm() {
    const regForm: HTMLElement | null = document.getElementById('register-form');
    if (regForm) {
      regForm.addEventListener('submit', (e) => {
        this.handlerToRegisterForm(regForm, e);
      });
    }
  }
  private async handlerToRegisterForm(form: HTMLElement, event: SubmitEvent) {
    event.preventDefault();
    const name: HTMLInputElement | null = form.querySelector('[name="name"]');
    const email: HTMLInputElement | null = form.querySelector('[name="email"]');
    const password: HTMLInputElement | null = form.querySelector('[name="password"]');
    if (name && password && email) {
      //console.log(name.value);
      //console.log(email.value);
      //console.log(password.value);
      const result = await ApiInst.createUser(email.value, password.value);
      if (result.status === 417) {
        alert('User already exist');
        this.loadRegister();
        return;
      }
      if (result.status === 422) {
        alert('Incorrect input data, pls try again');
        this.loadRegister();
        return;
      }
      if (result.status === 200) {
        UtilInst.cleanMain();
        await ApiInst.loginUser(email.value, password.value).then(async (res) => {
          const data: AuthUser = await res.json();
          console.log(data);
          this.successAuth(data);
        });
      }
    }
  }
  markdownRegisterForm = `
                <form action="#" method="#" id="register-form">
                  <div>
                    <label>
                      Введите ваше имя регистрации:
                      <input type="text" name="name" value="Alex N" autocomplete="off" required placeholder="Ваше имя">
                    </label>
                  </div>
                  <div>
                    <label>
                      Введите ваше email регистрации:
                      <input type="text" name="email" value="abc@mail.ru" autocomplete="off" required placeholder="Ваше email">
                    </label>
                  </div>
                  <div>
                    <label>
                      Придумайте пароль:
                      <input type="password" name="password" value="kolorit1313" autocomplete="off" required placeholder="Ваш пароль">
                    </label>
                  </div>                     
                  <div>
                    <button type="submit">Отправить</button>
                  </div>
                </form>`;
}
