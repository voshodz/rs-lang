import { AuthInst, BookInst, DictionaryInst } from './instances/instances';
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
