import { Auth } from './components/auth/auth';
import { AboutPageInst, AudioGameInst, AuthInst, BookInst, DictionaryInst, MainPageInst } from './instances/instances';
//import { Toast } from 'bootstrap';
import './styles/index.scss';

AuthInst.initAuthorization();
const btnHeader = document.querySelector('.header__icon');
btnHeader?.addEventListener('click', () => {
  MainPageInst.loadMainPage();
});
const btnReg = document.querySelector('.btn_create');
btnReg?.addEventListener('click', () => {
  console.log('reg');
  AuthInst.loadRegister();
});
const btnLogin = document.querySelector('.btn_login');
btnLogin?.addEventListener('click', () => {
  console.log('auth');
  AuthInst.loadLogin();
  console.log(AuthInst.getToken());
});
const btnBook = document.querySelector('.btn_book');
btnBook?.addEventListener('click', () => {
  BookInst.init();
});
const btnDict = document.querySelector('.btn_dictionary');
btnDict?.addEventListener('click', async () => {
  console.log('dicitonary');
  await DictionaryInst.init();
});
const btnAbout = document.querySelector('.btn_about');
btnAbout?.addEventListener('click', () => {
  console.log('about page clicked');
  AboutPageInst.loadAboutPage();
});

const btnAudioGame = document.querySelector('.btn_audiogame');
btnAudioGame?.addEventListener('click', () => {
  AudioGameInst.loadAudioGameFromMainPage();
});
