import { ApiInst } from '../../instances/instances';
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
    localStorage.setItem('token', this.getToken());
    if (this.main) {
      this.main.innerHTML = `<form action="#" method="#" id="form">
                            <div>
                              <label>
                                Ваш email для входа:
                                <input type="text" name="name" value="abc@mail.ru" autocomplete="off">
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
    alert('Incorrect Authorization info');
  }
  private successAuth(data: AuthUser) {
    this.setToken(data.token);
    this.setUserId(data.userId);
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
    if (this.main) {
      this.main.innerHTML = '';
      this.main.innerHTML = `<div>UserID = ${data.userId}  UserToken = ${data.token}</div>
                      <h1> Авторизация прошла успешно</h1>
                    `;
    }
  }
  public loadRegister() {
    if (this.main) {
      this.main.innerHTML = this.main.innerHTML = this.markdownRegisterForm;
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
      console.log(name.value);
      console.log(email.value);
      console.log(password.value);
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
        alert('Success!!');
        if (this.main) {
          this.main.innerHTML = '<h1>Success</h1>';
        }
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
