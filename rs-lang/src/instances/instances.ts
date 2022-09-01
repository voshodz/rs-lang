import { Api } from '../components/api/api';
import { Auth } from '../components/auth/auth';
import { Book } from '../components/book/book';
import { Card } from '../components/card/card';
import { Dictionary } from '../components/dictionary/dictionary';
import { Util } from '../components/util/util';
import { MainPage } from '../pages/main-page/main-page';
/***********Сущности************* */
export const ApiInst = new Api();
export const BookInst = new Book();
export const DictionaryInst = new Dictionary();
export const AuthInst = new Auth();
export const CardInst = new Card();
export const UtilInst = new Util();
/********Pages********* */
export const MainPageInst = new MainPage();
