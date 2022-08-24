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
                              Имя:
                              <input type="text" name="name" value="abc@mail.ru">
                            </label>
                          </div>
                          <div>
                            <label>
                              Пароль:
                              <input type="text" name="password" value="kolorit1313">
                            </label>
                          </div>                     
                          <div>
                            <button type="submit">Отправить</button>
                          </div>
                        </form>`;
    }
    this.loadListenertoForm();
  }
  private loadListenertoForm() {
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
}
