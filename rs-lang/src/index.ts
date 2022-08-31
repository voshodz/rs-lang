import { Auth } from './components/auth/auth';
import { ApiInst, AuthInst, BookInst, DictionaryInst } from './instances/instances';
import './styles/index.scss';

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
  console.log('auth');
  AuthInst.loadLogin();
  console.log(AuthInst.getToken());
  BookInst.init();
});
const btnDict = document.querySelector('.btn_dictionary');
btnDict?.addEventListener('click', async () => {
  console.log('dicitonary');
  await DictionaryInst.init();
});

document.querySelector('.click-me')?.addEventListener('click', async () => {
  console.log('Here words!');
  const data = await ApiInst.getAllWordsOfUser(AuthInst.getUserId(), AuthInst.getToken());
  //await ApiInst.createWordforUser(AuthInst.getUserId(), AuthInst.ge)
  console.log(data);
});
