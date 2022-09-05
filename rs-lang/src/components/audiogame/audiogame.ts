import { ApiInst, UtilInst } from '../../instances/instances';
import { Word } from '../../types';
import './audiogame.scss';

export class AudioGame {
  private rightAnswers: Word[];
  private wrongAnswers: Word[];
  private AudioIcon = `<svg class="audio-game__svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z">
                  </path></svg>`;
  constructor() {
    this.rightAnswers = [];
    this.wrongAnswers = [];
  }
  public getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
  public loadAudioGameFromMainPage() {
    //console.log('loading audio game');
    UtilInst.cleanMainPage();
    const mainPage = document.querySelector('.main-page');
    if (mainPage) {
      mainPage.appendChild(this.loadAudioGameField());
      this.loadSelectOfLevel();
    }
  }
  public async loadAudioGameFromBook(group: number, page: number) {
    UtilInst.cleanMainPage();
    const mainPage = document.querySelector('.main-page');
    if (mainPage) {
      mainPage.appendChild(this.loadAudioGameField());
      const words = await ApiInst.getWordsWithPageAndGroupNoAuth(page, group);
      this.loadAudioGameWithWords(words);
    }
  }
  private getAnswers() {
    console.log(this.rightAnswers);
    console.log(this.wrongAnswers);
    //this.rightAnswers = [];
    //this.wrongAnswers = [];
    const audioGame: HTMLDivElement | null = document.querySelector('.audio-game');
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
          audio.src = `${ApiInst.getBASE_URL()}/${ans.audio}`;
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
          audio.src = `${ApiInst.getBASE_URL()}/${ans.audio}`;
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
  private loadAudioGameField(): HTMLDivElement {
    const audioGame = document.createElement('div');
    audioGame.classList.add('audio-game');
    return audioGame;
  }
  private loadSelectOfLevel() {
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
    audioGameSubmitButton.addEventListener('click', async () => {
      const audioGameSelect: HTMLSelectElement | null = document.querySelector('.audio-game__select');
      if (audioGameSelect) {
        const level = audioGameSelect.value;

        const words = await ApiInst.getWordsWithPageAndGroupNoAuth(this.getRandomInt(29), parseInt(level));
        //console.log(this.randomWords(words[0], words));
        this.loadAudioGameWithWords(words);
      }
    });
    audioGameLevel.appendChild(audioGameSubmitButton);
    if (audioGame) {
      audioGame.appendChild(audioGameLevel);
    }
  }

  private loadAudioGameWithWords(words: Word[]) {
    const audioGame: HTMLDivElement | null = document.querySelector('.audio-game');
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
  private loadNextSection(nextWord: number, words: Word[]) {
    const audioGameWrapper = document.querySelector('.audio-game__wraper');
    if (audioGameWrapper) {
      audioGameWrapper.innerHTML = '';
      const audioGame: HTMLDivElement | null = document.querySelector('.audio-game');
      if (audioGame) {
        audioGameWrapper.appendChild(this.loadCurrentAudioSection(words[nextWord], words));
      }
    }
  }
  private loadFinishSection() {
    const audioGame: HTMLDivElement | null = document.querySelector('.audio-game');
    if (audioGame) {
      audioGame.innerHTML = '';
      this.getAnswers();
    }
  }
  private loadCurrentAudioSection(currentWord: Word, words: Word[]): HTMLDivElement {
    const audioGameWrapper = document.createElement('div');
    audioGameWrapper.classList.add('audio-game__wraper');
    audioGameWrapper.appendChild(this.loadAudioFromWord(currentWord));
    audioGameWrapper.appendChild(this.loadOptionsField(currentWord, words));
    return audioGameWrapper;
  }
  private loadOptionsField(currentWord: Word, words: Word[]): HTMLDivElement {
    const shuffledArray: Word[] = this.randomWords(currentWord, words);
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
  private showTrueAnswer(currentWord: Word, wordId: string) {
    /********Right answer section******* */
    const optionsOfWords: NodeListOf<HTMLDivElement> | null = document.querySelectorAll('.audio-game__options__word');
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
  private loadAudioFromWord(word: Word): HTMLDivElement {
    const audioIcon = document.createElement('div');
    audioIcon.classList.add('audio-game__icon');
    audioIcon.innerHTML += this.AudioIcon;

    const audioSource: HTMLAudioElement = new Audio(`${ApiInst.getBASE_URL()}/${word.audio}`);
    audioIcon.dataset.audioSrc = `${ApiInst.getBASE_URL()}/${word.audio}`;
    // document.removeEventListener('keydown', this.listenerToKey, false);

    audioIcon.addEventListener('click', () => {
      audioSource.play();
    });
    document.addEventListener('keydown', (e: any) => {
      if (e.code === 'Space') {
        this.loadListenerToSpace();
      }
    });

    return audioIcon;
  }
  private loadListenerToSpace() {
    const audioIcon: HTMLDivElement | null = document.querySelector('.audio-game__icon');
    if (audioIcon) {
      const audioSrc = audioIcon.dataset.audioSrc;
      if (audioSrc) {
        const audio = new Audio(audioSrc);
        audio.play();
      }
    }
  }
  private randomWords(currentWord: Word, words: Word[]): Word[] {
    const resultArray: Word[] = [];
    const arrayOfRandomNumbers: number[] = [];
    resultArray.push(currentWord);
    while (resultArray.length < 5) {
      const randNumb = this.getRandomInt(19);
      //console.log('rand number => ', randNumb);
      if (words[randNumb].id !== currentWord.id && !arrayOfRandomNumbers.includes(randNumb)) {
        arrayOfRandomNumbers.push(randNumb);
        resultArray.push(words[randNumb]);
      }
    }
    return resultArray.sort(() => Math.random() - 0.5); //shuffle sort
  }
}
