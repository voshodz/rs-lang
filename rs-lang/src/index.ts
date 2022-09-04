import { Auth } from './components/auth/auth';
import {
  AboutPageInst,
  ApiInst,
  AuthInst,
  BookInst,
  DictionaryInst,
  MainPageInst,
  ToastInst,
} from './instances/instances';
//import { Toast } from 'bootstrap';
import * as bootstrap from 'bootstrap';
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
document.querySelector('.click-me')?.addEventListener('click', async () => {
  console.log('Here words!');
  const data = await ApiInst.getAllWordsOfUser(AuthInst.getUserId(), AuthInst.getToken());
  //await ApiInst.createWordforUser(AuthInst.getUserId(), AuthInst.ge)
  console.log(data);
  //console.log(await ApiInst.getWordById('5e9f5ee35eb9e72bc21af4a8'));
  //const dataPage = await ApiInst.getWordsWithGroup(AuthInst.getToken(), 0);
  //console.log(dataPage);
});
ToastInst.showToast();
/*const toastTrigger: any = document.getElementById('liveToastBtn');
const toastLiveExample: any = document.getElementById('liveToast');
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}*/
