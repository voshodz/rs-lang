const BASE = 'https://api-rs-lang.herokuapp.com';
//var token = '1';
//var userId = '';

export class Api {
  /**********Api of user*********** */
  public createUser = async (email: string, password: string) => {
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
  };
  public loginUser = async (email: string, password: string) => {
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
  };
  public getUser = (token: string, id: string) =>
    fetch(`${BASE}/users/${id}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  public deleteUser = (token: string, id: string) =>
    fetch(`${BASE}/users/${id}`, {
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
  public getNewUserToken = (token: string, id: string) =>
    fetch(`${BASE}/users/${id}/tokens`, {
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
  public getWordById = (wordId: string) => {
    return fetch(`${BASE}/words/${wordId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  };
  public getWords = (token: string) =>
    fetch(`${BASE}/words/`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  public getWordsWithPageAndGroup = (token: string, page: number, group: number) => {
    return fetch(`${BASE}/words?page=${page}&group=${group}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  };
  public createWordforUser = async (
    userId: string,
    wordId: string,
    token: string,
    difficulty: string,
    optional: any // added later optional settings
  ) => {
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
  };
  public deleteWordforUser = async (userId: string, wordId: string, token: string) => {
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
  };
  public getAllWordsOfUser = (userId: string, token: string) => {
    return fetch(`${BASE}/users/${userId}/words`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  };
  public getWordOfUserByWordId = async (userId: string, wordId: string, token: string) => {
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
  };
}
