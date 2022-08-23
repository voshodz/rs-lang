import './styles/index.scss';
import { Api } from './components/api';
import { Card } from './components/card';

/**********Type */
import { AuthUser, Word } from './types';
import { Book } from './components/book/book';
import { Auth } from './components/auth/auth';
import { MainPage } from './pages/main-page';
import { Dictionary } from './components/dictionary/dictionary';
/****Instances */
//const card = new Card();
const book = new Book();
const api = new Api();
const auth = new Auth();
const dict = new Dictionary();
//const mainPage = new MainPage();
//email: "abc@mail.ru"
//id: "6302114c8698070015a3a070"
//5e9f5ee35eb9e72bc21af4a8
//auth.loadLogin();
const btnCreate: HTMLDivElement | null = document.querySelector('.btn_create');
btnCreate?.addEventListener('click', async () => {
  console.log('Creating User');
  console.log(await api.createUser('abc@mail.ru', 'kolorit1313'));
});

const btnLogin: HTMLDivElement | null = document.querySelector('.btn_login');
btnLogin?.addEventListener('click', async () => {
  console.log('Btn Login');
  auth.loadLogin();
  console.log(auth.checkAuthorization());
  //mainPage.loadMainPage();
});

const btnBook: HTMLDivElement | null = document.querySelector('.btn_book');
btnBook?.addEventListener('click', async () => {
  book.init();
});
const btnGames: HTMLDivElement | null = document.querySelector('.btn_games');
btnGames?.addEventListener('click', async () => {
  const mainContainer: HTMLDivElement | null = document.querySelector('.container-main');
  if (mainContainer) {
    mainContainer.innerHTML = '';
    mainContainer.innerHTML = `<h1 class="header">Here Mini games</h1>`;
  }
});
const btnGetUser: HTMLDivElement | null = document.querySelector('.btn_getuser');
btnGetUser?.addEventListener('click', async () => {
  console.log('Getting user info');
  console.log(await api.getUser(auth.getToken(), auth.getUserId()));
});

const btnDef: HTMLDivElement | null = document.querySelector('.btn_default');
btnDef?.addEventListener('click', async () => {
  console.log('default words!!');
  console.log(await api.getWords(auth.getToken()));
});

const btnDictionary: HTMLDivElement | null = document.querySelector('.btn_dictionary');
btnDictionary?.addEventListener('click', async () => {
  console.log('/words get request');
  //console.log(await api.getAllWordsOfUser(auth.getUserId(), auth.getToken()));
  //await dict.init();
  //console.log(await dict.getUsersWords(auth.getUserId()));
  //console.log(await dict.checkWordInDict('6304d2ef7e7d3d001593484c'));
});
