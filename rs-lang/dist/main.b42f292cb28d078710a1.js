/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/audiogame/audiogame.scss":
/*!*************************************************!*\
  !*** ./src/components/audiogame/audiogame.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/auth/login.scss":
/*!****************************************!*\
  !*** ./src/components/auth/login.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
const instances_1 = __webpack_require__(/*! ./instances/instances */ "./src/instances/instances.ts");
//import { Toast } from 'bootstrap';
class App {
    loadMain() {
        const markdown = `<header class="header">
          <h1 class="header__icon">Rs Lang</h1>
          <div class="navigation">
            <div class="btn_book">
              Учебник
            </div>
            <div class="btn_dictionary">
              Словарь
            </div>
            <div class="btn_audiogame">
              АудиоИгра
            </div>
            <div class="btn_about">
              О Команде
            </div>
          </div>
          <div class="container-register">
          </div>
      </header>
      <div class="main-page">
        <div class="main-page__wrapper">
          <div class="main-page__text">
            RSLang - приложение для изучения английского языка!
            <span>Учебник с 3600 наиболее употребляемый словами
              Словарь для запоминания, и аудиоигра для закрепления
            - все это ты найдешь в RSLang.</span>
          </div>
          <div class="main-page__img">
            <img src="./assets/main.png" alt="main__png">
          </div>  
        </div>
        <div class="container-main">
          
        </div>;
      </div>
      <footer class="footer">
        <a class="footer__github" href="http://github.voshodz"></a>
        <div class="footer__year">2022</div>

        <a class="footer__icon"href="https://rs.school/" class="footer__course"></a>

      </footer>`;
        const body = document.querySelector('body');
        if (body) {
            body.innerHTML = markdown;
        }
    }
    loadApp() {
        instances_1.AuthInst.initAuthorization();
        const btnHeader = document.querySelector('.header__icon');
        btnHeader === null || btnHeader === void 0 ? void 0 : btnHeader.addEventListener('click', () => {
            instances_1.MainPageInst.loadMainPage();
        });
        const btnReg = document.querySelector('.btn_create');
        btnReg === null || btnReg === void 0 ? void 0 : btnReg.addEventListener('click', () => {
            instances_1.AuthInst.loadRegister();
        });
        const btnLogin = document.querySelector('.btn_login');
        btnLogin === null || btnLogin === void 0 ? void 0 : btnLogin.addEventListener('click', () => {
            instances_1.AuthInst.loadLogin();
        });
        const btnBook = document.querySelector('.btn_book');
        btnBook === null || btnBook === void 0 ? void 0 : btnBook.addEventListener('click', () => {
            instances_1.BookInst.init();
        });
        const btnDict = document.querySelector('.btn_dictionary');
        btnDict === null || btnDict === void 0 ? void 0 : btnDict.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            yield instances_1.DictionaryInst.init();
        }));
        const btnAbout = document.querySelector('.btn_about');
        btnAbout === null || btnAbout === void 0 ? void 0 : btnAbout.addEventListener('click', () => {
            instances_1.AboutPageInst.loadAboutPage();
        });
        const btnAudioGame = document.querySelector('.btn_audiogame');
        btnAudioGame === null || btnAudioGame === void 0 ? void 0 : btnAudioGame.addEventListener('click', () => {
            instances_1.AudioGameInst.loadAudioGameFromMainPage();
        });
    }
}
exports.App = App;


/***/ }),

/***/ "./src/components/api/api.ts":
/*!***********************************!*\
  !*** ./src/components/api/api.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Api = void 0;
const BASE = 'https://api-rs-lang.herokuapp.com';
class Api {
    constructor() {
        this.createUser = (email, password) => __awaiter(this, void 0, void 0, function* () {
            const user = {
                email,
                password,
            };
            return fetch(`${BASE}/users`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            /*.then((res) => {
              if (res.status !== 200) {
                throw new Error(`Incorrect createUser with status ${res.status}`);
              }
              return res.json();
            });*/
        });
        this.loginUser = (email, password) => __awaiter(this, void 0, void 0, function* () {
            const user = {
                email,
                password,
            };
            return fetch(`${BASE}/signin`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
        });
        this.getUser = (token, id) => fetch(`${BASE}/users/${id}`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .catch((err) => console.log(err));
        this.deleteUser = (token, id) => fetch(`${BASE}/users/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + token,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
            console.log(res);
            return res;
        })
            .catch((err) => console.log(err + ' ' + err.status));
        /***********API that require UserId and Token************* */
        this.getNewUserToken = (token, id) => fetch(`${BASE}/users/${id}/tokens`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .catch((err) => console.log(err));
        /*************WORDS!!!************* */
        this.getWordById = (wordId) => {
            return fetch(`${BASE}/words/${wordId}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((res) => res.json());
        };
        this.getWords = (token) => fetch(`${BASE}/words/`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json());
        this.getWordsWithPageAndGroup = (token, page, group) => {
            return fetch(`${BASE}/words?page=${page}&group=${group}`, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((res) => res.json());
        };
        this.createWordforUser = (userId, wordId, token, difficulty, optional // added later optional settings
        ) => __awaiter(this, void 0, void 0, function* () {
            const body = {
                difficulty,
                optional,
            };
            return fetch(`${BASE}/users/${userId}/words/${wordId}`, {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
                .then((res) => res.json())
                .catch((err) => console.error(`Word is already added ${err}`));
        });
        this.deleteWordforUser = (userId, wordId, token) => __awaiter(this, void 0, void 0, function* () {
            return fetch(`${BASE}/users/${userId}/words/${wordId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((res) => {
                if (res.status === 200) {
                    console.log('SUCCESSS DELETED!!');
                }
                //console.log(object);
            });
        });
        this.getAllWordsOfUser = (userId, token) => {
            return fetch(`${BASE}/users/${userId}/words`, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((res) => res.json());
        };
        this.getWordOfUserByWordId = (userId, wordId, token) => __awaiter(this, void 0, void 0, function* () {
            return fetch(`${BASE}/users/${userId}/words/${wordId}`, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            /*.then((res) => {
              console.log(res.status);
              return res.json();
            })
            .catch((err) => {
              console.log(err);
            });*/
        });
        /************Api that not require Auth********* */
        this.getWordsWithPageAndGroupNoAuth = (page, group) => fetch(`${BASE}/words?page=${page}&group=${group}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json());
    }
    /**********Api of user*********** */
    getBASE_URL() {
        return BASE;
    }
}
exports.Api = Api;


/***/ }),

/***/ "./src/components/audiogame/audiogame.ts":
/*!***********************************************!*\
  !*** ./src/components/audiogame/audiogame.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioGame = void 0;
const instances_1 = __webpack_require__(/*! ../../instances/instances */ "./src/instances/instances.ts");
__webpack_require__(/*! ./audiogame.scss */ "./src/components/audiogame/audiogame.scss");
class AudioGame {
    constructor() {
        this.AudioIcon = `<svg class="audio-game__svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z">
                  </path></svg>`;
        this.rightAnswers = [];
        this.wrongAnswers = [];
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    loadAudioGameFromMainPage() {
        instances_1.UtilInst.cleanMainPage();
        const mainPage = document.querySelector('.main-page');
        if (mainPage) {
            mainPage.appendChild(this.loadAudioGameField());
            this.loadSelectOfLevel();
        }
    }
    loadAudioGameFromBook(group, page) {
        return __awaiter(this, void 0, void 0, function* () {
            instances_1.UtilInst.cleanMainPage();
            const mainPage = document.querySelector('.main-page');
            if (mainPage) {
                mainPage.appendChild(this.loadAudioGameField());
                const words = yield instances_1.ApiInst.getWordsWithPageAndGroupNoAuth(page, group);
                this.loadAudioGameWithWords(words);
            }
        });
    }
    getAnswers() {
        const audioGame = document.querySelector('.audio-game');
        if (audioGame) {
            audioGame.innerHTML = '';
            const answerWrapper = document.createElement('div');
            answerWrapper.classList.add('audio-game__answers-wrapper');
            const rightColumn = document.createElement('div');
            rightColumn.classList.add('audio-game__answers-right');
            rightColumn.innerHTML += '<h2>Отгаданные слова</h2>';
            this.rightAnswers.forEach((ans) => {
                //rightColumn.innerHTML += ans.word;
                const audioSource = document.createElement('div');
                audioSource.classList.add('audio-game__icon-small');
                audioSource.innerHTML = this.AudioIcon;
                const wordInfoWrapper = document.createElement('span');
                wordInfoWrapper.classList.add('audio-game__info-wrapper');
                audioSource.addEventListener('click', () => {
                    const audio = new Audio();
                    audio.src = `${instances_1.ApiInst.getBASE_URL()}/${ans.audio}`;
                    audio.play();
                });
                wordInfoWrapper.appendChild(audioSource);
                const wordInfo = document.createElement('span');
                wordInfo.classList.add('audio-game__span-word');
                wordInfo.innerHTML = `${ans.word} - ${ans.wordTranslate}`;
                wordInfoWrapper.appendChild(wordInfo);
                rightColumn.appendChild(wordInfoWrapper);
            });
            answerWrapper.appendChild(rightColumn);
            const wrongColumn = document.createElement('div');
            wrongColumn.classList.add('audio-game__answers-wrong');
            wrongColumn.innerHTML += '<h2>Слова где Вы ошиблись</h2>';
            this.wrongAnswers.forEach((ans) => {
                const audioSource = document.createElement('div');
                audioSource.classList.add('audio-game__icon-small');
                audioSource.innerHTML = this.AudioIcon;
                const wordInfoWrapper = document.createElement('span');
                wordInfoWrapper.classList.add('audio-game__info-wrapper');
                audioSource.addEventListener('click', () => {
                    const audio = new Audio();
                    audio.src = `${instances_1.ApiInst.getBASE_URL()}/${ans.audio}`;
                    audio.play();
                });
                wordInfoWrapper.appendChild(audioSource);
                const wordInfo = document.createElement('span');
                wordInfo.classList.add('audio-game__span-word');
                wordInfo.innerHTML = `${ans.word} - ${ans.wordTranslate}`;
                wordInfoWrapper.appendChild(wordInfo);
                wrongColumn.appendChild(wordInfoWrapper);
            });
            answerWrapper.appendChild(wrongColumn);
            audioGame.appendChild(answerWrapper);
            this.rightAnswers = [];
            this.wrongAnswers = [];
        }
    }
    loadAudioGameField() {
        const audioGame = document.createElement('div');
        audioGame.classList.add('audio-game');
        return audioGame;
    }
    loadSelectOfLevel() {
        const audioGame = document.querySelector('.audio-game');
        const audioGameLevel = document.createElement('div');
        audioGameLevel.classList.add('audio-game__level');
        audioGameLevel.innerHTML += `<div class="audio-game__level__text">
                                  <h2><span>Настройки игры<span></h2>
                                  <h3><span>Выберите сложность игры<span></h3>
                                </div>
                                <select class="audio-game__select">
                                  <option value="0">Уровень 1</option>
                                  <option value="1">Уровень 2</option>
                                  <option value="2">Уровень 3</option>
                                  <option value="3">Уровень 4</option>
                                  <option value="4">Уровень 5</option>
                                  <option value="5">Уровень 6</option>
                                </select>`;
        const audioGameSubmitButton = document.createElement('div');
        audioGameSubmitButton.classList.add('audio-game__level__submit');
        audioGameSubmitButton.innerHTML = 'Начать игру';
        audioGameSubmitButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            const audioGameSelect = document.querySelector('.audio-game__select');
            if (audioGameSelect) {
                const level = audioGameSelect.value;
                const words = yield instances_1.ApiInst.getWordsWithPageAndGroupNoAuth(this.getRandomInt(29), parseInt(level));
                this.loadAudioGameWithWords(words);
            }
        }));
        audioGameLevel.appendChild(audioGameSubmitButton);
        if (audioGame) {
            audioGame.appendChild(audioGameLevel);
        }
    }
    loadAudioGameWithWords(words) {
        const audioGame = document.querySelector('.audio-game');
        if (audioGame) {
            audioGame.innerHTML = '';
            audioGame.appendChild(this.loadCurrentAudioSection(words[0], words));
            const btnNext = document.createElement('div');
            btnNext.classList.add('audio-game__next');
            btnNext.dataset.count = `0`;
            btnNext.innerHTML = 'Следующее слово';
            btnNext.addEventListener('click', () => {
                if (btnNext.dataset.count) {
                    btnNext.dataset.count = (parseInt(btnNext.dataset.count) + 1).toString();
                    if (btnNext.dataset.count === '20') {
                        this.loadFinishSection();
                    }
                    this.loadNextSection(parseInt(btnNext.dataset.count), words);
                }
            });
            audioGame.appendChild(btnNext);
        }
    }
    loadNextSection(nextWord, words) {
        const audioGameWrapper = document.querySelector('.audio-game__wraper');
        if (audioGameWrapper) {
            audioGameWrapper.innerHTML = '';
            const audioGame = document.querySelector('.audio-game');
            if (audioGame) {
                audioGameWrapper.appendChild(this.loadCurrentAudioSection(words[nextWord], words));
            }
        }
    }
    loadFinishSection() {
        const audioGame = document.querySelector('.audio-game');
        if (audioGame) {
            audioGame.innerHTML = '';
            this.getAnswers();
        }
    }
    loadCurrentAudioSection(currentWord, words) {
        const audioGameWrapper = document.createElement('div');
        audioGameWrapper.classList.add('audio-game__wraper');
        audioGameWrapper.appendChild(this.loadAudioFromWord(currentWord));
        audioGameWrapper.appendChild(this.loadOptionsField(currentWord, words));
        return audioGameWrapper;
    }
    loadOptionsField(currentWord, words) {
        const shuffledArray = this.randomWords(currentWord, words);
        const audioGameOptions = document.createElement('div');
        audioGameOptions.classList.add('audio-game__options');
        shuffledArray.forEach((word) => {
            const options = document.createElement('div');
            options.classList.add('audio-game__options__word');
            options.dataset.id = word.id;
            options.innerHTML = `${word.wordTranslate.toUpperCase()}`;
            options.addEventListener('click', () => {
                this.showTrueAnswer(currentWord, word.id);
            });
            audioGameOptions.appendChild(options);
        });
        return audioGameOptions;
    }
    showTrueAnswer(currentWord, wordId) {
        /********Right answer section******* */
        const optionsOfWords = document.querySelectorAll('.audio-game__options__word');
        if (currentWord.id === wordId) {
            if (optionsOfWords) {
                optionsOfWords.forEach((option) => {
                    if (option.dataset.id === currentWord.id) {
                        option.classList.add('audio-game__options__right-option');
                        this.rightAnswers.push(currentWord);
                    }
                });
                return;
            }
        }
        /****Wrong answer section*** */
        if (optionsOfWords) {
            optionsOfWords.forEach((option) => {
                if (option.dataset.id === currentWord.id) {
                    option.classList.add('audio-game__options__right-option');
                }
                if (option.dataset.id === wordId) {
                    this.wrongAnswers.push(currentWord);
                    option.classList.add('audio-game__options__wrong-option');
                }
            });
        }
    }
    loadAudioFromWord(word) {
        const audioIcon = document.createElement('div');
        audioIcon.classList.add('audio-game__icon');
        audioIcon.innerHTML += this.AudioIcon;
        const audioSource = new Audio(`${instances_1.ApiInst.getBASE_URL()}/${word.audio}`);
        audioIcon.dataset.audioSrc = `${instances_1.ApiInst.getBASE_URL()}/${word.audio}`;
        audioIcon.addEventListener('click', () => {
            audioSource.play();
        });
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                this.loadListenerToSpace();
            }
        });
        return audioIcon;
    }
    loadListenerToSpace() {
        const audioIcon = document.querySelector('.audio-game__icon');
        if (audioIcon) {
            const audioSrc = audioIcon.dataset.audioSrc;
            if (audioSrc) {
                const audio = new Audio(audioSrc);
                audio.play();
            }
        }
    }
    randomWords(currentWord, words) {
        const resultArray = [];
        const arrayOfRandomNumbers = [];
        resultArray.push(currentWord);
        while (resultArray.length < 5) {
            const randNumb = this.getRandomInt(19);
            if (words[randNumb].id !== currentWord.id && !arrayOfRandomNumbers.includes(randNumb)) {
                arrayOfRandomNumbers.push(randNumb);
                resultArray.push(words[randNumb]);
            }
        }
        return resultArray.sort(() => Math.random() - 0.5); //shuffle sort
    }
}
exports.AudioGame = AudioGame;


/***/ }),

/***/ "./src/components/auth/auth.ts":
/*!*************************************!*\
  !*** ./src/components/auth/auth.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Auth = void 0;
const instances_1 = __webpack_require__(/*! ../../instances/instances */ "./src/instances/instances.ts");
__webpack_require__(/*! ./login.scss */ "./src/components/auth/login.scss");
class Auth {
    constructor() {
        this.token = '';
        this.userId = '';
        this.email = '';
        this.markdowncontainerRegister = `
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
        this.main = document.querySelector('.container-main');
        if (this.checkAuthorization()) {
            this.setTokenAndUserIdFromLocalStorage();
        }
    }
    initAuthorization() {
        const containerRegister = document.querySelector('.container-register');
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
                instances_1.MainPageInst.loadMainPage();
                this.initAuthorization();
            });
            containerRegister.appendChild(btnExit);
        }
    }
    checkAuthorization() {
        if (localStorage.getItem('token') && localStorage.getItem('userId')) {
            return true;
        }
        return false;
    }
    setTokenAndUserIdFromLocalStorage() {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const email = localStorage.getItem('email');
        //const email: string | null
        if (token && userId && email) {
            this.setEmail(email);
            this.setToken(token);
            this.setUserId(userId);
        }
    }
    setEmail(email) {
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    getToken() {
        return this.token;
    }
    setToken(token) {
        this.token = token;
    }
    setUserId(userId) {
        this.userId = userId;
    }
    getUserId() {
        return this.userId;
    }
    loadLogin() {
        instances_1.UtilInst.cleanMainPage();
        instances_1.UtilInst.AddContainerMainToMainPage();
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
    loadListenertoLoginForm() {
        const formInfo = document.getElementById('form');
        if (formInfo) {
            formInfo.addEventListener('submit', (e) => __awaiter(this, void 0, void 0, function* () {
                e.preventDefault();
                const email = formInfo.querySelector('[name="name"]');
                const password = formInfo.querySelector('[name="password"]');
                if (email && password) {
                    yield instances_1.ApiInst.loginUser(email.value, password.value)
                        .then((res) => __awaiter(this, void 0, void 0, function* () {
                        const data = yield res.json();
                        console.log(data);
                        localStorage.setItem('email', email.value);
                        this.setEmail(email.value);
                        this.successAuth(data);
                    }))
                        .catch((err) => {
                        this.incorrectAuth(err);
                    });
                }
            }));
        }
    }
    incorrectAuth(err) {
        console.log(err);
        alert('Нeправильные введенные данные');
        /*const toastTrigger: any = document.getElementById('liveToastBtn');
        const toastLiveExample: any = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();*/
    }
    successAuth(data) {
        this.setToken(data.token);
        this.setUserId(data.userId);
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        this.initAuthorization();
        instances_1.UtilInst.cleanMainPage();
        const mainPage = document.querySelector('.main-page');
        if (mainPage) {
            mainPage.innerHTML = instances_1.MainPageInst.startMainPage();
        }
    }
    loadRegister() {
        instances_1.UtilInst.cleanMainPage();
        instances_1.UtilInst.AddContainerMainToMainPage();
        const main = document.querySelector('.container-main');
        if (main) {
            main.innerHTML = this.markdowncontainerRegister;
        }
        this.loadListenerTocontainerRegister();
    }
    loadListenerTocontainerRegister() {
        const regForm = document.getElementById('register-form');
        if (regForm) {
            regForm.addEventListener('submit', (e) => {
                this.handlerTocontainerRegister(regForm, e);
            });
        }
    }
    handlerTocontainerRegister(form, event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const name = form.querySelector('[name="name"]');
            const email = form.querySelector('[name="email"]');
            const password = form.querySelector('[name="password"]');
            if (name && password && email) {
                const result = yield instances_1.ApiInst.createUser(email.value, password.value);
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
                    instances_1.UtilInst.cleanMain();
                    yield instances_1.ApiInst.loginUser(email.value, password.value).then((res) => __awaiter(this, void 0, void 0, function* () {
                        const data = yield res.json();
                        localStorage.setItem('email', email.value);
                        this.setEmail(email.value);
                        this.successAuth(data);
                    }));
                }
            }
        });
    }
}
exports.Auth = Auth;


/***/ }),

/***/ "./src/components/book/book.ts":
/*!*************************************!*\
  !*** ./src/components/book/book.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Book = void 0;
const instances_1 = __webpack_require__(/*! ../../instances/instances */ "./src/instances/instances.ts");
class Book {
    init() {
        instances_1.UtilInst.cleanMainPage();
        this.initContainerWords();
    }
    initContainerWords() {
        const mainPage = document.querySelector('.main-page');
        if (mainPage) {
            const containerMain = document.createElement('div');
            containerMain.classList.add('container-main');
            mainPage.appendChild(containerMain);
        }
        const main = document.querySelector('.container-main');
        if (main) {
            main.innerHTML = '';
        }
        if (main) {
            main.appendChild(this.createGroupBtnsWithListener());
            main.appendChild(this.createPaginationMenu());
            main.appendChild(this.createContainerWords());
        }
    }
    createGroupBtnsWithListener() {
        const wrapperBtn = document.createElement('div');
        wrapperBtn.classList.add('wrapper-btn');
        for (let i = 0; i < 6; i++) {
            const groupBtn = this.createGroupBtn(i);
            if (i === 0) {
                groupBtn.classList.add('active');
            }
            wrapperBtn.appendChild(groupBtn);
        }
        const audioGameBtn = document.createElement('div');
        audioGameBtn.classList.add('btn_audio-game');
        audioGameBtn.innerHTML = 'Аудиоигра';
        audioGameBtn.addEventListener('click', () => {
            let page = 0;
            let group = 0;
            const groupBtns = document.querySelectorAll('.btn_group');
            if (groupBtns) {
                groupBtns.forEach((btn) => {
                    if (btn.classList.contains('active')) {
                        const grouId = btn.dataset.group;
                        if (grouId) {
                            group = parseInt(grouId);
                        }
                    }
                });
            }
            const pageItems = document.querySelectorAll('.page-item');
            if (pageItems) {
                pageItems.forEach((pageItem) => {
                    if (pageItem.classList.contains('page-item_active')) {
                        const pageId = pageItem.dataset.id;
                        if (pageId) {
                            page = parseInt(pageId) - 1;
                        }
                    }
                });
            }
            instances_1.AudioGameInst.loadAudioGameFromBook(group, page);
        });
        wrapperBtn.appendChild(audioGameBtn);
        return wrapperBtn;
    }
    createGroupBtn(group) {
        const textoFLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        const textOfDescriptions = [
            '<b>Easy<b> 1-600',
            '<b>Easy<b> 601-1200',
            '<b>Medium<b> 1201-1800',
            '<b>Medium<b> 1801-2400',
            '<b>Hard<b> 2401-3000',
            '<b>Hard<b> 3001-3600',
        ];
        const btnGroup = document.createElement('div');
        const btnLevel = document.createElement('div');
        btnLevel.classList.add('btn_group__level');
        btnLevel.innerHTML = textoFLevels[group];
        const btnText = document.createElement('div');
        btnText.classList.add('btn_group__text');
        btnText.innerHTML = textOfDescriptions[group];
        //btnGroup.classList.add('btn');
        btnGroup.classList.add('btn_group');
        btnGroup.dataset.group = group.toString();
        //btnGroup.innerHTML = `Group ${group + 1}`;
        btnGroup.appendChild(btnText);
        btnGroup.appendChild(btnLevel);
        btnGroup.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            this.removeActiveFromPageItem();
            const btns = document.querySelectorAll('.btn_group');
            btns.forEach((btn) => {
                btn.classList.remove('active');
            });
            btnGroup.classList.add('active');
            instances_1.UtilInst.cleanContainerWords();
            const containerWords = document.querySelector('.container-words__field');
            if (containerWords) {
                containerWords.innerHTML = '';
                /*words.forEach((word) => {
                  containerWords.appendChild(CardInst.createCard(word));
                });
                CardInst.disableListenersToHardWords();
                CardInst.disableListenersToLearnedWords();*/
            }
        }));
        return btnGroup;
    }
    createPaginationMenu() {
        const wrapperPagination = document.createElement('div');
        wrapperPagination.classList.add('wrapper-pagination');
        const navigationBar = document.createElement('nav');
        navigationBar.ariaLabel = 'Page navigation example';
        const uListNavigation = document.createElement('ul');
        uListNavigation.classList.add('pagination');
        for (let i = 1; i <= 30; i++) {
            uListNavigation.appendChild(this.creatPageLinkWithListener(i));
        }
        navigationBar.appendChild(uListNavigation);
        wrapperPagination.appendChild(navigationBar);
        return wrapperPagination;
    }
    creatPageLinkWithListener(page) {
        const pageItem = document.createElement('li');
        pageItem.classList.add('page-item');
        pageItem.dataset.id = `${page}`;
        const pageLink = document.createElement('a');
        pageLink.classList.add('page-link');
        pageLink.innerHTML = `${page}`;
        pageItem.appendChild(pageLink);
        pageItem.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            this.removeActiveFromPageItem();
            pageItem.classList.add('page-item_active');
            const words = yield instances_1.ApiInst.getWordsWithPageAndGroup(instances_1.AuthInst.getToken(), page - 1, this.findActiveBtnOfGroup());
            const containerWords = document.querySelector('.container-words__field');
            if (containerWords) {
                containerWords.innerHTML = '';
                words.forEach((word) => {
                    //containerWords.innerHTML += CardInst.createCard(word);
                    containerWords.appendChild(instances_1.CardInst.createCard(word));
                });
                instances_1.CardInst.disableListenersToHardWords();
                instances_1.CardInst.disableListenersToLearnedWords();
            }
        }));
        return pageItem;
    }
    removeActiveFromPageItem() {
        const pageItems = document.querySelectorAll('.page-item');
        if (pageItems) {
            pageItems.forEach((pageItem) => {
                pageItem.classList.remove('page-item_active');
            });
        }
    }
    createContainerWords() {
        const containerWords = document.createElement('div');
        containerWords.className = 'container-words';
        const containerWordsField = document.createElement('div');
        containerWordsField.className = `container-words__field`;
        containerWords.appendChild(containerWordsField);
        return containerWords;
    }
    findActiveBtnOfGroup() {
        const btns = document.querySelectorAll('.btn_group');
        let result = '0';
        btns.forEach((btn) => {
            if (btn.className.includes('active')) {
                if (btn.dataset.group) {
                    result = btn.dataset.group;
                }
            }
        });
        return parseInt(result);
    }
}
exports.Book = Book;


/***/ }),

/***/ "./src/components/card/card.ts":
/*!*************************************!*\
  !*** ./src/components/card/card.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Card = void 0;
const instances_1 = __webpack_require__(/*! ../../instances/instances */ "./src/instances/instances.ts");
const types_1 = __webpack_require__(/*! ../../types */ "./src/types.ts");
class Card {
    constructor() {
        this.markdownOfSelect = `<select class="select">
                            <option value="0">Page 1</option>
                            <option value="1">Page 2</option>
                            <option value="2">Page 3</option>
                            <option value="3">Page 4</option>
                            <option value="4">Page 5</option>
                            <option value="5">Page 6</option>
                            <option value="6">Page 7</option>
                            <option value="7">Page 8</option>
                            <option value="8">Page 9</option>
                            <option value="9">Page 10</option>
                            <option value="10">Page 11</option>
                            <option value="11">Page 12</option>
                            <option value="12">Page 13</option>
                            <option value="13">Page 14</option>
                            <option value="14">Page 15</option>
                            <option value="15">Page 16</option>
                            <option value="16">Page 17</option>
                            <option value="17">Page 18</option>
                            <option value="18">Page 19</option>
                            <option value="19">Page 20</option>
                            <option value="20">Page 21</option>
                            <option value="21">Page 22</option>
                            <option value="22">Page 23</option>
                            <option value="23">Page 24</option>
                          </select>`;
    }
    markdownOfButtons(wordId) {
        const markDown = `
                      <div class="card__btn-wrapper">
                        <button class="btn btn_hard" data-id=${wordId}>Сложное слово</button>
                        <button class="btn btn_learned" data-id=${wordId}>Добавить слово к изученным</button>
                        
                      </div>`;
        return markDown;
    }
    createButtonsWithListeners(wordId) {
        const cardBtnWrapper = document.createElement('div');
        cardBtnWrapper.classList.add('card__btn-wrapper');
        cardBtnWrapper.appendChild(this.createBtnAddToHard(wordId));
        cardBtnWrapper.appendChild(this.createBtnAddToLearned(wordId));
        return cardBtnWrapper;
    }
    createBtnAddToHard(wordId) {
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.classList.add('btn_hard');
        btn.dataset.id = wordId;
        btn.innerHTML = 'Сложное слово';
        btn.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            btn.classList.add('btn_active');
            yield instances_1.ApiInst.createWordforUser(instances_1.AuthInst.getUserId(), wordId, instances_1.AuthInst.getToken(), 'hard', {});
        }));
        return btn;
    }
    createBtnAddToLearned(wordId) {
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.classList.add('btn_learned');
        btn.dataset.id = wordId;
        btn.innerHTML = 'Изученое слово';
        btn.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            btn.classList.add('btn_active');
            yield instances_1.ApiInst.createWordforUser(instances_1.AuthInst.getUserId(), wordId, instances_1.AuthInst.getToken(), 'learned', {});
        }));
        return btn;
    }
    createCard(word) {
        const markdownOfCard = `
                              <div class="card__info" data-id="${word.id}"> 
                                <div class="card__info__text">
                                  Слово: ${word.word}
                                  <br>
                                  Перевод: ${word.wordTranslate}
                                  <br>
                                
                                  <div class="card__meaning">
                                      ${word.textMeaning}
                                      <br>
                                      ${word.textExample}
                                      <br>
                                      <br>
                                      ${word.textMeaningTranslate}
                                      <br>
                                      ${word.textExampleTranslate}
                                      <br>
                                  </div>
                                  <div class="card__audio">
                                      <figure>
                                        <figcaption>Слово:</figcaption>
                                        <audio
                                            controls
                                            src="${instances_1.ApiInst.getBASE_URL()}/${word.audio}">
                                                Your browser does not support the
                                                <code>audio</code> element.
                                        </audio>
                                      </figure>
                                      <figure>
                                        <figcaption>Аудио пример:</figcaption>
                                        <audio
                                            controls
                                            src="${instances_1.ApiInst.getBASE_URL()}/${word.audioExample}">
                                                Your browser does not support the
                                                <code>audio</code> element.
                                        </audio>
                                      </figure>
                                    </div>
                                </div>
                                
                              <div class="card__img">
                                <img src="${types_1.BASE_URL}/${word.image}" alt="${word.image}">
                              </div>
                              
                            </div
                            `;
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerHTML = markdownOfCard;
        cardDiv.appendChild(this.buttonsWithAuthorizationInfo(word.id));
        return cardDiv;
    }
    buttonsWithAuthorizationInfo(wordId) {
        if (instances_1.AuthInst.checkAuthorization()) {
            return this.createButtonsWithListeners(wordId);
        }
        const noAuthButtons = document.createElement('div');
        noAuthButtons.innerHTML = '';
        return noAuthButtons;
    }
    loadListenersToButtons() {
        this.loadListenerAddHardWord();
        this.loadListenerDeleteWord();
        this.loadListenerLearnedWord();
    }
    loadListenerAddHardWord() {
        const btnAddHardWords = document.querySelectorAll('.btn_hard');
        if (btnAddHardWords) {
            btnAddHardWords.forEach((btn) => {
                btn.addEventListener('click', () => {
                    btn.classList.add('btn_active');
                    const wordId = btn.dataset.id;
                    console.log(wordId);
                    if (wordId) {
                        instances_1.ApiInst.createWordforUser(instances_1.AuthInst.getUserId(), wordId, instances_1.AuthInst.getToken(), 'hard', {});
                    }
                });
            });
        }
    }
    loadListenerDeleteWord() {
        const btnDeleteWords = document.querySelectorAll('.btn_delete');
        if (btnDeleteWords) {
            btnDeleteWords.forEach((btn) => {
                btn.addEventListener('click', () => {
                    btn.classList.add('active');
                    const wordId = btn.dataset.id;
                    console.log('Deleting => ', wordId);
                    if (wordId) {
                        instances_1.ApiInst.deleteWordforUser(instances_1.AuthInst.getUserId(), wordId, instances_1.AuthInst.getToken());
                    }
                });
            });
        }
    }
    loadListenerLearnedWord() {
        const btnLearnedWords = document.querySelectorAll('.btn_learned');
        if (btnLearnedWords) {
            btnLearnedWords.forEach((btn) => {
                btn.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
                    btn.classList.add('btn_active');
                    const wordId = btn.dataset.id;
                    console.log('Learned => ', wordId);
                    if (wordId) {
                        //console.log(await this.dict.checkWordInDict(wordId));
                        //console.log(await this.checkWordHardOrNot(wordId));
                        //console.log(await ApiInst.getAllWordsOfUser(AuthInst.getUserId(), AuthInst.getToken()));
                        yield instances_1.ApiInst.createWordforUser(instances_1.AuthInst.getUserId(), wordId, instances_1.AuthInst.getToken(), 'learned', {});
                        //const res = await ApiInst.getWordOfUserByWordId(AuthInst.getUserId(), wordId, AuthInst.getToken());
                        //console.log(res);
                    }
                }));
            });
        }
    }
    disableListenersToHardWords() {
        return __awaiter(this, void 0, void 0, function* () {
            let wordsOfUser = yield instances_1.ApiInst.getAllWordsOfUser(instances_1.AuthInst.getUserId(), instances_1.AuthInst.getToken());
            wordsOfUser = wordsOfUser.filter((word) => word.difficulty === 'hard');
            const btnsOfHardWords = document.querySelectorAll('.btn_hard');
            if (btnsOfHardWords) {
                btnsOfHardWords.forEach((btn) => {
                    const id = btn.dataset.id;
                    if (id) {
                        if (this.checkIncludeIdOfWordsDictionary(wordsOfUser, id)) {
                            //console.log(id);
                            btn.classList.add('btn_active');
                        }
                    }
                });
            }
        });
    }
    disableListenersToLearnedWords() {
        return __awaiter(this, void 0, void 0, function* () {
            let wordsOfUser = yield instances_1.ApiInst.getAllWordsOfUser(instances_1.AuthInst.getUserId(), instances_1.AuthInst.getToken());
            wordsOfUser = wordsOfUser.filter((word) => word.difficulty === 'learned');
            const btnsOfHardWords = document.querySelectorAll('.btn_learned');
            if (btnsOfHardWords) {
                btnsOfHardWords.forEach((btn) => {
                    const id = btn.dataset.id;
                    if (id) {
                        if (this.checkIncludeIdOfWordsDictionary(wordsOfUser, id)) {
                            btn.classList.add('btn_active');
                        }
                    }
                });
            }
        });
    }
    checkIncludeIdOfWordsDictionary(arr, id) {
        let result = false;
        arr.forEach((word) => {
            if (word.wordId === id) {
                result = true;
            }
        });
        return result;
    }
}
exports.Card = Card;


/***/ }),

/***/ "./src/components/dictionary/dictionary.ts":
/*!*************************************************!*\
  !*** ./src/components/dictionary/dictionary.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dictionary = void 0;
const instances_1 = __webpack_require__(/*! ../../instances/instances */ "./src/instances/instances.ts");
const types_1 = __webpack_require__(/*! ../../types */ "./src/types.ts");
class Dictionary {
    constructor() {
        this.wordsOfUser = [];
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loadDictionary();
        });
    }
    loadDictionary() {
        return __awaiter(this, void 0, void 0, function* () {
            instances_1.UtilInst.cleanMainPage();
            instances_1.UtilInst.AddContainerMainToMainPage();
            const main = document.querySelector('.container-main');
            if (!instances_1.AuthInst.checkAuthorization()) {
                if (main) {
                    instances_1.AuthInst.loadLogin();
                    return;
                }
            }
            if (main) {
                main.innerHTML = '';
                main.appendChild(this.createGroupBtnsWithListener());
                main.appendChild(this.createTypeBtnsForDictionary());
                main.appendChild(this.createContainerWords());
            }
            //await this.loadCardsOfHardWordsOfUser();
        });
    }
    createGroupBtnsWithListener() {
        const wrapperBtn = document.createElement('div');
        wrapperBtn.classList.add('wrapper-btn');
        for (let i = 0; i < 6; i++) {
            const groupBtn = this.createGroupBtn(i);
            if (i === 0) {
                groupBtn.classList.add('active');
            }
            wrapperBtn.appendChild(groupBtn);
        }
        return wrapperBtn;
    }
    createGroupBtn(group) {
        const textoFLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        const textOfDescriptions = [
            '<b>Easy<b> 1-600',
            '<b>Easy<b> 601-1200',
            '<b>Medium<b> 1201-1800',
            '<b>Medium<b> 1801-2400',
            '<b>Hard<b> 2401-3000',
            '<b>Hard<b> 3001-3600',
        ];
        const btnGroup = document.createElement('div');
        const btnLevel = document.createElement('div');
        btnLevel.classList.add('btn_group__level');
        btnLevel.innerHTML = textoFLevels[group];
        const btnText = document.createElement('div');
        btnText.classList.add('btn_group__text');
        btnText.innerHTML = textOfDescriptions[group];
        btnGroup.classList.add('btn_group');
        btnGroup.dataset.group = group.toString();
        btnGroup.appendChild(btnText);
        btnGroup.appendChild(btnLevel);
        btnGroup.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            const btns = document.querySelectorAll('.btn_group');
            btns.forEach((btn) => {
                btn.classList.remove('active');
            });
            btnGroup.classList.add('active');
            instances_1.UtilInst.cleanContainerWords();
            const typeBtnHard = document.querySelector('.type-btns__hard');
            const typeBtnLearned = document.querySelector('.type-btns__learned');
            if (typeBtnHard && typeBtnLearned) {
                typeBtnHard.classList.remove('active');
                typeBtnLearned.classList.remove('active');
            }
        }));
        return btnGroup;
    }
    createContainerWords() {
        const containerWords = document.createElement('div');
        containerWords.className = 'container-words';
        const containerWordsField = document.createElement('div');
        containerWordsField.className = `container-words__field`;
        containerWords.appendChild(containerWordsField);
        return containerWords;
    }
    createTypeBtnsForDictionary() {
        const wrapperTypeBtns = document.createElement('div');
        wrapperTypeBtns.classList.add('type-btns');
        const btnTypeHard = document.createElement('div');
        btnTypeHard.classList.add('type-btns__hard');
        btnTypeHard.innerHTML = 'Сложные слова';
        btnTypeHard.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            (_a = document.querySelector('.type-btns__learned')) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
            btnTypeHard.classList.add('active');
            yield this.loadCardsOfUserWithType(this.getCurrentActiveGroup(), 'hard');
        }));
        const btnTypeLearned = document.createElement('div');
        btnTypeLearned.classList.add('type-btns__learned');
        btnTypeLearned.innerHTML = 'Изученные слова';
        btnTypeLearned.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            var _b;
            (_b = document.querySelector('.type-btns__hard')) === null || _b === void 0 ? void 0 : _b.classList.remove('active');
            btnTypeLearned.classList.add('active');
            yield this.loadCardsOfUserWithType(this.getCurrentActiveGroup(), 'learned');
        }));
        wrapperTypeBtns.appendChild(btnTypeHard);
        wrapperTypeBtns.appendChild(btnTypeLearned);
        return wrapperTypeBtns;
    }
    loadCardsOfUserWithType(group, type = 'hard') {
        return __awaiter(this, void 0, void 0, function* () {
            const containerWords = document.querySelector('.container-words__field');
            let words = yield instances_1.ApiInst.getAllWordsOfUser(instances_1.AuthInst.getUserId(), instances_1.AuthInst.getToken());
            if (type === 'hard') {
                words = words.filter((word) => word.difficulty === 'hard');
            }
            else if (type === 'learned') {
                words = words.filter((word) => word.difficulty === 'learned');
            }
            if (containerWords) {
                containerWords.innerHTML = '';
                words.forEach((w) => __awaiter(this, void 0, void 0, function* () {
                    const word = yield instances_1.ApiInst.getWordById(w.wordId);
                    if (word.group === group) {
                        containerWords.appendChild(this.createCardInDictionary(word));
                    }
                }));
            }
        });
    }
    createCardInDictionary(word) {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerHTML = `
                          <div class="card__info" data-id="${word.id}"> 
                            <div class="card__info__text">
                              Слово: ${word.word}
                              <br>
                              Перевод: ${word.wordTranslate}
                              <br> 
                              <div class="card__meaning">
                                  ${word.textMeaning}
                                  <br>
                                  ${word.textExample}
                                  <br>
                                  <br>
                                  ${word.textMeaningTranslate}
                                  <br>
                                  ${word.textExampleTranslate}
                                  <br>
                                  
                              </div>
                              <div class="card__audio">
                                      <figure>
                                        <figcaption>Слово:</figcaption>
                                        <audio
                                            controls
                                            src="${instances_1.ApiInst.getBASE_URL()}/${word.audio}">
                                                Your browser does not support the
                                                <code>audio</code> element.
                                        </audio>
                                      </figure>
                                      <figure>
                                        <figcaption>Аудио пример:</figcaption>
                                        <audio
                                            controls
                                            src="${instances_1.ApiInst.getBASE_URL()}/${word.audioExample}">
                                                
                                                <code>audio</code> element.
                                        </audio>
                                      </figure>
                                    </div>
                            </div>
                          <div class="card__img">
                            <img src="${types_1.BASE_URL}/${word.image}" alt="${word.image}">
                          </div>
                        </div
                         `;
        cardDiv.appendChild(this.createCardBtnWrapper(word.id));
        return cardDiv;
    }
    createCardBtnWrapper(wordId) {
        const cardBtnWrapper = document.createElement('div');
        cardBtnWrapper.classList.add('card__btn-wrapper');
        cardBtnWrapper.appendChild(this.createBtnWithDelete(wordId));
        return cardBtnWrapper;
    }
    createBtnWithDelete(wordId) {
        const btnDelete = document.createElement('button');
        btnDelete.classList.add('btn');
        btnDelete.classList.add('btn_delete');
        btnDelete.dataset.id = wordId;
        btnDelete.innerHTML = 'Восстановить слово';
        btnDelete.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            btnDelete.classList.add('btn_active');
            yield instances_1.ApiInst.deleteWordforUser(instances_1.AuthInst.getUserId(), wordId, instances_1.AuthInst.getToken());
            yield instances_1.DictionaryInst.init();
        }));
        return btnDelete;
    }
    getUsersWords(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = instances_1.ApiInst.getAllWordsOfUser(userId, instances_1.AuthInst.getToken());
            data.then((words) => {
                words.forEach((w) => {
                    this.wordsOfUser.push(w);
                });
            });
            return yield data;
        });
    }
    checkWordInDict(wordId) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getUsersWords(instances_1.AuthInst.getUserId());
            let result = false;
            data.forEach((word) => {
                if (word.wordId === wordId) {
                    result = true;
                }
            });
            return yield result;
        });
    }
    getCurrentActiveGroup() {
        let result = 0;
        const btns = document.querySelectorAll('.btn_group');
        btns.forEach((btn) => {
            if (btn.classList.contains('active')) {
                const group = btn.dataset.group;
                if (group) {
                    result = parseInt(group);
                }
            }
        });
        return result;
    }
}
exports.Dictionary = Dictionary;


/***/ }),

/***/ "./src/components/util/util.ts":
/*!*************************************!*\
  !*** ./src/components/util/util.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Util = void 0;
class Util {
    cleanMain() {
        const main = document.querySelector('.container-main');
        if (main) {
            main.innerHTML = '';
        }
    }
    cleanMainPage() {
        const mainPage = document.querySelector('.main-page');
        if (mainPage) {
            mainPage.innerHTML = '';
        }
    }
    cleanContainerWords() {
        const wordsField = document.querySelector('.container-words__field');
        if (wordsField) {
            wordsField.innerHTML = '';
        }
    }
    AddContainerMainToMainPage() {
        const mainPage = document.querySelector('.main-page');
        if (mainPage) {
            const containerMain = document.createElement('div');
            containerMain.classList.add('container-main');
            mainPage.appendChild(containerMain);
        }
    }
}
exports.Util = Util;


/***/ }),

/***/ "./src/instances/instances.ts":
/*!************************************!*\
  !*** ./src/instances/instances.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AboutPageInst = exports.MainPageInst = exports.AudioGameInst = exports.UtilInst = exports.CardInst = exports.AuthInst = exports.DictionaryInst = exports.BookInst = exports.ApiInst = exports.AppInst = void 0;
const api_1 = __webpack_require__(/*! ../components/api/api */ "./src/components/api/api.ts");
const auth_1 = __webpack_require__(/*! ../components/auth/auth */ "./src/components/auth/auth.ts");
const book_1 = __webpack_require__(/*! ../components/book/book */ "./src/components/book/book.ts");
const card_1 = __webpack_require__(/*! ../components/card/card */ "./src/components/card/card.ts");
const dictionary_1 = __webpack_require__(/*! ../components/dictionary/dictionary */ "./src/components/dictionary/dictionary.ts");
const util_1 = __webpack_require__(/*! ../components/util/util */ "./src/components/util/util.ts");
const main_page_1 = __webpack_require__(/*! ../pages/main-page/main-page */ "./src/pages/main-page/main-page.ts");
const about_page_1 = __webpack_require__(/*! ../pages/about-page/about-page */ "./src/pages/about-page/about-page.ts");
const audiogame_1 = __webpack_require__(/*! ../components/audiogame/audiogame */ "./src/components/audiogame/audiogame.ts");
const app_1 = __webpack_require__(/*! ../app */ "./src/app.ts");
/***********Сущности************* */
exports.AppInst = new app_1.App();
exports.ApiInst = new api_1.Api();
exports.BookInst = new book_1.Book();
exports.DictionaryInst = new dictionary_1.Dictionary();
exports.AuthInst = new auth_1.Auth();
exports.CardInst = new card_1.Card();
exports.UtilInst = new util_1.Util();
exports.AudioGameInst = new audiogame_1.AudioGame();
/********Pages********* */
exports.MainPageInst = new main_page_1.MainPage();
exports.AboutPageInst = new about_page_1.AboutPage();


/***/ }),

/***/ "./src/pages/about-page/about-page.ts":
/*!********************************************!*\
  !*** ./src/pages/about-page/about-page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AboutPage = void 0;
const instances_1 = __webpack_require__(/*! ../../instances/instances */ "./src/instances/instances.ts");
class AboutPage {
    createAboutPage() {
        return `<div class="about-page">
              <div class="about-page__info">
                <div class="about-page__img">
                  <img src="./assets/about.jpg" alt="about-img">
                </div>
                <h4 class="about-page__title">Alex N. 2022</h4>
                <div class="about-page__text">
                  <a href="http://github.com/voshodz"><span>github.com/voshodz</span></a>
                </div>
              </div>
            </div>`;
    }
    loadAboutPage() {
        instances_1.UtilInst.cleanMainPage();
        const mainPage = document.querySelector('.main-page');
        if (mainPage) {
            mainPage.innerHTML = this.createAboutPage();
        }
    }
}
exports.AboutPage = AboutPage;


/***/ }),

/***/ "./src/pages/main-page/main-page.ts":
/*!******************************************!*\
  !*** ./src/pages/main-page/main-page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MainPage = void 0;
class MainPage {
    startMainPage() {
        const markDownMainPage = `<div class="main-page__wrapper">
                                <div class="main-page__text">
                                  RSLang - приложение для изучения английского языка!
                                  <span>Учебник с 3600 наиболее употребляемый словами
                                    Словарь, и аудиоигра для закрепления
                                  - все это ты найдешь в RSLang.</span>
                                </div>
                                <div class="main-page__img">
                                  <img src="./assets/main.png" alt="main__png">
                                </div>  
                              </div>
                              <div class="container-main">
                                
                              </div>`;
        return markDownMainPage;
    }
    loadMainPage() {
        const mainPage = document.querySelector('.main-page');
        if (mainPage) {
            mainPage.innerHTML = '';
            mainPage.innerHTML = this.startMainPage();
        }
    }
}
exports.MainPage = MainPage;


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BASE_URL = void 0;
exports.BASE_URL = 'https://api-rs-lang.herokuapp.com';


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const instances_1 = __webpack_require__(/*! ./instances/instances */ "./src/instances/instances.ts");
__webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
instances_1.AppInst.loadMain();
instances_1.AppInst.loadApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUN2QkQsTUFBYSxRQUFRO0lBQ1osYUFBYTtRQUNsQixNQUFNLGdCQUFnQixHQUFHOzs7Ozs7Ozs7Ozs7O3FDQWFRLENBQUM7UUFDbEMsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBQ00sWUFBWTtRQUNqQixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RELElBQUksUUFBUSxFQUFFO1lBQ1osUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDeEIsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDM0M7SUFDSCxDQUFDO0NBQ0Y7QUF6QkQsNEJBeUJDOzs7Ozs7Ozs7Ozs7OztBQ3pCWSxnQkFBUSxHQUFHLG1DQUFtQyxDQUFDOzs7Ozs7O1VDQTVEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BLHFHQUFnRDtBQUNoRCwwRUFBNkI7QUFDN0IsbUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNuQixtQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvYXVkaW9nYW1lL2F1ZGlvZ2FtZS5zY3NzPzM3OWUiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvYXV0aC9sb2dpbi5zY3NzP2ViZDQiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzM4YTUiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy9hcGkvYXBpLnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL2F1ZGlvZ2FtZS9hdWRpb2dhbWUudHMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvYXV0aC9hdXRoLnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL2Jvb2svYm9vay50cyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy9jYXJkL2NhcmQudHMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvZGljdGlvbmFyeS9kaWN0aW9uYXJ5LnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL3V0aWwvdXRpbC50cyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvaW5zdGFuY2VzL2luc3RhbmNlcy50cyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvcGFnZXMvYWJvdXQtcGFnZS9hYm91dC1wYWdlLnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9wYWdlcy9tYWluLXBhZ2UvbWFpbi1wYWdlLnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy90eXBlcy50cyIsIndlYnBhY2s6Ly9OZXdzSlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmV3c0pTL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IEF1dGggfSBmcm9tICcuL2NvbXBvbmVudHMvYXV0aC9hdXRoJztcclxuaW1wb3J0IHsgQWJvdXRQYWdlSW5zdCwgQXVkaW9HYW1lSW5zdCwgQXV0aEluc3QsIEJvb2tJbnN0LCBEaWN0aW9uYXJ5SW5zdCwgTWFpblBhZ2VJbnN0IH0gZnJvbSAnLi9pbnN0YW5jZXMvaW5zdGFuY2VzJztcclxuLy9pbXBvcnQgeyBUb2FzdCB9IGZyb20gJ2Jvb3RzdHJhcCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICBsb2FkTWFpbigpIHtcclxuICAgIGNvbnN0IG1hcmtkb3duID0gYDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzcz1cImhlYWRlcl9faWNvblwiPlJzIExhbmc8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bl9ib29rXCI+XHJcbiAgICAgICAgICAgICAg0KPRh9C10LHQvdC40LpcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG5fZGljdGlvbmFyeVwiPlxyXG4gICAgICAgICAgICAgINCh0LvQvtCy0LDRgNGMXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuX2F1ZGlvZ2FtZVwiPlxyXG4gICAgICAgICAgICAgINCQ0YPQtNC40L7QmNCz0YDQsFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bl9hYm91dFwiPlxyXG4gICAgICAgICAgICAgINCeINCa0L7QvNCw0L3QtNC1XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXJlZ2lzdGVyXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXBhZ2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1wYWdlX193cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1wYWdlX190ZXh0XCI+XHJcbiAgICAgICAgICAgIFJTTGFuZyAtINC/0YDQuNC70L7QttC10L3QuNC1INC00LvRjyDQuNC30YPRh9C10L3QuNGPINCw0L3Qs9C70LjQudGB0LrQvtCz0L4g0Y/Qt9GL0LrQsCFcclxuICAgICAgICAgICAgPHNwYW4+0KPRh9C10LHQvdC40Log0YEgMzYwMCDQvdCw0LjQsdC+0LvQtdC1INGD0L/QvtGC0YDQtdCx0LvRj9C10LzRi9C5INGB0LvQvtCy0LDQvNC4XHJcbiAgICAgICAgICAgICAg0KHQu9C+0LLQsNGA0Ywg0LTQu9GPINC30LDQv9C+0LzQuNC90LDQvdC40Y8sINC4INCw0YPQtNC40L7QuNCz0YDQsCDQtNC70Y8g0LfQsNC60YDQtdC/0LvQtdC90LjRj1xyXG4gICAgICAgICAgICAtINCy0YHQtSDRjdGC0L4g0YLRiyDQvdCw0LnQtNC10YjRjCDQsiBSU0xhbmcuPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1wYWdlX19pbWdcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9tYWluLnBuZ1wiIGFsdD1cIm1haW5fX3BuZ1wiPlxyXG4gICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLW1haW5cIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cclxuICAgICAgICA8YSBjbGFzcz1cImZvb3Rlcl9fZ2l0aHViXCIgaHJlZj1cImh0dHA6Ly9naXRodWIudm9zaG9kelwiPjwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX195ZWFyXCI+MjAyMjwvZGl2PlxyXG5cclxuICAgICAgICA8YSBjbGFzcz1cImZvb3Rlcl9faWNvblwiaHJlZj1cImh0dHBzOi8vcnMuc2Nob29sL1wiIGNsYXNzPVwiZm9vdGVyX19jb3Vyc2VcIj48L2E+XHJcblxyXG4gICAgICA8L2Zvb3Rlcj5gO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGlmIChib2R5KSB7XHJcbiAgICAgIGJvZHkuaW5uZXJIVE1MID0gbWFya2Rvd247XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBsb2FkQXBwKCkge1xyXG4gICAgQXV0aEluc3QuaW5pdEF1dGhvcml6YXRpb24oKTtcclxuICAgIGNvbnN0IGJ0bkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2ljb24nKTtcclxuICAgIGJ0bkhlYWRlcj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIE1haW5QYWdlSW5zdC5sb2FkTWFpblBhZ2UoKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYnRuUmVnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl9jcmVhdGUnKTtcclxuICAgIGJ0blJlZz8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIEF1dGhJbnN0LmxvYWRSZWdpc3RlcigpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBidG5Mb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fbG9naW4nKTtcclxuICAgIGJ0bkxvZ2luPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgQXV0aEluc3QubG9hZExvZ2luKCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGJ0bkJvb2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX2Jvb2snKTtcclxuICAgIGJ0bkJvb2s/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBCb29rSW5zdC5pbml0KCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGJ0bkRpY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX2RpY3Rpb25hcnknKTtcclxuICAgIGJ0bkRpY3Q/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBEaWN0aW9uYXJ5SW5zdC5pbml0KCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGJ0bkFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl9hYm91dCcpO1xyXG4gICAgYnRuQWJvdXQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBBYm91dFBhZ2VJbnN0LmxvYWRBYm91dFBhZ2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGJ0bkF1ZGlvR2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fYXVkaW9nYW1lJyk7XHJcbiAgICBidG5BdWRpb0dhbWU/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBBdWRpb0dhbWVJbnN0LmxvYWRBdWRpb0dhbWVGcm9tTWFpblBhZ2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBCQVNFID0gJ2h0dHBzOi8vYXBpLXJzLWxhbmcuaGVyb2t1YXBwLmNvbSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBpIHtcclxuICAvKioqKioqKioqKkFwaSBvZiB1c2VyKioqKioqKioqKiogKi9cclxuICBwdWJsaWMgZ2V0QkFTRV9VUkwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBCQVNFO1xyXG4gIH1cclxuICBwdWJsaWMgY3JlYXRlVXNlciA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0JBU0V9L3VzZXJzYCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxyXG4gICAgfSk7XHJcbiAgICAvKi50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5jb3JyZWN0IGNyZWF0ZVVzZXIgd2l0aCBzdGF0dXMgJHtyZXMuc3RhdHVzfWApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfSk7Ki9cclxuICB9O1xyXG4gIHB1YmxpYyBsb2dpblVzZXIgPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfTtcclxuICAgIHJldHVybiBmZXRjaChgJHtCQVNFfS9zaWduaW5gLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlciksXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHB1YmxpYyBnZXRVc2VyID0gKHRva2VuOiBzdHJpbmcsIGlkOiBzdHJpbmcpID0+XHJcbiAgICBmZXRjaChgJHtCQVNFfS91c2Vycy8ke2lkfWAsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuLFxyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgcHVibGljIGRlbGV0ZVVzZXIgPSAodG9rZW46IHN0cmluZywgaWQ6IHN0cmluZykgPT5cclxuICAgIGZldGNoKGAke0JBU0V9L3VzZXJzLyR7aWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4sXHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIgKyAnICcgKyBlcnIuc3RhdHVzKSk7XHJcblxyXG4gIC8qKioqKioqKioqKkFQSSB0aGF0IHJlcXVpcmUgVXNlcklkIGFuZCBUb2tlbioqKioqKioqKioqKiogKi9cclxuICBwdWJsaWMgZ2V0TmV3VXNlclRva2VuID0gKHRva2VuOiBzdHJpbmcsIGlkOiBzdHJpbmcpID0+XHJcbiAgICBmZXRjaChgJHtCQVNFfS91c2Vycy8ke2lkfS90b2tlbnNgLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbixcclxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIC8qKioqKioqKioqKioqV09SRFMhISEqKioqKioqKioqKioqICovXHJcbiAgcHVibGljIGdldFdvcmRCeUlkID0gKHdvcmRJZDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QkFTRX0vd29yZHMvJHt3b3JkSWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XHJcbiAgfTtcclxuICBwdWJsaWMgZ2V0V29yZHMgPSAodG9rZW46IHN0cmluZykgPT5cclxuICAgIGZldGNoKGAke0JBU0V9L3dvcmRzL2AsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuLFxyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xyXG4gIHB1YmxpYyBnZXRXb3Jkc1dpdGhQYWdlQW5kR3JvdXAgPSAodG9rZW46IHN0cmluZywgcGFnZTogbnVtYmVyLCBncm91cDogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QkFTRX0vd29yZHM/cGFnZT0ke3BhZ2V9Jmdyb3VwPSR7Z3JvdXB9YCwge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4sXHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XHJcbiAgfTtcclxuICBwdWJsaWMgY3JlYXRlV29yZGZvclVzZXIgPSBhc3luYyAoXHJcbiAgICB1c2VySWQ6IHN0cmluZyxcclxuICAgIHdvcmRJZDogc3RyaW5nLFxyXG4gICAgdG9rZW46IHN0cmluZyxcclxuICAgIGRpZmZpY3VsdHk6IHN0cmluZyxcclxuICAgIG9wdGlvbmFsOiBhbnkgLy8gYWRkZWQgbGF0ZXIgb3B0aW9uYWwgc2V0dGluZ3NcclxuICApID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgIGRpZmZpY3VsdHksXHJcbiAgICAgIG9wdGlvbmFsLFxyXG4gICAgfTtcclxuICAgIHJldHVybiBmZXRjaChgJHtCQVNFfS91c2Vycy8ke3VzZXJJZH0vd29yZHMvJHt3b3JkSWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuLFxyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoYFdvcmQgaXMgYWxyZWFkeSBhZGRlZCAke2Vycn1gKSk7XHJcbiAgfTtcclxuICBwdWJsaWMgZGVsZXRlV29yZGZvclVzZXIgPSBhc3luYyAodXNlcklkOiBzdHJpbmcsIHdvcmRJZDogc3RyaW5nLCB0b2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QkFTRX0vdXNlcnMvJHt1c2VySWR9L3dvcmRzLyR7d29yZElkfWAsIHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuLFxyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTVUNDRVNTUyBERUxFVEVEISEnKTtcclxuICAgICAgfVxyXG4gICAgICAvL2NvbnNvbGUubG9nKG9iamVjdCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHB1YmxpYyBnZXRBbGxXb3Jkc09mVXNlciA9ICh1c2VySWQ6IHN0cmluZywgdG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0JBU0V9L3VzZXJzLyR7dXNlcklkfS93b3Jkc2AsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuLFxyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xyXG4gIH07XHJcbiAgcHVibGljIGdldFdvcmRPZlVzZXJCeVdvcmRJZCA9IGFzeW5jICh1c2VySWQ6IHN0cmluZywgd29yZElkOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtCQVNFfS91c2Vycy8ke3VzZXJJZH0vd29yZHMvJHt3b3JkSWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4sXHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgLyoudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5zdGF0dXMpO1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7Ki9cclxuICB9O1xyXG4gIC8qKioqKioqKioqKipBcGkgdGhhdCBub3QgcmVxdWlyZSBBdXRoKioqKioqKioqICovXHJcbiAgcHVibGljIGdldFdvcmRzV2l0aFBhZ2VBbmRHcm91cE5vQXV0aCA9IChwYWdlOiBudW1iZXIsIGdyb3VwOiBudW1iZXIpID0+XHJcbiAgICBmZXRjaChgJHtCQVNFfS93b3Jkcz9wYWdlPSR7cGFnZX0mZ3JvdXA9JHtncm91cH1gLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBBcGlJbnN0LCBVdGlsSW5zdCB9IGZyb20gJy4uLy4uL2luc3RhbmNlcy9pbnN0YW5jZXMnO1xyXG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5pbXBvcnQgJy4vYXVkaW9nYW1lLnNjc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF1ZGlvR2FtZSB7XHJcbiAgcHJpdmF0ZSByaWdodEFuc3dlcnM6IFdvcmRbXTtcclxuICBwcml2YXRlIHdyb25nQW5zd2VyczogV29yZFtdO1xyXG4gIHByaXZhdGUgQXVkaW9JY29uID0gYDxzdmcgY2xhc3M9XCJhdWRpby1nYW1lX19zdmdcIiBmb2N1c2FibGU9XCJmYWxzZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zIDl2Nmg0bDUgNVY0TDcgOUgzem0xMy41IDNjMC0xLjc3LTEuMDItMy4yOS0yLjUtNC4wM3Y4LjA1YzEuNDgtLjczIDIuNS0yLjI1IDIuNS00LjAyek0xNCAzLjIzdjIuMDZjMi44OS44NiA1IDMuNTQgNSA2Ljcxcy0yLjExIDUuODUtNSA2LjcxdjIuMDZjNC4wMS0uOTEgNy00LjQ5IDctOC43N3MtMi45OS03Ljg2LTctOC43N3pcIj5cclxuICAgICAgICAgICAgICAgICAgPC9wYXRoPjwvc3ZnPmA7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJpZ2h0QW5zd2VycyA9IFtdO1xyXG4gICAgdGhpcy53cm9uZ0Fuc3dlcnMgPSBbXTtcclxuICB9XHJcbiAgcHVibGljIGdldFJhbmRvbUludChtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcclxuICB9XHJcbiAgcHVibGljIGxvYWRBdWRpb0dhbWVGcm9tTWFpblBhZ2UoKSB7XHJcbiAgICBVdGlsSW5zdC5jbGVhbk1haW5QYWdlKCk7XHJcbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXBhZ2UnKTtcclxuICAgIGlmIChtYWluUGFnZSkge1xyXG4gICAgICBtYWluUGFnZS5hcHBlbmRDaGlsZCh0aGlzLmxvYWRBdWRpb0dhbWVGaWVsZCgpKTtcclxuICAgICAgdGhpcy5sb2FkU2VsZWN0T2ZMZXZlbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgYXN5bmMgbG9hZEF1ZGlvR2FtZUZyb21Cb29rKGdyb3VwOiBudW1iZXIsIHBhZ2U6IG51bWJlcikge1xyXG4gICAgVXRpbEluc3QuY2xlYW5NYWluUGFnZSgpO1xyXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1wYWdlJyk7XHJcbiAgICBpZiAobWFpblBhZ2UpIHtcclxuICAgICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQodGhpcy5sb2FkQXVkaW9HYW1lRmllbGQoKSk7XHJcbiAgICAgIGNvbnN0IHdvcmRzID0gYXdhaXQgQXBpSW5zdC5nZXRXb3Jkc1dpdGhQYWdlQW5kR3JvdXBOb0F1dGgocGFnZSwgZ3JvdXApO1xyXG4gICAgICB0aGlzLmxvYWRBdWRpb0dhbWVXaXRoV29yZHMod29yZHMpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIGdldEFuc3dlcnMoKSB7XHJcbiAgICBjb25zdCBhdWRpb0dhbWU6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1nYW1lJyk7XHJcbiAgICBpZiAoYXVkaW9HYW1lKSB7XHJcbiAgICAgIGF1ZGlvR2FtZS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgY29uc3QgYW5zd2VyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBhbnN3ZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLWdhbWVfX2Fuc3dlcnMtd3JhcHBlcicpO1xyXG4gICAgICBjb25zdCByaWdodENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICByaWdodENvbHVtbi5jbGFzc0xpc3QuYWRkKCdhdWRpby1nYW1lX19hbnN3ZXJzLXJpZ2h0Jyk7XHJcbiAgICAgIHJpZ2h0Q29sdW1uLmlubmVySFRNTCArPSAnPGgyPtCe0YLQs9Cw0LTQsNC90L3Ri9C1INGB0LvQvtCy0LA8L2gyPic7XHJcbiAgICAgIHRoaXMucmlnaHRBbnN3ZXJzLmZvckVhY2goKGFucykgPT4ge1xyXG4gICAgICAgIC8vcmlnaHRDb2x1bW4uaW5uZXJIVE1MICs9IGFucy53b3JkO1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvU291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYXVkaW9Tb3VyY2UuY2xhc3NMaXN0LmFkZCgnYXVkaW8tZ2FtZV9faWNvbi1zbWFsbCcpO1xyXG4gICAgICAgIGF1ZGlvU291cmNlLmlubmVySFRNTCA9IHRoaXMuQXVkaW9JY29uO1xyXG4gICAgICAgIGNvbnN0IHdvcmRJbmZvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB3b3JkSW5mb1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYXVkaW8tZ2FtZV9faW5mby13cmFwcGVyJyk7XHJcbiAgICAgICAgYXVkaW9Tb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygpO1xyXG4gICAgICAgICAgYXVkaW8uc3JjID0gYCR7QXBpSW5zdC5nZXRCQVNFX1VSTCgpfS8ke2Fucy5hdWRpb31gO1xyXG4gICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdvcmRJbmZvV3JhcHBlci5hcHBlbmRDaGlsZChhdWRpb1NvdXJjZSk7XHJcbiAgICAgICAgY29uc3Qgd29yZEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgd29yZEluZm8uY2xhc3NMaXN0LmFkZCgnYXVkaW8tZ2FtZV9fc3Bhbi13b3JkJyk7XHJcbiAgICAgICAgd29yZEluZm8uaW5uZXJIVE1MID0gYCR7YW5zLndvcmR9IC0gJHthbnMud29yZFRyYW5zbGF0ZX1gO1xyXG4gICAgICAgIHdvcmRJbmZvV3JhcHBlci5hcHBlbmRDaGlsZCh3b3JkSW5mbyk7XHJcbiAgICAgICAgcmlnaHRDb2x1bW4uYXBwZW5kQ2hpbGQod29yZEluZm9XcmFwcGVyKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGFuc3dlcldyYXBwZXIuYXBwZW5kQ2hpbGQocmlnaHRDb2x1bW4pO1xyXG4gICAgICBjb25zdCB3cm9uZ0NvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB3cm9uZ0NvbHVtbi5jbGFzc0xpc3QuYWRkKCdhdWRpby1nYW1lX19hbnN3ZXJzLXdyb25nJyk7XHJcbiAgICAgIHdyb25nQ29sdW1uLmlubmVySFRNTCArPSAnPGgyPtCh0LvQvtCy0LAg0LPQtNC1INCS0Ysg0L7RiNC40LHQu9C40YHRjDwvaDI+JztcclxuICAgICAgdGhpcy53cm9uZ0Fuc3dlcnMuZm9yRWFjaCgoYW5zKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXVkaW9Tb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhdWRpb1NvdXJjZS5jbGFzc0xpc3QuYWRkKCdhdWRpby1nYW1lX19pY29uLXNtYWxsJyk7XHJcbiAgICAgICAgYXVkaW9Tb3VyY2UuaW5uZXJIVE1MID0gdGhpcy5BdWRpb0ljb247XHJcbiAgICAgICAgY29uc3Qgd29yZEluZm9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHdvcmRJbmZvV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhdWRpby1nYW1lX19pbmZvLXdyYXBwZXInKTtcclxuICAgICAgICBhdWRpb1NvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKCk7XHJcbiAgICAgICAgICBhdWRpby5zcmMgPSBgJHtBcGlJbnN0LmdldEJBU0VfVVJMKCl9LyR7YW5zLmF1ZGlvfWA7XHJcbiAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd29yZEluZm9XcmFwcGVyLmFwcGVuZENoaWxkKGF1ZGlvU291cmNlKTtcclxuICAgICAgICBjb25zdCB3b3JkSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB3b3JkSW5mby5jbGFzc0xpc3QuYWRkKCdhdWRpby1nYW1lX19zcGFuLXdvcmQnKTtcclxuICAgICAgICB3b3JkSW5mby5pbm5lckhUTUwgPSBgJHthbnMud29yZH0gLSAke2Fucy53b3JkVHJhbnNsYXRlfWA7XHJcbiAgICAgICAgd29yZEluZm9XcmFwcGVyLmFwcGVuZENoaWxkKHdvcmRJbmZvKTtcclxuICAgICAgICB3cm9uZ0NvbHVtbi5hcHBlbmRDaGlsZCh3b3JkSW5mb1dyYXBwZXIpO1xyXG4gICAgICB9KTtcclxuICAgICAgYW5zd2VyV3JhcHBlci5hcHBlbmRDaGlsZCh3cm9uZ0NvbHVtbik7XHJcbiAgICAgIGF1ZGlvR2FtZS5hcHBlbmRDaGlsZChhbnN3ZXJXcmFwcGVyKTtcclxuICAgICAgdGhpcy5yaWdodEFuc3dlcnMgPSBbXTtcclxuICAgICAgdGhpcy53cm9uZ0Fuc3dlcnMgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBsb2FkQXVkaW9HYW1lRmllbGQoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgY29uc3QgYXVkaW9HYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhdWRpb0dhbWUuY2xhc3NMaXN0LmFkZCgnYXVkaW8tZ2FtZScpO1xyXG4gICAgcmV0dXJuIGF1ZGlvR2FtZTtcclxuICB9XHJcbiAgcHJpdmF0ZSBsb2FkU2VsZWN0T2ZMZXZlbCgpIHtcclxuICAgIGNvbnN0IGF1ZGlvR2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1nYW1lJyk7XHJcbiAgICBjb25zdCBhdWRpb0dhbWVMZXZlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYXVkaW9HYW1lTGV2ZWwuY2xhc3NMaXN0LmFkZCgnYXVkaW8tZ2FtZV9fbGV2ZWwnKTtcclxuICAgIGF1ZGlvR2FtZUxldmVsLmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cImF1ZGlvLWdhbWVfX2xldmVsX190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+PHNwYW4+0J3QsNGB0YLRgNC+0LnQutC4INC40LPRgNGLPHNwYW4+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3Bhbj7QktGL0LHQtdGA0LjRgtC1INGB0LvQvtC20L3QvtGB0YLRjCDQuNCz0YDRizxzcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImF1ZGlvLWdhbWVfX3NlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj7Qo9GA0L7QstC10L3RjCAxPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPtCj0YDQvtCy0LXQvdGMIDI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+0KPRgNC+0LLQtdC90YwgMzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj7Qo9GA0L7QstC10L3RjCA0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPtCj0YDQvtCy0LXQvdGMIDU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+0KPRgNC+0LLQtdC90YwgNjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PmA7XHJcbiAgICBjb25zdCBhdWRpb0dhbWVTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGF1ZGlvR2FtZVN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhdWRpby1nYW1lX19sZXZlbF9fc3VibWl0Jyk7XHJcbiAgICBhdWRpb0dhbWVTdWJtaXRCdXR0b24uaW5uZXJIVE1MID0gJ9Cd0LDRh9Cw0YLRjCDQuNCz0YDRgyc7XHJcbiAgICBhdWRpb0dhbWVTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGF1ZGlvR2FtZVNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLWdhbWVfX3NlbGVjdCcpO1xyXG4gICAgICBpZiAoYXVkaW9HYW1lU2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBhdWRpb0dhbWVTZWxlY3QudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHdvcmRzID0gYXdhaXQgQXBpSW5zdC5nZXRXb3Jkc1dpdGhQYWdlQW5kR3JvdXBOb0F1dGgodGhpcy5nZXRSYW5kb21JbnQoMjkpLCBwYXJzZUludChsZXZlbCkpO1xyXG4gICAgICAgIHRoaXMubG9hZEF1ZGlvR2FtZVdpdGhXb3Jkcyh3b3Jkcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgYXVkaW9HYW1lTGV2ZWwuYXBwZW5kQ2hpbGQoYXVkaW9HYW1lU3VibWl0QnV0dG9uKTtcclxuICAgIGlmIChhdWRpb0dhbWUpIHtcclxuICAgICAgYXVkaW9HYW1lLmFwcGVuZENoaWxkKGF1ZGlvR2FtZUxldmVsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZEF1ZGlvR2FtZVdpdGhXb3Jkcyh3b3JkczogV29yZFtdKSB7XHJcbiAgICBjb25zdCBhdWRpb0dhbWU6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1nYW1lJyk7XHJcbiAgICBpZiAoYXVkaW9HYW1lKSB7XHJcbiAgICAgIGF1ZGlvR2FtZS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgYXVkaW9HYW1lLmFwcGVuZENoaWxkKHRoaXMubG9hZEN1cnJlbnRBdWRpb1NlY3Rpb24od29yZHNbMF0sIHdvcmRzKSk7XHJcbiAgICAgIGNvbnN0IGJ0bk5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgYnRuTmV4dC5jbGFzc0xpc3QuYWRkKCdhdWRpby1nYW1lX19uZXh0Jyk7XHJcbiAgICAgIGJ0bk5leHQuZGF0YXNldC5jb3VudCA9IGAwYDtcclxuICAgICAgYnRuTmV4dC5pbm5lckhUTUwgPSAn0KHQu9C10LTRg9GO0YnQtdC1INGB0LvQvtCy0L4nO1xyXG4gICAgICBidG5OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChidG5OZXh0LmRhdGFzZXQuY291bnQpIHtcclxuICAgICAgICAgIGJ0bk5leHQuZGF0YXNldC5jb3VudCA9IChwYXJzZUludChidG5OZXh0LmRhdGFzZXQuY291bnQpICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgIGlmIChidG5OZXh0LmRhdGFzZXQuY291bnQgPT09ICcyMCcpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkRmluaXNoU2VjdGlvbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5sb2FkTmV4dFNlY3Rpb24ocGFyc2VJbnQoYnRuTmV4dC5kYXRhc2V0LmNvdW50KSwgd29yZHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGF1ZGlvR2FtZS5hcHBlbmRDaGlsZChidG5OZXh0KTtcclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBsb2FkTmV4dFNlY3Rpb24obmV4dFdvcmQ6IG51bWJlciwgd29yZHM6IFdvcmRbXSkge1xyXG4gICAgY29uc3QgYXVkaW9HYW1lV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1nYW1lX193cmFwZXInKTtcclxuICAgIGlmIChhdWRpb0dhbWVXcmFwcGVyKSB7XHJcbiAgICAgIGF1ZGlvR2FtZVdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIGNvbnN0IGF1ZGlvR2FtZTogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLWdhbWUnKTtcclxuICAgICAgaWYgKGF1ZGlvR2FtZSkge1xyXG4gICAgICAgIGF1ZGlvR2FtZVdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5sb2FkQ3VycmVudEF1ZGlvU2VjdGlvbih3b3Jkc1tuZXh0V29yZF0sIHdvcmRzKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBsb2FkRmluaXNoU2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGF1ZGlvR2FtZTogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLWdhbWUnKTtcclxuICAgIGlmIChhdWRpb0dhbWUpIHtcclxuICAgICAgYXVkaW9HYW1lLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICB0aGlzLmdldEFuc3dlcnMoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBsb2FkQ3VycmVudEF1ZGlvU2VjdGlvbihjdXJyZW50V29yZDogV29yZCwgd29yZHM6IFdvcmRbXSk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGNvbnN0IGF1ZGlvR2FtZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGF1ZGlvR2FtZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYXVkaW8tZ2FtZV9fd3JhcGVyJyk7XHJcbiAgICBhdWRpb0dhbWVXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMubG9hZEF1ZGlvRnJvbVdvcmQoY3VycmVudFdvcmQpKTtcclxuICAgIGF1ZGlvR2FtZVdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5sb2FkT3B0aW9uc0ZpZWxkKGN1cnJlbnRXb3JkLCB3b3JkcykpO1xyXG4gICAgcmV0dXJuIGF1ZGlvR2FtZVdyYXBwZXI7XHJcbiAgfVxyXG4gIHByaXZhdGUgbG9hZE9wdGlvbnNGaWVsZChjdXJyZW50V29yZDogV29yZCwgd29yZHM6IFdvcmRbXSk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGNvbnN0IHNodWZmbGVkQXJyYXk6IFdvcmRbXSA9IHRoaXMucmFuZG9tV29yZHMoY3VycmVudFdvcmQsIHdvcmRzKTtcclxuICAgIGNvbnN0IGF1ZGlvR2FtZU9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGF1ZGlvR2FtZU9wdGlvbnMuY2xhc3NMaXN0LmFkZCgnYXVkaW8tZ2FtZV9fb3B0aW9ucycpO1xyXG4gICAgc2h1ZmZsZWRBcnJheS5mb3JFYWNoKCh3b3JkKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdhdWRpby1nYW1lX19vcHRpb25zX193b3JkJyk7XHJcbiAgICAgIG9wdGlvbnMuZGF0YXNldC5pZCA9IHdvcmQuaWQ7XHJcbiAgICAgIG9wdGlvbnMuaW5uZXJIVE1MID0gYCR7d29yZC53b3JkVHJhbnNsYXRlLnRvVXBwZXJDYXNlKCl9YDtcclxuICAgICAgb3B0aW9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0aGlzLnNob3dUcnVlQW5zd2VyKGN1cnJlbnRXb3JkLCB3b3JkLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGF1ZGlvR2FtZU9wdGlvbnMuYXBwZW5kQ2hpbGQob3B0aW9ucyk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhdWRpb0dhbWVPcHRpb25zO1xyXG4gIH1cclxuICBwcml2YXRlIHNob3dUcnVlQW5zd2VyKGN1cnJlbnRXb3JkOiBXb3JkLCB3b3JkSWQ6IHN0cmluZykge1xyXG4gICAgLyoqKioqKioqUmlnaHQgYW5zd2VyIHNlY3Rpb24qKioqKioqICovXHJcbiAgICBjb25zdCBvcHRpb25zT2ZXb3JkczogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD4gfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1ZGlvLWdhbWVfX29wdGlvbnNfX3dvcmQnKTtcclxuICAgIGlmIChjdXJyZW50V29yZC5pZCA9PT0gd29yZElkKSB7XHJcbiAgICAgIGlmIChvcHRpb25zT2ZXb3Jkcykge1xyXG4gICAgICAgIG9wdGlvbnNPZldvcmRzLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgaWYgKG9wdGlvbi5kYXRhc2V0LmlkID09PSBjdXJyZW50V29yZC5pZCkge1xyXG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnYXVkaW8tZ2FtZV9fb3B0aW9uc19fcmlnaHQtb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHRBbnN3ZXJzLnB1c2goY3VycmVudFdvcmQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqKipXcm9uZyBhbnN3ZXIgc2VjdGlvbioqKiAqL1xyXG4gICAgaWYgKG9wdGlvbnNPZldvcmRzKSB7XHJcbiAgICAgIG9wdGlvbnNPZldvcmRzLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgIGlmIChvcHRpb24uZGF0YXNldC5pZCA9PT0gY3VycmVudFdvcmQuaWQpIHtcclxuICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhdWRpby1nYW1lX19vcHRpb25zX19yaWdodC1vcHRpb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbi5kYXRhc2V0LmlkID09PSB3b3JkSWQpIHtcclxuICAgICAgICAgIHRoaXMud3JvbmdBbnN3ZXJzLnB1c2goY3VycmVudFdvcmQpO1xyXG4gICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLWdhbWVfX29wdGlvbnNfX3dyb25nLW9wdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByaXZhdGUgbG9hZEF1ZGlvRnJvbVdvcmQod29yZDogV29yZCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGNvbnN0IGF1ZGlvSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYXVkaW9JY29uLmNsYXNzTGlzdC5hZGQoJ2F1ZGlvLWdhbWVfX2ljb24nKTtcclxuICAgIGF1ZGlvSWNvbi5pbm5lckhUTUwgKz0gdGhpcy5BdWRpb0ljb247XHJcblxyXG4gICAgY29uc3QgYXVkaW9Tb3VyY2U6IEhUTUxBdWRpb0VsZW1lbnQgPSBuZXcgQXVkaW8oYCR7QXBpSW5zdC5nZXRCQVNFX1VSTCgpfS8ke3dvcmQuYXVkaW99YCk7XHJcbiAgICBhdWRpb0ljb24uZGF0YXNldC5hdWRpb1NyYyA9IGAke0FwaUluc3QuZ2V0QkFTRV9VUkwoKX0vJHt3b3JkLmF1ZGlvfWA7XHJcblxyXG4gICAgYXVkaW9JY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBhdWRpb1NvdXJjZS5wbGF5KCk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChlLmNvZGUgPT09ICdTcGFjZScpIHtcclxuICAgICAgICB0aGlzLmxvYWRMaXN0ZW5lclRvU3BhY2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGF1ZGlvSWNvbjtcclxuICB9XHJcbiAgcHJpdmF0ZSBsb2FkTGlzdGVuZXJUb1NwYWNlKCkge1xyXG4gICAgY29uc3QgYXVkaW9JY29uOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8tZ2FtZV9faWNvbicpO1xyXG4gICAgaWYgKGF1ZGlvSWNvbikge1xyXG4gICAgICBjb25zdCBhdWRpb1NyYyA9IGF1ZGlvSWNvbi5kYXRhc2V0LmF1ZGlvU3JjO1xyXG4gICAgICBpZiAoYXVkaW9TcmMpIHtcclxuICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhhdWRpb1NyYyk7XHJcbiAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByaXZhdGUgcmFuZG9tV29yZHMoY3VycmVudFdvcmQ6IFdvcmQsIHdvcmRzOiBXb3JkW10pOiBXb3JkW10ge1xyXG4gICAgY29uc3QgcmVzdWx0QXJyYXk6IFdvcmRbXSA9IFtdO1xyXG4gICAgY29uc3QgYXJyYXlPZlJhbmRvbU51bWJlcnM6IG51bWJlcltdID0gW107XHJcbiAgICByZXN1bHRBcnJheS5wdXNoKGN1cnJlbnRXb3JkKTtcclxuICAgIHdoaWxlIChyZXN1bHRBcnJheS5sZW5ndGggPCA1KSB7XHJcbiAgICAgIGNvbnN0IHJhbmROdW1iID0gdGhpcy5nZXRSYW5kb21JbnQoMTkpO1xyXG4gICAgICBpZiAod29yZHNbcmFuZE51bWJdLmlkICE9PSBjdXJyZW50V29yZC5pZCAmJiAhYXJyYXlPZlJhbmRvbU51bWJlcnMuaW5jbHVkZXMocmFuZE51bWIpKSB7XHJcbiAgICAgICAgYXJyYXlPZlJhbmRvbU51bWJlcnMucHVzaChyYW5kTnVtYik7XHJcbiAgICAgICAgcmVzdWx0QXJyYXkucHVzaCh3b3Jkc1tyYW5kTnVtYl0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0QXJyYXkuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTsgLy9zaHVmZmxlIHNvcnRcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBpSW5zdCwgTWFpblBhZ2VJbnN0LCBVdGlsSW5zdCB9IGZyb20gJy4uLy4uL2luc3RhbmNlcy9pbnN0YW5jZXMnO1xyXG5pbXBvcnQgeyBBdXRoVXNlciB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuaW1wb3J0ICcuL2xvZ2luLnNjc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGgge1xyXG4gIHRva2VuID0gJyc7XHJcbiAgdXNlcklkID0gJyc7XHJcbiAgZW1haWwgPSAnJztcclxuICBtYWluOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLW1haW4nKTtcclxuICAgIGlmICh0aGlzLmNoZWNrQXV0aG9yaXphdGlvbigpKSB7XHJcbiAgICAgIHRoaXMuc2V0VG9rZW5BbmRVc2VySWRGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGluaXRBdXRob3JpemF0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyUmVnaXN0ZXI6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItcmVnaXN0ZXInKTtcclxuICAgIGlmICghdGhpcy5jaGVja0F1dGhvcml6YXRpb24oKSkge1xyXG4gICAgICBpZiAoY29udGFpbmVyUmVnaXN0ZXIpIHtcclxuICAgICAgICBjb250YWluZXJSZWdpc3Rlci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBjb25zdCBidG5SZWdpc3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGJ0blJlZ2lzdGVyLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG4gICAgICAgIGJ0blJlZ2lzdGVyLmNsYXNzTGlzdC5hZGQoJ2J0bl9jcmVhdGUnKTtcclxuICAgICAgICBidG5SZWdpc3Rlci5jbGFzc0xpc3QuYWRkKCdidG5fcmVnaXN0ZXItZm9ybScpO1xyXG4gICAgICAgIGJ0blJlZ2lzdGVyLmlubmVySFRNTCA9ICfQoNC10LPQuNGB0YLRgNCw0YbQuNGPJztcclxuICAgICAgICBidG5SZWdpc3Rlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMubG9hZFJlZ2lzdGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29udGFpbmVyUmVnaXN0ZXIuYXBwZW5kQ2hpbGQoYnRuUmVnaXN0ZXIpO1xyXG4gICAgICAgIGNvbnN0IGJ0bkxvZ2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYnRuTG9naW4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICAgICAgYnRuTG9naW4uY2xhc3NMaXN0LmFkZCgnYnRuX2xvZ2luJyk7XHJcbiAgICAgICAgYnRuTG9naW4uY2xhc3NMaXN0LmFkZCgnYnRuX3JlZ2lzdGVyLWZvcm0nKTtcclxuICAgICAgICBidG5Mb2dpbi5pbm5lckhUTUwgPSAn0JvQvtCz0LjQvSc7XHJcbiAgICAgICAgYnRuTG9naW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRMb2dpbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnRhaW5lclJlZ2lzdGVyLmFwcGVuZENoaWxkKGJ0bkxvZ2luKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvKioqU3VjY2VzIEF1dGhvcml6YXRpb24qKiAqL1xyXG4gICAgaWYgKGNvbnRhaW5lclJlZ2lzdGVyKSB7XHJcbiAgICAgIGNvbnRhaW5lclJlZ2lzdGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBjb25zdCBlbWFpbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZW1haWxJbmZvLmNsYXNzTGlzdC5hZGQoJ2VtYWlsX19pbmZvJyk7XHJcbiAgICAgIGVtYWlsSW5mby5pbm5lckhUTUwgPSB0aGlzLmdldEVtYWlsKCk7XHJcbiAgICAgIGNvbnRhaW5lclJlZ2lzdGVyLmFwcGVuZENoaWxkKGVtYWlsSW5mbyk7XHJcbiAgICAgIGNvbnN0IGJ0bkV4aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgYnRuRXhpdC5jbGFzc0xpc3QuYWRkKCdidG5fZXhpdCcpO1xyXG4gICAgICAvL2J0bkV4aXQuY2xhc3NMaXN0LmFkZCgnYnRuLXByaW1hcnknKTtcclxuICAgICAgYnRuRXhpdC5pbm5lckhUTUwgPSAn0JLRi9C50YLQuCc7XHJcbiAgICAgIGJ0bkV4aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgTWFpblBhZ2VJbnN0LmxvYWRNYWluUGFnZSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEF1dGhvcml6YXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnRhaW5lclJlZ2lzdGVyLmFwcGVuZENoaWxkKGJ0bkV4aXQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgY2hlY2tBdXRob3JpemF0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcHJpdmF0ZSBzZXRUb2tlbkFuZFVzZXJJZEZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBjb25zdCB0b2tlbjogc3RyaW5nIHwgbnVsbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgY29uc3QgdXNlcklkOiBzdHJpbmcgfCBudWxsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgY29uc3QgZW1haWw6IHN0cmluZyB8IG51bGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKTtcclxuICAgIC8vY29uc3QgZW1haWw6IHN0cmluZyB8IG51bGxcclxuICAgIGlmICh0b2tlbiAmJiB1c2VySWQgJiYgZW1haWwpIHtcclxuICAgICAgdGhpcy5zZXRFbWFpbChlbWFpbCk7XHJcbiAgICAgIHRoaXMuc2V0VG9rZW4odG9rZW4pO1xyXG4gICAgICB0aGlzLnNldFVzZXJJZCh1c2VySWQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgc2V0RW1haWwoZW1haWw6IHN0cmluZykge1xyXG4gICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0RW1haWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmVtYWlsO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0VG9rZW4oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnRva2VuO1xyXG4gIH1cclxuICBwdWJsaWMgc2V0VG9rZW4odG9rZW46IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy50b2tlbiA9IHRva2VuO1xyXG4gIH1cclxuICBwdWJsaWMgc2V0VXNlcklkKHVzZXJJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcclxuICB9XHJcbiAgcHVibGljIGdldFVzZXJJZCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlcklkO1xyXG4gIH1cclxuICBwdWJsaWMgbG9hZExvZ2luKCkge1xyXG4gICAgVXRpbEluc3QuY2xlYW5NYWluUGFnZSgpO1xyXG4gICAgVXRpbEluc3QuQWRkQ29udGFpbmVyTWFpblRvTWFpblBhZ2UoKTtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLW1haW4nKTtcclxuICAgIGlmIChtYWluKSB7XHJcbiAgICAgIG1haW4uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ3cmFwcGVyLXJlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgbWV0aG9kPVwiI1wiIGlkPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0LDRiCBlbWFpbCDQtNC70Y8g0LLRhdC+0LTQsDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPVwiXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JLQsNGIINC/0LDRgNC+0LvRjDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9XCJcIiBhdXRvY29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlZ2lzdGVyLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sb2FkTGlzdGVuZXJ0b0xvZ2luRm9ybSgpO1xyXG4gIH1cclxuICBwcml2YXRlIGxvYWRMaXN0ZW5lcnRvTG9naW5Gb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybUluZm86IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XHJcbiAgICBpZiAoZm9ybUluZm8pIHtcclxuICAgICAgZm9ybUluZm8uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZW1haWw6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZm9ybUluZm8ucXVlcnlTZWxlY3RvcignW25hbWU9XCJuYW1lXCJdJyk7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZm9ybUluZm8ucXVlcnlTZWxlY3RvcignW25hbWU9XCJwYXNzd29yZFwiXScpO1xyXG4gICAgICAgIGlmIChlbWFpbCAmJiBwYXNzd29yZCkge1xyXG4gICAgICAgICAgYXdhaXQgQXBpSW5zdC5sb2dpblVzZXIoZW1haWwudmFsdWUsIHBhc3N3b3JkLnZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbihhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZGF0YTogQXV0aFVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIGVtYWlsLnZhbHVlKTtcclxuICAgICAgICAgICAgICB0aGlzLnNldEVtYWlsKGVtYWlsLnZhbHVlKTtcclxuICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3NBdXRoKGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0QXV0aChlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIGluY29ycmVjdEF1dGgoZXJyOiBzdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICBhbGVydCgn0J1l0L/RgNCw0LLQuNC70YzQvdGL0LUg0LLQstC10LTQtdC90L3Ri9C1INC00LDQvdC90YvQtScpO1xyXG4gICAgLypjb25zdCB0b2FzdFRyaWdnZXI6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXZlVG9hc3RCdG4nKTtcclxuICAgIGNvbnN0IHRvYXN0TGl2ZUV4YW1wbGU6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXZlVG9hc3QnKTtcclxuICAgIGNvbnN0IHRvYXN0ID0gbmV3IGJvb3RzdHJhcC5Ub2FzdCh0b2FzdExpdmVFeGFtcGxlKTtcclxuICAgIHRvYXN0LnNob3coKTsqL1xyXG4gIH1cclxuICBwcml2YXRlIHN1Y2Nlc3NBdXRoKGRhdGE6IEF1dGhVc2VyKSB7XHJcbiAgICB0aGlzLnNldFRva2VuKGRhdGEudG9rZW4pO1xyXG4gICAgdGhpcy5zZXRVc2VySWQoZGF0YS51c2VySWQpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcklkJywgZGF0YS51c2VySWQpO1xyXG4gICAgdGhpcy5pbml0QXV0aG9yaXphdGlvbigpO1xyXG4gICAgVXRpbEluc3QuY2xlYW5NYWluUGFnZSgpO1xyXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1wYWdlJyk7XHJcbiAgICBpZiAobWFpblBhZ2UpIHtcclxuICAgICAgbWFpblBhZ2UuaW5uZXJIVE1MID0gTWFpblBhZ2VJbnN0LnN0YXJ0TWFpblBhZ2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIGxvYWRSZWdpc3RlcigpIHtcclxuICAgIFV0aWxJbnN0LmNsZWFuTWFpblBhZ2UoKTtcclxuICAgIFV0aWxJbnN0LkFkZENvbnRhaW5lck1haW5Ub01haW5QYWdlKCk7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1tYWluJyk7XHJcbiAgICBpZiAobWFpbikge1xyXG4gICAgICBtYWluLmlubmVySFRNTCA9IHRoaXMubWFya2Rvd25jb250YWluZXJSZWdpc3RlcjtcclxuICAgIH1cclxuICAgIHRoaXMubG9hZExpc3RlbmVyVG9jb250YWluZXJSZWdpc3RlcigpO1xyXG4gIH1cclxuICBwcml2YXRlIGxvYWRMaXN0ZW5lclRvY29udGFpbmVyUmVnaXN0ZXIoKSB7XHJcbiAgICBjb25zdCByZWdGb3JtOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXItZm9ybScpO1xyXG4gICAgaWYgKHJlZ0Zvcm0pIHtcclxuICAgICAgcmVnRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlclRvY29udGFpbmVyUmVnaXN0ZXIocmVnRm9ybSwgZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIGFzeW5jIGhhbmRsZXJUb2NvbnRhaW5lclJlZ2lzdGVyKGZvcm06IEhUTUxFbGVtZW50LCBldmVudDogU3VibWl0RXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuYW1lOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJuYW1lXCJdJyk7XHJcbiAgICBjb25zdCBlbWFpbDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZW1haWxcIl0nKTtcclxuICAgIGNvbnN0IHBhc3N3b3JkOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJwYXNzd29yZFwiXScpO1xyXG4gICAgaWYgKG5hbWUgJiYgcGFzc3dvcmQgJiYgZW1haWwpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQXBpSW5zdC5jcmVhdGVVc2VyKGVtYWlsLnZhbHVlLCBwYXNzd29yZC52YWx1ZSk7XHJcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSA0MTcpIHtcclxuICAgICAgICBhbGVydCgnVXNlciBhbHJlYWR5IGV4aXN0Jyk7XHJcbiAgICAgICAgdGhpcy5sb2FkUmVnaXN0ZXIoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IDQyMikge1xyXG4gICAgICAgIGFsZXJ0KCdJbmNvcnJlY3QgaW5wdXQgZGF0YSwgcGxzIHRyeSBhZ2FpbicpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIGVtYWlsLnZhbHVlKTtcclxuICAgICAgICB0aGlzLmxvYWRSZWdpc3RlcigpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgVXRpbEluc3QuY2xlYW5NYWluKCk7XHJcbiAgICAgICAgYXdhaXQgQXBpSW5zdC5sb2dpblVzZXIoZW1haWwudmFsdWUsIHBhc3N3b3JkLnZhbHVlKS50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRhdGE6IEF1dGhVc2VyID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIGVtYWlsLnZhbHVlKTtcclxuICAgICAgICAgIHRoaXMuc2V0RW1haWwoZW1haWwudmFsdWUpO1xyXG4gICAgICAgICAgdGhpcy5zdWNjZXNzQXV0aChkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBtYXJrZG93bmNvbnRhaW5lclJlZ2lzdGVyID0gYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXItcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBtZXRob2Q9XCIjXCIgaWQ9XCJyZWdpc3Rlci1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0JLQstC10LTQuNGC0LUg0LLQsNGI0LUg0LjQvNGPINGA0LXQs9C40YHRgtGA0LDRhtC40Lg6XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPVwiXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCLQktCw0YjQtSDQuNC80Y9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICDQktCy0LXQtNC40YLQtSDQstCw0YjQtSBlbWFpbCDRgNC10LPQuNGB0YLRgNCw0YbQuNC4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9XCJcIiBhdXRvY29tcGxldGU9XCJvZmZcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cItCS0LDRiNC1IGVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0J/RgNC40LTRg9C80LDQudGC0LUg0L/QsNGA0L7Qu9GMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPVwiXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCLQktCw0Ygg0L/QsNGA0L7Qu9GMXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlZ2lzdGVyLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcbiIsImltcG9ydCB7IEFwaUluc3QsIEF1ZGlvR2FtZUluc3QsIEF1dGhJbnN0LCBDYXJkSW5zdCwgVXRpbEluc3QgfSBmcm9tICcuLi8uLi9pbnN0YW5jZXMvaW5zdGFuY2VzJztcclxuaW1wb3J0IHsgV29yZCB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCb29rIHtcclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIFV0aWxJbnN0LmNsZWFuTWFpblBhZ2UoKTtcclxuICAgIHRoaXMuaW5pdENvbnRhaW5lcldvcmRzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRDb250YWluZXJXb3JkcygpIHtcclxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcGFnZScpO1xyXG4gICAgaWYgKG1haW5QYWdlKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lck1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29udGFpbmVyTWFpbi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItbWFpbicpO1xyXG4gICAgICBtYWluUGFnZS5hcHBlbmRDaGlsZChjb250YWluZXJNYWluKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1haW46IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItbWFpbicpO1xyXG4gICAgaWYgKG1haW4pIHtcclxuICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuICAgIGlmIChtYWluKSB7XHJcbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVHcm91cEJ0bnNXaXRoTGlzdGVuZXIoKSk7XHJcbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVQYWdpbmF0aW9uTWVudSgpKTtcclxuICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUNvbnRhaW5lcldvcmRzKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIGNyZWF0ZUdyb3VwQnRuc1dpdGhMaXN0ZW5lcigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICBjb25zdCB3cmFwcGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3cmFwcGVyQnRuLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXItYnRuJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICBjb25zdCBncm91cEJ0biA9IHRoaXMuY3JlYXRlR3JvdXBCdG4oaSk7XHJcbiAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgZ3JvdXBCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgICAgd3JhcHBlckJ0bi5hcHBlbmRDaGlsZChncm91cEJ0bik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhdWRpb0dhbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGF1ZGlvR2FtZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG5fYXVkaW8tZ2FtZScpO1xyXG4gICAgYXVkaW9HYW1lQnRuLmlubmVySFRNTCA9ICfQkNGD0LTQuNC+0LjQs9GA0LAnO1xyXG4gICAgYXVkaW9HYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsZXQgcGFnZSA9IDA7XHJcbiAgICAgIGxldCBncm91cCA9IDA7XHJcbiAgICAgIGNvbnN0IGdyb3VwQnRuczogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD4gfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bl9ncm91cCcpO1xyXG4gICAgICBpZiAoZ3JvdXBCdG5zKSB7XHJcbiAgICAgICAgZ3JvdXBCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VJZCA9IGJ0bi5kYXRhc2V0Lmdyb3VwO1xyXG4gICAgICAgICAgICBpZiAoZ3JvdUlkKSB7XHJcbiAgICAgICAgICAgICAgZ3JvdXAgPSBwYXJzZUludChncm91SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcGFnZUl0ZW1zOiBOb2RlTGlzdE9mPEhUTUxMSUVsZW1lbnQ+IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlLWl0ZW0nKTtcclxuICAgICAgaWYgKHBhZ2VJdGVtcykge1xyXG4gICAgICAgIHBhZ2VJdGVtcy5mb3JFYWNoKChwYWdlSXRlbSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHBhZ2VJdGVtLmNsYXNzTGlzdC5jb250YWlucygncGFnZS1pdGVtX2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VJZCA9IHBhZ2VJdGVtLmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgICAgIGlmIChwYWdlSWQpIHtcclxuICAgICAgICAgICAgICBwYWdlID0gcGFyc2VJbnQocGFnZUlkKSAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBBdWRpb0dhbWVJbnN0LmxvYWRBdWRpb0dhbWVGcm9tQm9vayhncm91cCwgcGFnZSk7XHJcbiAgICB9KTtcclxuICAgIHdyYXBwZXJCdG4uYXBwZW5kQ2hpbGQoYXVkaW9HYW1lQnRuKTtcclxuICAgIHJldHVybiB3cmFwcGVyQnRuO1xyXG4gIH1cclxuICBwcml2YXRlIGNyZWF0ZUdyb3VwQnRuKGdyb3VwOiBudW1iZXIpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICBjb25zdCB0ZXh0b0ZMZXZlbHMgPSBbJ0ExJywgJ0EyJywgJ0IxJywgJ0IyJywgJ0MxJywgJ0MyJ107XHJcbiAgICBjb25zdCB0ZXh0T2ZEZXNjcmlwdGlvbnMgPSBbXHJcbiAgICAgICc8Yj5FYXN5PGI+IDEtNjAwJyxcclxuICAgICAgJzxiPkVhc3k8Yj4gNjAxLTEyMDAnLFxyXG4gICAgICAnPGI+TWVkaXVtPGI+IDEyMDEtMTgwMCcsXHJcbiAgICAgICc8Yj5NZWRpdW08Yj4gMTgwMS0yNDAwJyxcclxuICAgICAgJzxiPkhhcmQ8Yj4gMjQwMS0zMDAwJyxcclxuICAgICAgJzxiPkhhcmQ8Yj4gMzAwMS0zNjAwJyxcclxuICAgIF07XHJcbiAgICBjb25zdCBidG5Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYnRuTGV2ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ0bkxldmVsLmNsYXNzTGlzdC5hZGQoJ2J0bl9ncm91cF9fbGV2ZWwnKTtcclxuICAgIGJ0bkxldmVsLmlubmVySFRNTCA9IHRleHRvRkxldmVsc1tncm91cF07XHJcbiAgICBjb25zdCBidG5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidG5UZXh0LmNsYXNzTGlzdC5hZGQoJ2J0bl9ncm91cF9fdGV4dCcpO1xyXG4gICAgYnRuVGV4dC5pbm5lckhUTUwgPSB0ZXh0T2ZEZXNjcmlwdGlvbnNbZ3JvdXBdO1xyXG4gICAgLy9idG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bl9ncm91cCcpO1xyXG4gICAgYnRuR3JvdXAuZGF0YXNldC5ncm91cCA9IGdyb3VwLnRvU3RyaW5nKCk7XHJcbiAgICAvL2J0bkdyb3VwLmlubmVySFRNTCA9IGBHcm91cCAke2dyb3VwICsgMX1gO1xyXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoYnRuVGV4dCk7XHJcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChidG5MZXZlbCk7XHJcbiAgICBidG5Hcm91cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgdGhpcy5yZW1vdmVBY3RpdmVGcm9tUGFnZUl0ZW0oKTtcclxuICAgICAgY29uc3QgYnRuczogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD4gfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bl9ncm91cCcpO1xyXG4gICAgICBidG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBVdGlsSW5zdC5jbGVhbkNvbnRhaW5lcldvcmRzKCk7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lcldvcmRzOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLXdvcmRzX19maWVsZCcpO1xyXG4gICAgICBpZiAoY29udGFpbmVyV29yZHMpIHtcclxuICAgICAgICBjb250YWluZXJXb3Jkcy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAvKndvcmRzLmZvckVhY2goKHdvcmQpID0+IHtcclxuICAgICAgICAgIGNvbnRhaW5lcldvcmRzLmFwcGVuZENoaWxkKENhcmRJbnN0LmNyZWF0ZUNhcmQod29yZCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIENhcmRJbnN0LmRpc2FibGVMaXN0ZW5lcnNUb0hhcmRXb3JkcygpO1xyXG4gICAgICAgIENhcmRJbnN0LmRpc2FibGVMaXN0ZW5lcnNUb0xlYXJuZWRXb3JkcygpOyovXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGJ0bkdyb3VwO1xyXG4gIH1cclxuICBwcml2YXRlIGNyZWF0ZVBhZ2luYXRpb25NZW51KCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGNvbnN0IHdyYXBwZXJQYWdpbmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3cmFwcGVyUGFnaW5hdGlvbi5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyLXBhZ2luYXRpb24nKTtcclxuICAgIGNvbnN0IG5hdmlnYXRpb25CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdmlnYXRpb25CYXIuYXJpYUxhYmVsID0gJ1BhZ2UgbmF2aWdhdGlvbiBleGFtcGxlJztcclxuICAgIGNvbnN0IHVMaXN0TmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICB1TGlzdE5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbicpO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzA7IGkrKykge1xyXG4gICAgICB1TGlzdE5hdmlnYXRpb24uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdFBhZ2VMaW5rV2l0aExpc3RlbmVyKGkpKTtcclxuICAgIH1cclxuICAgIG5hdmlnYXRpb25CYXIuYXBwZW5kQ2hpbGQodUxpc3ROYXZpZ2F0aW9uKTtcclxuICAgIHdyYXBwZXJQYWdpbmF0aW9uLmFwcGVuZENoaWxkKG5hdmlnYXRpb25CYXIpO1xyXG4gICAgcmV0dXJuIHdyYXBwZXJQYWdpbmF0aW9uO1xyXG4gIH1cclxuICBwcml2YXRlIGNyZWF0UGFnZUxpbmtXaXRoTGlzdGVuZXIocGFnZTogbnVtYmVyKTogSFRNTExJRWxlbWVudCB7XHJcbiAgICBjb25zdCBwYWdlSXRlbTogSFRNTExJRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBwYWdlSXRlbS5jbGFzc0xpc3QuYWRkKCdwYWdlLWl0ZW0nKTtcclxuICAgIHBhZ2VJdGVtLmRhdGFzZXQuaWQgPSBgJHtwYWdlfWA7XHJcbiAgICBjb25zdCBwYWdlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIHBhZ2VMaW5rLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtbGluaycpO1xyXG4gICAgcGFnZUxpbmsuaW5uZXJIVE1MID0gYCR7cGFnZX1gO1xyXG4gICAgcGFnZUl0ZW0uYXBwZW5kQ2hpbGQocGFnZUxpbmspO1xyXG4gICAgcGFnZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVtb3ZlQWN0aXZlRnJvbVBhZ2VJdGVtKCk7XHJcbiAgICAgIHBhZ2VJdGVtLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtaXRlbV9hY3RpdmUnKTtcclxuICAgICAgY29uc3Qgd29yZHM6IEFycmF5PFdvcmQ+ID0gYXdhaXQgQXBpSW5zdC5nZXRXb3Jkc1dpdGhQYWdlQW5kR3JvdXAoXHJcbiAgICAgICAgQXV0aEluc3QuZ2V0VG9rZW4oKSxcclxuICAgICAgICBwYWdlIC0gMSxcclxuICAgICAgICB0aGlzLmZpbmRBY3RpdmVCdG5PZkdyb3VwKClcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY29udGFpbmVyV29yZHM6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItd29yZHNfX2ZpZWxkJyk7XHJcbiAgICAgIGlmIChjb250YWluZXJXb3Jkcykge1xyXG4gICAgICAgIGNvbnRhaW5lcldvcmRzLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHdvcmRzLmZvckVhY2goKHdvcmQpID0+IHtcclxuICAgICAgICAgIC8vY29udGFpbmVyV29yZHMuaW5uZXJIVE1MICs9IENhcmRJbnN0LmNyZWF0ZUNhcmQod29yZCk7XHJcbiAgICAgICAgICBjb250YWluZXJXb3Jkcy5hcHBlbmRDaGlsZChDYXJkSW5zdC5jcmVhdGVDYXJkKHdvcmQpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBDYXJkSW5zdC5kaXNhYmxlTGlzdGVuZXJzVG9IYXJkV29yZHMoKTtcclxuICAgICAgICBDYXJkSW5zdC5kaXNhYmxlTGlzdGVuZXJzVG9MZWFybmVkV29yZHMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcGFnZUl0ZW07XHJcbiAgfVxyXG4gIHByaXZhdGUgcmVtb3ZlQWN0aXZlRnJvbVBhZ2VJdGVtKCkge1xyXG4gICAgY29uc3QgcGFnZUl0ZW1zOiBOb2RlTGlzdE9mPEhUTUxMSUVsZW1lbnQ+IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlLWl0ZW0nKTtcclxuICAgIGlmIChwYWdlSXRlbXMpIHtcclxuICAgICAgcGFnZUl0ZW1zLmZvckVhY2goKHBhZ2VJdGVtKSA9PiB7XHJcbiAgICAgICAgcGFnZUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncGFnZS1pdGVtX2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQ29udGFpbmVyV29yZHMoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgY29uc3QgY29udGFpbmVyV29yZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lcldvcmRzLmNsYXNzTmFtZSA9ICdjb250YWluZXItd29yZHMnO1xyXG4gICAgY29uc3QgY29udGFpbmVyV29yZHNGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyV29yZHNGaWVsZC5jbGFzc05hbWUgPSBgY29udGFpbmVyLXdvcmRzX19maWVsZGA7XHJcbiAgICBjb250YWluZXJXb3Jkcy5hcHBlbmRDaGlsZChjb250YWluZXJXb3Jkc0ZpZWxkKTtcclxuICAgIHJldHVybiBjb250YWluZXJXb3JkcztcclxuICB9XHJcbiAgcHJpdmF0ZSBmaW5kQWN0aXZlQnRuT2ZHcm91cCgpOiBudW1iZXIge1xyXG4gICAgY29uc3QgYnRuczogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuX2dyb3VwJyk7XHJcbiAgICBsZXQgcmVzdWx0ID0gJzAnO1xyXG4gICAgYnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgaWYgKGJ0bi5jbGFzc05hbWUuaW5jbHVkZXMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgaWYgKGJ0bi5kYXRhc2V0Lmdyb3VwKSB7XHJcbiAgICAgICAgICByZXN1bHQgPSBidG4uZGF0YXNldC5ncm91cDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KHJlc3VsdCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFwaUluc3QsIEF1dGhJbnN0IH0gZnJvbSAnLi4vLi4vaW5zdGFuY2VzL2luc3RhbmNlcyc7XHJcbmltcG9ydCB7IEJBU0VfVVJMLCBXb3JkLCBXb3JkRGljdGlvbmFyeSB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJkIHtcclxuICBwcml2YXRlIG1hcmtkb3duT2ZCdXR0b25zKHdvcmRJZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG1hcmtEb3duID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2J0bi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuX2hhcmRcIiBkYXRhLWlkPSR7d29yZElkfT7QodC70L7QttC90L7QtSDRgdC70L7QstC+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuX2xlYXJuZWRcIiBkYXRhLWlkPSR7d29yZElkfT7QlNC+0LHQsNCy0LjRgtGMINGB0LvQvtCy0L4g0Log0LjQt9GD0YfQtdC90L3Ri9C8PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgIHJldHVybiBtYXJrRG93bjtcclxuICB9XHJcbiAgcHJpdmF0ZSBjcmVhdGVCdXR0b25zV2l0aExpc3RlbmVycyh3b3JkSWQ6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGNvbnN0IGNhcmRCdG5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQnRuV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjYXJkX19idG4td3JhcHBlcicpO1xyXG4gICAgY2FyZEJ0bldyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVCdG5BZGRUb0hhcmQod29yZElkKSk7XHJcbiAgICBjYXJkQnRuV3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUJ0bkFkZFRvTGVhcm5lZCh3b3JkSWQpKTtcclxuICAgIHJldHVybiBjYXJkQnRuV3JhcHBlcjtcclxuICB9XHJcbiAgcHJpdmF0ZSBjcmVhdGVCdG5BZGRUb0hhcmQod29yZElkOiBzdHJpbmcpOiBIVE1MQnV0dG9uRWxlbWVudCB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG5faGFyZCcpO1xyXG4gICAgYnRuLmRhdGFzZXQuaWQgPSB3b3JkSWQ7XHJcbiAgICBidG4uaW5uZXJIVE1MID0gJ9Ch0LvQvtC20L3QvtC1INGB0LvQvtCy0L4nO1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuX2FjdGl2ZScpO1xyXG4gICAgICBhd2FpdCBBcGlJbnN0LmNyZWF0ZVdvcmRmb3JVc2VyKEF1dGhJbnN0LmdldFVzZXJJZCgpLCB3b3JkSWQsIEF1dGhJbnN0LmdldFRva2VuKCksICdoYXJkJywge30pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH1cclxuICBwcml2YXRlIGNyZWF0ZUJ0bkFkZFRvTGVhcm5lZCh3b3JkSWQ6IHN0cmluZyk6IEhUTUxCdXR0b25FbGVtZW50IHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bl9sZWFybmVkJyk7XHJcbiAgICBidG4uZGF0YXNldC5pZCA9IHdvcmRJZDtcclxuICAgIGJ0bi5pbm5lckhUTUwgPSAn0JjQt9GD0YfQtdC90L7QtSDRgdC70L7QstC+JztcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bl9hY3RpdmUnKTtcclxuICAgICAgYXdhaXQgQXBpSW5zdC5jcmVhdGVXb3JkZm9yVXNlcihBdXRoSW5zdC5nZXRVc2VySWQoKSwgd29yZElkLCBBdXRoSW5zdC5nZXRUb2tlbigpLCAnbGVhcm5lZCcsIHt9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtYXJrZG93bk9mU2VsZWN0ID0gYDxzZWxlY3QgY2xhc3M9XCJzZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+UGFnZSAxPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPlBhZ2UgMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5QYWdlIDM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+UGFnZSA0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPlBhZ2UgNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj5QYWdlIDY8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+UGFnZSA3PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPlBhZ2UgODwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj5QYWdlIDk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+UGFnZSAxMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+UGFnZSAxMTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjExXCI+UGFnZSAxMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEyXCI+UGFnZSAxMzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEzXCI+UGFnZSAxNDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE0XCI+UGFnZSAxNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE1XCI+UGFnZSAxNjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE2XCI+UGFnZSAxNzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE3XCI+UGFnZSAxODwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE4XCI+UGFnZSAxOTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE5XCI+UGFnZSAyMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwXCI+UGFnZSAyMTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIxXCI+UGFnZSAyMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIyXCI+UGFnZSAyMzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIzXCI+UGFnZSAyNDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PmA7XHJcbiAgcHVibGljIGNyZWF0ZUNhcmQod29yZDogV29yZCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGNvbnN0IG1hcmtkb3duT2ZDYXJkID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9faW5mb1wiIGRhdGEtaWQ9XCIke3dvcmQuaWR9XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19pbmZvX190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQodC70L7QstC+OiAke3dvcmQud29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0LXRgNC10LLQvtC0OiAke3dvcmQud29yZFRyYW5zbGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19tZWFuaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt3b3JkLnRleHRNZWFuaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3dvcmQudGV4dEV4YW1wbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3dvcmQudGV4dE1lYW5pbmdUcmFuc2xhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7d29yZC50ZXh0RXhhbXBsZVRyYW5zbGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19hdWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj7QodC70L7QstC+OjwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhdWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJHtBcGlJbnN0LmdldEJBU0VfVVJMKCl9LyR7d29yZC5hdWRpb31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPmF1ZGlvPC9jb2RlPiBlbGVtZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hdWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+0JDRg9C00LjQviDQv9GA0LjQvNC10YA6PC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGF1ZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIke0FwaUluc3QuZ2V0QkFTRV9VUkwoKX0vJHt3b3JkLmF1ZGlvRXhhbXBsZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPmF1ZGlvPC9jb2RlPiBlbGVtZW50LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hdWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7QkFTRV9VUkx9LyR7d29yZC5pbWFnZX1cIiBhbHQ9XCIke3dvcmQuaW1hZ2V9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICBjYXJkRGl2LmlubmVySFRNTCA9IG1hcmtkb3duT2ZDYXJkO1xyXG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbnNXaXRoQXV0aG9yaXphdGlvbkluZm8od29yZC5pZCkpO1xyXG4gICAgcmV0dXJuIGNhcmREaXY7XHJcbiAgfVxyXG4gIHByaXZhdGUgYnV0dG9uc1dpdGhBdXRob3JpemF0aW9uSW5mbyh3b3JkSWQ6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGlmIChBdXRoSW5zdC5jaGVja0F1dGhvcml6YXRpb24oKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVCdXR0b25zV2l0aExpc3RlbmVycyh3b3JkSWQpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgbm9BdXRoQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbm9BdXRoQnV0dG9ucy5pbm5lckhUTUwgPSAnJztcclxuICAgIHJldHVybiBub0F1dGhCdXR0b25zO1xyXG4gIH1cclxuICBwdWJsaWMgbG9hZExpc3RlbmVyc1RvQnV0dG9ucygpIHtcclxuICAgIHRoaXMubG9hZExpc3RlbmVyQWRkSGFyZFdvcmQoKTtcclxuICAgIHRoaXMubG9hZExpc3RlbmVyRGVsZXRlV29yZCgpO1xyXG4gICAgdGhpcy5sb2FkTGlzdGVuZXJMZWFybmVkV29yZCgpO1xyXG4gIH1cclxuICBwcml2YXRlIGxvYWRMaXN0ZW5lckFkZEhhcmRXb3JkKCkge1xyXG4gICAgY29uc3QgYnRuQWRkSGFyZFdvcmRzOiBOb2RlTGlzdE9mPEhUTUxCdXR0b25FbGVtZW50PiB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuX2hhcmQnKTtcclxuICAgIGlmIChidG5BZGRIYXJkV29yZHMpIHtcclxuICAgICAgYnRuQWRkSGFyZFdvcmRzLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG5fYWN0aXZlJyk7XHJcbiAgICAgICAgICBjb25zdCB3b3JkSWQgPSBidG4uZGF0YXNldC5pZDtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHdvcmRJZCk7XHJcbiAgICAgICAgICBpZiAod29yZElkKSB7XHJcbiAgICAgICAgICAgIEFwaUluc3QuY3JlYXRlV29yZGZvclVzZXIoQXV0aEluc3QuZ2V0VXNlcklkKCksIHdvcmRJZCwgQXV0aEluc3QuZ2V0VG9rZW4oKSwgJ2hhcmQnLCB7fSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgbG9hZExpc3RlbmVyRGVsZXRlV29yZCgpIHtcclxuICAgIGNvbnN0IGJ0bkRlbGV0ZVdvcmRzOiBOb2RlTGlzdE9mPEhUTUxCdXR0b25FbGVtZW50PiB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuX2RlbGV0ZScpO1xyXG4gICAgaWYgKGJ0bkRlbGV0ZVdvcmRzKSB7XHJcbiAgICAgIGJ0bkRlbGV0ZVdvcmRzLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgIGNvbnN0IHdvcmRJZCA9IGJ0bi5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0aW5nID0+ICcsIHdvcmRJZCk7XHJcbiAgICAgICAgICBpZiAod29yZElkKSB7XHJcbiAgICAgICAgICAgIEFwaUluc3QuZGVsZXRlV29yZGZvclVzZXIoQXV0aEluc3QuZ2V0VXNlcklkKCksIHdvcmRJZCwgQXV0aEluc3QuZ2V0VG9rZW4oKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIGxvYWRMaXN0ZW5lckxlYXJuZWRXb3JkKCkge1xyXG4gICAgY29uc3QgYnRuTGVhcm5lZFdvcmRzOiBOb2RlTGlzdE9mPEhUTUxCdXR0b25FbGVtZW50PiB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuX2xlYXJuZWQnKTtcclxuICAgIGlmIChidG5MZWFybmVkV29yZHMpIHtcclxuICAgICAgYnRuTGVhcm5lZFdvcmRzLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG5fYWN0aXZlJyk7XHJcbiAgICAgICAgICBjb25zdCB3b3JkSWQgPSBidG4uZGF0YXNldC5pZDtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdMZWFybmVkID0+ICcsIHdvcmRJZCk7XHJcbiAgICAgICAgICBpZiAod29yZElkKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYXdhaXQgdGhpcy5kaWN0LmNoZWNrV29yZEluRGljdCh3b3JkSWQpKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhd2FpdCB0aGlzLmNoZWNrV29yZEhhcmRPck5vdCh3b3JkSWQpKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhd2FpdCBBcGlJbnN0LmdldEFsbFdvcmRzT2ZVc2VyKEF1dGhJbnN0LmdldFVzZXJJZCgpLCBBdXRoSW5zdC5nZXRUb2tlbigpKSk7XHJcbiAgICAgICAgICAgIGF3YWl0IEFwaUluc3QuY3JlYXRlV29yZGZvclVzZXIoQXV0aEluc3QuZ2V0VXNlcklkKCksIHdvcmRJZCwgQXV0aEluc3QuZ2V0VG9rZW4oKSwgJ2xlYXJuZWQnLCB7fSk7XHJcbiAgICAgICAgICAgIC8vY29uc3QgcmVzID0gYXdhaXQgQXBpSW5zdC5nZXRXb3JkT2ZVc2VyQnlXb3JkSWQoQXV0aEluc3QuZ2V0VXNlcklkKCksIHdvcmRJZCwgQXV0aEluc3QuZ2V0VG9rZW4oKSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBhc3luYyBkaXNhYmxlTGlzdGVuZXJzVG9IYXJkV29yZHMoKSB7XHJcbiAgICBsZXQgd29yZHNPZlVzZXI6IFdvcmREaWN0aW9uYXJ5W10gPSBhd2FpdCBBcGlJbnN0LmdldEFsbFdvcmRzT2ZVc2VyKEF1dGhJbnN0LmdldFVzZXJJZCgpLCBBdXRoSW5zdC5nZXRUb2tlbigpKTtcclxuICAgIHdvcmRzT2ZVc2VyID0gd29yZHNPZlVzZXIuZmlsdGVyKCh3b3JkKSA9PiB3b3JkLmRpZmZpY3VsdHkgPT09ICdoYXJkJyk7XHJcbiAgICBjb25zdCBidG5zT2ZIYXJkV29yZHM6IE5vZGVMaXN0T2Y8SFRNTEJ1dHRvbkVsZW1lbnQ+IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5faGFyZCcpO1xyXG4gICAgaWYgKGJ0bnNPZkhhcmRXb3Jkcykge1xyXG4gICAgICBidG5zT2ZIYXJkV29yZHMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGJ0bi5kYXRhc2V0LmlkO1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuY2hlY2tJbmNsdWRlSWRPZldvcmRzRGljdGlvbmFyeSh3b3Jkc09mVXNlciwgaWQpKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuX2FjdGl2ZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBhc3luYyBkaXNhYmxlTGlzdGVuZXJzVG9MZWFybmVkV29yZHMoKSB7XHJcbiAgICBsZXQgd29yZHNPZlVzZXI6IFdvcmREaWN0aW9uYXJ5W10gPSBhd2FpdCBBcGlJbnN0LmdldEFsbFdvcmRzT2ZVc2VyKEF1dGhJbnN0LmdldFVzZXJJZCgpLCBBdXRoSW5zdC5nZXRUb2tlbigpKTtcclxuICAgIHdvcmRzT2ZVc2VyID0gd29yZHNPZlVzZXIuZmlsdGVyKCh3b3JkKSA9PiB3b3JkLmRpZmZpY3VsdHkgPT09ICdsZWFybmVkJyk7XHJcbiAgICBjb25zdCBidG5zT2ZIYXJkV29yZHM6IE5vZGVMaXN0T2Y8SFRNTEJ1dHRvbkVsZW1lbnQ+IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5fbGVhcm5lZCcpO1xyXG4gICAgaWYgKGJ0bnNPZkhhcmRXb3Jkcykge1xyXG4gICAgICBidG5zT2ZIYXJkV29yZHMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGJ0bi5kYXRhc2V0LmlkO1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuY2hlY2tJbmNsdWRlSWRPZldvcmRzRGljdGlvbmFyeSh3b3Jkc09mVXNlciwgaWQpKSB7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG5fYWN0aXZlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBjaGVja0luY2x1ZGVJZE9mV29yZHNEaWN0aW9uYXJ5KGFycjogV29yZERpY3Rpb25hcnlbXSwgaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgYXJyLmZvckVhY2goKHdvcmQpID0+IHtcclxuICAgICAgaWYgKHdvcmQud29yZElkID09PSBpZCkge1xyXG4gICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBpSW5zdCwgQXV0aEluc3QsIERpY3Rpb25hcnlJbnN0LCBVdGlsSW5zdCB9IGZyb20gJy4uLy4uL2luc3RhbmNlcy9pbnN0YW5jZXMnO1xyXG5pbXBvcnQgeyBCQVNFX1VSTCwgV29yZCwgV29yZERpY3Rpb25hcnkgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGljdGlvbmFyeSB7XHJcbiAgd29yZHNPZlVzZXI6IEFycmF5PFdvcmREaWN0aW9uYXJ5PjtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMud29yZHNPZlVzZXIgPSBbXTtcclxuICB9XHJcbiAgcHVibGljIGFzeW5jIGluaXQoKSB7XHJcbiAgICB0aGlzLmxvYWREaWN0aW9uYXJ5KCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgYXN5bmMgbG9hZERpY3Rpb25hcnkoKSB7XHJcbiAgICBVdGlsSW5zdC5jbGVhbk1haW5QYWdlKCk7XHJcbiAgICBVdGlsSW5zdC5BZGRDb250YWluZXJNYWluVG9NYWluUGFnZSgpO1xyXG4gICAgY29uc3QgbWFpbjogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1tYWluJyk7XHJcbiAgICBpZiAoIUF1dGhJbnN0LmNoZWNrQXV0aG9yaXphdGlvbigpKSB7XHJcbiAgICAgIGlmIChtYWluKSB7XHJcbiAgICAgICAgQXV0aEluc3QubG9hZExvZ2luKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobWFpbikge1xyXG4gICAgICBtYWluLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBtYWluLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlR3JvdXBCdG5zV2l0aExpc3RlbmVyKCkpO1xyXG4gICAgICBtYWluLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVHlwZUJ0bnNGb3JEaWN0aW9uYXJ5KCkpO1xyXG4gICAgICBtYWluLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQ29udGFpbmVyV29yZHMoKSk7XHJcbiAgICB9XHJcbiAgICAvL2F3YWl0IHRoaXMubG9hZENhcmRzT2ZIYXJkV29yZHNPZlVzZXIoKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBjcmVhdGVHcm91cEJ0bnNXaXRoTGlzdGVuZXIoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgY29uc3Qgd3JhcHBlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgd3JhcHBlckJ0bi5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyLWJ0bicpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgY29uc3QgZ3JvdXBCdG4gPSB0aGlzLmNyZWF0ZUdyb3VwQnRuKGkpO1xyXG4gICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgIGdyb3VwQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICAgIHdyYXBwZXJCdG4uYXBwZW5kQ2hpbGQoZ3JvdXBCdG4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdyYXBwZXJCdG47XHJcbiAgfVxyXG4gIHByaXZhdGUgY3JlYXRlR3JvdXBCdG4oZ3JvdXA6IG51bWJlcik6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGNvbnN0IHRleHRvRkxldmVscyA9IFsnQTEnLCAnQTInLCAnQjEnLCAnQjInLCAnQzEnLCAnQzInXTtcclxuICAgIGNvbnN0IHRleHRPZkRlc2NyaXB0aW9ucyA9IFtcclxuICAgICAgJzxiPkVhc3k8Yj4gMS02MDAnLFxyXG4gICAgICAnPGI+RWFzeTxiPiA2MDEtMTIwMCcsXHJcbiAgICAgICc8Yj5NZWRpdW08Yj4gMTIwMS0xODAwJyxcclxuICAgICAgJzxiPk1lZGl1bTxiPiAxODAxLTI0MDAnLFxyXG4gICAgICAnPGI+SGFyZDxiPiAyNDAxLTMwMDAnLFxyXG4gICAgICAnPGI+SGFyZDxiPiAzMDAxLTM2MDAnLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGJ0bkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBidG5MZXZlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnRuTGV2ZWwuY2xhc3NMaXN0LmFkZCgnYnRuX2dyb3VwX19sZXZlbCcpO1xyXG4gICAgYnRuTGV2ZWwuaW5uZXJIVE1MID0gdGV4dG9GTGV2ZWxzW2dyb3VwXTtcclxuICAgIGNvbnN0IGJ0blRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ0blRleHQuY2xhc3NMaXN0LmFkZCgnYnRuX2dyb3VwX190ZXh0Jyk7XHJcbiAgICBidG5UZXh0LmlubmVySFRNTCA9IHRleHRPZkRlc2NyaXB0aW9uc1tncm91cF07XHJcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG5fZ3JvdXAnKTtcclxuICAgIGJ0bkdyb3VwLmRhdGFzZXQuZ3JvdXAgPSBncm91cC50b1N0cmluZygpO1xyXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoYnRuVGV4dCk7XHJcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChidG5MZXZlbCk7XHJcbiAgICBidG5Hcm91cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgYnRuczogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD4gfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bl9ncm91cCcpO1xyXG4gICAgICBidG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBVdGlsSW5zdC5jbGVhbkNvbnRhaW5lcldvcmRzKCk7XHJcbiAgICAgIGNvbnN0IHR5cGVCdG5IYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR5cGUtYnRuc19faGFyZCcpO1xyXG4gICAgICBjb25zdCB0eXBlQnRuTGVhcm5lZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50eXBlLWJ0bnNfX2xlYXJuZWQnKTtcclxuICAgICAgaWYgKHR5cGVCdG5IYXJkICYmIHR5cGVCdG5MZWFybmVkKSB7XHJcbiAgICAgICAgdHlwZUJ0bkhhcmQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgdHlwZUJ0bkxlYXJuZWQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGJ0bkdyb3VwO1xyXG4gIH1cclxuICBwcml2YXRlIGNyZWF0ZUNvbnRhaW5lcldvcmRzKCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lcldvcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXJXb3Jkcy5jbGFzc05hbWUgPSAnY29udGFpbmVyLXdvcmRzJztcclxuICAgIGNvbnN0IGNvbnRhaW5lcldvcmRzRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lcldvcmRzRmllbGQuY2xhc3NOYW1lID0gYGNvbnRhaW5lci13b3Jkc19fZmllbGRgO1xyXG4gICAgY29udGFpbmVyV29yZHMuYXBwZW5kQ2hpbGQoY29udGFpbmVyV29yZHNGaWVsZCk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyV29yZHM7XHJcbiAgfVxyXG4gIHByaXZhdGUgY3JlYXRlVHlwZUJ0bnNGb3JEaWN0aW9uYXJ5KCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGNvbnN0IHdyYXBwZXJUeXBlQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgd3JhcHBlclR5cGVCdG5zLmNsYXNzTGlzdC5hZGQoJ3R5cGUtYnRucycpO1xyXG4gICAgY29uc3QgYnRuVHlwZUhhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ0blR5cGVIYXJkLmNsYXNzTGlzdC5hZGQoJ3R5cGUtYnRuc19faGFyZCcpO1xyXG4gICAgYnRuVHlwZUhhcmQuaW5uZXJIVE1MID0gJ9Ch0LvQvtC20L3Ri9C1INGB0LvQvtCy0LAnO1xyXG5cclxuICAgIGJ0blR5cGVIYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHlwZS1idG5zX19sZWFybmVkJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBidG5UeXBlSGFyZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgYXdhaXQgdGhpcy5sb2FkQ2FyZHNPZlVzZXJXaXRoVHlwZSh0aGlzLmdldEN1cnJlbnRBY3RpdmVHcm91cCgpLCAnaGFyZCcpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBidG5UeXBlTGVhcm5lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnRuVHlwZUxlYXJuZWQuY2xhc3NMaXN0LmFkZCgndHlwZS1idG5zX19sZWFybmVkJyk7XHJcbiAgICBidG5UeXBlTGVhcm5lZC5pbm5lckhUTUwgPSAn0JjQt9GD0YfQtdC90L3Ri9C1INGB0LvQvtCy0LAnO1xyXG5cclxuICAgIGJ0blR5cGVMZWFybmVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHlwZS1idG5zX19oYXJkJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBidG5UeXBlTGVhcm5lZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgYXdhaXQgdGhpcy5sb2FkQ2FyZHNPZlVzZXJXaXRoVHlwZSh0aGlzLmdldEN1cnJlbnRBY3RpdmVHcm91cCgpLCAnbGVhcm5lZCcpO1xyXG4gICAgfSk7XHJcbiAgICB3cmFwcGVyVHlwZUJ0bnMuYXBwZW5kQ2hpbGQoYnRuVHlwZUhhcmQpO1xyXG4gICAgd3JhcHBlclR5cGVCdG5zLmFwcGVuZENoaWxkKGJ0blR5cGVMZWFybmVkKTtcclxuICAgIHJldHVybiB3cmFwcGVyVHlwZUJ0bnM7XHJcbiAgfVxyXG4gIHByaXZhdGUgYXN5bmMgbG9hZENhcmRzT2ZVc2VyV2l0aFR5cGUoZ3JvdXA6IG51bWJlciwgdHlwZSA9ICdoYXJkJykge1xyXG4gICAgY29uc3QgY29udGFpbmVyV29yZHM6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItd29yZHNfX2ZpZWxkJyk7XHJcbiAgICBsZXQgd29yZHM6IEFycmF5PFdvcmREaWN0aW9uYXJ5PiA9IGF3YWl0IEFwaUluc3QuZ2V0QWxsV29yZHNPZlVzZXIoQXV0aEluc3QuZ2V0VXNlcklkKCksIEF1dGhJbnN0LmdldFRva2VuKCkpO1xyXG4gICAgaWYgKHR5cGUgPT09ICdoYXJkJykge1xyXG4gICAgICB3b3JkcyA9IHdvcmRzLmZpbHRlcigod29yZCkgPT4gd29yZC5kaWZmaWN1bHR5ID09PSAnaGFyZCcpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGVhcm5lZCcpIHtcclxuICAgICAgd29yZHMgPSB3b3Jkcy5maWx0ZXIoKHdvcmQpID0+IHdvcmQuZGlmZmljdWx0eSA9PT0gJ2xlYXJuZWQnKTtcclxuICAgIH1cclxuICAgIGlmIChjb250YWluZXJXb3Jkcykge1xyXG4gICAgICBjb250YWluZXJXb3Jkcy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgd29yZHMuZm9yRWFjaChhc3luYyAodykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdvcmQ6IFdvcmQgPSBhd2FpdCBBcGlJbnN0LmdldFdvcmRCeUlkKHcud29yZElkKTtcclxuICAgICAgICBpZiAod29yZC5ncm91cCA9PT0gZ3JvdXApIHtcclxuICAgICAgICAgIGNvbnRhaW5lcldvcmRzLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQ2FyZEluRGljdGlvbmFyeSh3b3JkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBjcmVhdGVDYXJkSW5EaWN0aW9uYXJ5KHdvcmQ6IFdvcmQpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICBjb25zdCBjYXJkRGl2OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICBjYXJkRGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9faW5mb1wiIGRhdGEtaWQ9XCIke3dvcmQuaWR9XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2luZm9fX3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHQu9C+0LLQvjogJHt3b3JkLndvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QtdGA0LXQstC+0LQ6ICR7d29yZC53b3JkVHJhbnNsYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fbWVhbmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt3b3JkLnRleHRNZWFuaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt3b3JkLnRleHRFeGFtcGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt3b3JkLnRleHRNZWFuaW5nVHJhbnNsYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt3b3JkLnRleHRFeGFtcGxlVHJhbnNsYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fYXVkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+0KHQu9C+0LLQvjo8L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXVkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7QXBpSW5zdC5nZXRCQVNFX1VSTCgpfS8ke3dvcmQuYXVkaW99XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29kZT5hdWRpbzwvY29kZT4gZWxlbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXVkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPtCQ0YPQtNC40L4g0L/RgNC40LzQtdGAOjwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhdWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJHtBcGlJbnN0LmdldEJBU0VfVVJMKCl9LyR7d29yZC5hdWRpb0V4YW1wbGV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29kZT5hdWRpbzwvY29kZT4gZWxlbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXVkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2ltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke0JBU0VfVVJMfS8ke3dvcmQuaW1hZ2V9XCIgYWx0PVwiJHt3b3JkLmltYWdlfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVDYXJkQnRuV3JhcHBlcih3b3JkLmlkKSk7XHJcbiAgICByZXR1cm4gY2FyZERpdjtcclxuICB9XHJcbiAgcHJpdmF0ZSBjcmVhdGVDYXJkQnRuV3JhcHBlcih3b3JkSWQ6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGNvbnN0IGNhcmRCdG5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQnRuV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjYXJkX19idG4td3JhcHBlcicpO1xyXG4gICAgY2FyZEJ0bldyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVCdG5XaXRoRGVsZXRlKHdvcmRJZCkpO1xyXG4gICAgcmV0dXJuIGNhcmRCdG5XcmFwcGVyO1xyXG4gIH1cclxuICBwcml2YXRlIGNyZWF0ZUJ0bldpdGhEZWxldGUod29yZElkOiBzdHJpbmcpOiBIVE1MQnV0dG9uRWxlbWVudCB7XHJcbiAgICBjb25zdCBidG5EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ0bkRlbGV0ZS5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICAgIGJ0bkRlbGV0ZS5jbGFzc0xpc3QuYWRkKCdidG5fZGVsZXRlJyk7XHJcbiAgICBidG5EZWxldGUuZGF0YXNldC5pZCA9IHdvcmRJZDtcclxuICAgIGJ0bkRlbGV0ZS5pbm5lckhUTUwgPSAn0JLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINGB0LvQvtCy0L4nO1xyXG4gICAgYnRuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBidG5EZWxldGUuY2xhc3NMaXN0LmFkZCgnYnRuX2FjdGl2ZScpO1xyXG4gICAgICBhd2FpdCBBcGlJbnN0LmRlbGV0ZVdvcmRmb3JVc2VyKEF1dGhJbnN0LmdldFVzZXJJZCgpLCB3b3JkSWQsIEF1dGhJbnN0LmdldFRva2VuKCkpO1xyXG4gICAgICBhd2FpdCBEaWN0aW9uYXJ5SW5zdC5pbml0KCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBidG5EZWxldGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0VXNlcnNXb3Jkcyh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8V29yZERpY3Rpb25hcnlbXT4ge1xyXG4gICAgY29uc3QgZGF0YTogUHJvbWlzZTxXb3JkRGljdGlvbmFyeVtdPiA9IEFwaUluc3QuZ2V0QWxsV29yZHNPZlVzZXIodXNlcklkLCBBdXRoSW5zdC5nZXRUb2tlbigpKTtcclxuICAgIGRhdGEudGhlbigod29yZHMpID0+IHtcclxuICAgICAgd29yZHMuZm9yRWFjaCgodykgPT4ge1xyXG4gICAgICAgIHRoaXMud29yZHNPZlVzZXIucHVzaCh3KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhd2FpdCBkYXRhO1xyXG4gIH1cclxuICBwdWJsaWMgYXN5bmMgY2hlY2tXb3JkSW5EaWN0KHdvcmRJZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5nZXRVc2Vyc1dvcmRzKEF1dGhJbnN0LmdldFVzZXJJZCgpKTtcclxuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgIGRhdGEuZm9yRWFjaCgod29yZCkgPT4ge1xyXG4gICAgICBpZiAod29yZC53b3JkSWQgPT09IHdvcmRJZCkge1xyXG4gICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGF3YWl0IHJlc3VsdDtcclxuICB9XHJcbiAgcHJpdmF0ZSBnZXRDdXJyZW50QWN0aXZlR3JvdXAoKTogbnVtYmVyIHtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgY29uc3QgYnRuczogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD4gfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bl9ncm91cCcpO1xyXG4gICAgYnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgY29uc3QgZ3JvdXA6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGJ0bi5kYXRhc2V0Lmdyb3VwO1xyXG4gICAgICAgIGlmIChncm91cCkge1xyXG4gICAgICAgICAgcmVzdWx0ID0gcGFyc2VJbnQoZ3JvdXApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVXRpbCB7XHJcbiAgcHVibGljIGNsZWFuTWFpbigpIHtcclxuICAgIGNvbnN0IG1haW46IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItbWFpbicpO1xyXG4gICAgaWYgKG1haW4pIHtcclxuICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIGNsZWFuTWFpblBhZ2UoKSB7XHJcbiAgICBjb25zdCBtYWluUGFnZTogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcGFnZScpO1xyXG4gICAgaWYgKG1haW5QYWdlKSB7XHJcbiAgICAgIG1haW5QYWdlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgY2xlYW5Db250YWluZXJXb3JkcygpIHtcclxuICAgIGNvbnN0IHdvcmRzRmllbGQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItd29yZHNfX2ZpZWxkJyk7XHJcbiAgICBpZiAod29yZHNGaWVsZCkge1xyXG4gICAgICB3b3Jkc0ZpZWxkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgQWRkQ29udGFpbmVyTWFpblRvTWFpblBhZ2UoKSB7XHJcbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXBhZ2UnKTtcclxuICAgIGlmIChtYWluUGFnZSkge1xyXG4gICAgICBjb25zdCBjb250YWluZXJNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnRhaW5lck1haW4uY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLW1haW4nKTtcclxuICAgICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQoY29udGFpbmVyTWFpbik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFwaSB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXBpL2FwaSc7XHJcbmltcG9ydCB7IEF1dGggfSBmcm9tICcuLi9jb21wb25lbnRzL2F1dGgvYXV0aCc7XHJcbmltcG9ydCB7IEJvb2sgfSBmcm9tICcuLi9jb21wb25lbnRzL2Jvb2svYm9vayc7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NhcmQvY2FyZCc7XHJcbmltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tICcuLi9jb21wb25lbnRzL2RpY3Rpb25hcnkvZGljdGlvbmFyeSc7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi9jb21wb25lbnRzL3V0aWwvdXRpbCc7XHJcbmltcG9ydCB7IE1haW5QYWdlIH0gZnJvbSAnLi4vcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZSc7XHJcbmltcG9ydCB7IEFib3V0UGFnZSB9IGZyb20gJy4uL3BhZ2VzL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZSc7XHJcbmltcG9ydCB7IEF1ZGlvR2FtZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXVkaW9nYW1lL2F1ZGlvZ2FtZSc7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4uL2FwcCc7XHJcbi8qKioqKioqKioqKtCh0YPRidC90L7RgdGC0LgqKioqKioqKioqKioqICovXHJcbmV4cG9ydCBjb25zdCBBcHBJbnN0ID0gbmV3IEFwcCgpO1xyXG5leHBvcnQgY29uc3QgQXBpSW5zdCA9IG5ldyBBcGkoKTtcclxuZXhwb3J0IGNvbnN0IEJvb2tJbnN0ID0gbmV3IEJvb2soKTtcclxuZXhwb3J0IGNvbnN0IERpY3Rpb25hcnlJbnN0ID0gbmV3IERpY3Rpb25hcnkoKTtcclxuZXhwb3J0IGNvbnN0IEF1dGhJbnN0ID0gbmV3IEF1dGgoKTtcclxuZXhwb3J0IGNvbnN0IENhcmRJbnN0ID0gbmV3IENhcmQoKTtcclxuZXhwb3J0IGNvbnN0IFV0aWxJbnN0ID0gbmV3IFV0aWwoKTtcclxuZXhwb3J0IGNvbnN0IEF1ZGlvR2FtZUluc3QgPSBuZXcgQXVkaW9HYW1lKCk7XHJcbi8qKioqKioqKlBhZ2VzKioqKioqKioqICovXHJcbmV4cG9ydCBjb25zdCBNYWluUGFnZUluc3QgPSBuZXcgTWFpblBhZ2UoKTtcclxuZXhwb3J0IGNvbnN0IEFib3V0UGFnZUluc3QgPSBuZXcgQWJvdXRQYWdlKCk7XHJcbiIsImltcG9ydCB7IFV0aWxJbnN0IH0gZnJvbSAnLi4vLi4vaW5zdGFuY2VzL2luc3RhbmNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXRQYWdlIHtcclxuICBwdWJsaWMgY3JlYXRlQWJvdXRQYWdlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJhYm91dC1wYWdlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0LXBhZ2VfX2luZm9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1wYWdlX19pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9hYm91dC5qcGdcIiBhbHQ9XCJhYm91dC1pbWdcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiYWJvdXQtcGFnZV9fdGl0bGVcIj5BbGV4IE4uIDIwMjI8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0LXBhZ2VfX3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9naXRodWIuY29tL3Zvc2hvZHpcIj48c3Bhbj5naXRodWIuY29tL3Zvc2hvZHo8L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgfVxyXG4gIHB1YmxpYyBsb2FkQWJvdXRQYWdlKCkge1xyXG4gICAgVXRpbEluc3QuY2xlYW5NYWluUGFnZSgpO1xyXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1wYWdlJyk7XHJcbiAgICBpZiAobWFpblBhZ2UpIHtcclxuICAgICAgbWFpblBhZ2UuaW5uZXJIVE1MID0gdGhpcy5jcmVhdGVBYm91dFBhZ2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE1haW5QYWdlIHtcclxuICBwdWJsaWMgc3RhcnRNYWluUGFnZSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbWFya0Rvd25NYWluUGFnZSA9IGA8ZGl2IGNsYXNzPVwibWFpbi1wYWdlX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tcGFnZV9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUlNMYW5nIC0g0L/RgNC40LvQvtC20LXQvdC40LUg0LTQu9GPINC40LfRg9GH0LXQvdC40Y8g0LDQvdCz0LvQuNC50YHQutC+0LPQviDRj9C30YvQutCwIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0KPRh9C10LHQvdC40Log0YEgMzYwMCDQvdCw0LjQsdC+0LvQtdC1INGD0L/QvtGC0YDQtdCx0LvRj9C10LzRi9C5INGB0LvQvtCy0LDQvNC4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0LvQvtCy0LDRgNGMLCDQuCDQsNGD0LTQuNC+0LjQs9GA0LAg0LTQu9GPINC30LDQutGA0LXQv9C70LXQvdC40Y9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0g0LLRgdC1INGN0YLQviDRgtGLINC90LDQudC00LXRiNGMINCyIFJTTGFuZy48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tcGFnZV9faW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL21haW4ucG5nXCIgYWx0PVwibWFpbl9fcG5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgcmV0dXJuIG1hcmtEb3duTWFpblBhZ2U7XHJcbiAgfVxyXG4gIHB1YmxpYyBsb2FkTWFpblBhZ2UoKSB7XHJcbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXBhZ2UnKTtcclxuICAgIGlmIChtYWluUGFnZSkge1xyXG4gICAgICBtYWluUGFnZS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgbWFpblBhZ2UuaW5uZXJIVE1MID0gdGhpcy5zdGFydE1haW5QYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBCQVNFX1VSTCA9ICdodHRwczovL2FwaS1ycy1sYW5nLmhlcm9rdWFwcC5jb20nO1xyXG5leHBvcnQgdHlwZSBXb3JkID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgZ3JvdXA6IG51bWJlcjtcclxuICBwYWdlOiBudW1iZXI7XHJcbiAgd29yZDogc3RyaW5nO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbiAgYXVkaW86IHN0cmluZztcclxuICBhdWRpb01lYW5pbmc6IHN0cmluZztcclxuICBhdWRpb0V4YW1wbGU6IHN0cmluZztcclxuICB0ZXh0TWVhbmluZzogc3RyaW5nO1xyXG4gIHRleHRFeGFtcGxlOiBzdHJpbmc7XHJcbiAgdHJhbnNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHdvcmRUcmFuc2xhdGU6IHN0cmluZztcclxuICB0ZXh0TWVhbmluZ1RyYW5zbGF0ZTogc3RyaW5nO1xyXG4gIHRleHRFeGFtcGxlVHJhbnNsYXRlOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBBdXRoVXNlciA9IHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgdG9rZW46IHN0cmluZztcclxuICByZWZyZXNoVG9rZW46IHN0cmluZztcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn07XHJcbmV4cG9ydCB0eXBlIFdvcmREaWN0aW9uYXJ5ID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgZGlmZmljdWx0eTogc3RyaW5nO1xyXG4gIHdvcmRJZDogc3RyaW5nO1xyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQXBwSW5zdCB9IGZyb20gJy4vaW5zdGFuY2VzL2luc3RhbmNlcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XHJcbkFwcEluc3QubG9hZE1haW4oKTtcclxuQXBwSW5zdC5sb2FkQXBwKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==