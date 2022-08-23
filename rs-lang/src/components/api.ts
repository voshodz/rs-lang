const BASE = 'https://api-rs-lang.herokuapp.com';
//var token = '1';
//var userId = '';

export class Api {
  /**************Create User and Login***************** */
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
    }).then((res) => {
      if (res.status !== 200) {
        throw new Error(`Incorrect createUser with status ${res.status}`);
      }
      return res.json();
    });
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
    }).then((res) => {
      if (res.status !== 200) {
        throw new Error(`Incorrect signin with status ${res.status}`);
      }
      return res.json();
    });
  };
  public loginCustomUser = async (email: string, password: string) => {
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
  /***********API with UserId************* */
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
  /***************Users/Words***************** */
  static getAllWordsOfUser = (userId: string, token: string) => {
    return fetch(`${BASE}/users/${userId}/words`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  };
  createWordforUser = async (userId: string, wordId: string, token: string, difficulty: string, optional: any) => {
    const body = {
      difficulty,
      optional,
    };
    const res = await fetch(`${BASE}/users/${userId}/words/${wordId}`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  };
  deleteWordforUser = async (userId: string, wordId: string, token: string) => {
    return fetch(`${BASE}/users/${userId}/words/${wordId}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log('SUCCESSS!!');
      }
      //console.log(object);
    });
  };
  getWordOfUserByWordId = async (userId: string, wordId: string, token: string) => {
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

/*
const getUserWords = (wordId, token) => {
  return fetch(`BASE/${wordId}/words`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(res => res.json());
};
const getWithUserIdWords = (userId, token) => {
  return fetch(`${BASE}/users/${userId}/words`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(res => res.json());
};

const getWords = (token) => {
  return fetch(`${BASE}/words/`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(res => res.json());
};
const getWordsWithPage = (token, page, group) => {
  return fetch(`${BASE}/words?page=${page}&group=${group}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(res => res.json());
};

//loginUser({ "email": "hello@user.com", "password": "Gfhjkm_123" });

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  console.log('Here');
  createUser({ "email": "hello@user13.com", "password": "passpass1313" });
});
const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', () => {
  console.log('Here btn2');
  console.log(token);
  console.log(' => ', userId);
  loginUser({ "email": "hello@user13.com", "password": "passpass1313" });
});

const btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', async() => {
  console.log('Here 3', userId);
  console.log(await getWords(token));
});

const btn4 = document.querySelector('.btn4');
btn4.addEventListener('click', async() => {
  console.log('Here 4', userId);
  //console.log('1: => ', await getWordsWithPage(token, 1, 0));
 // console.log('2: => ', await getWordsWithPage(token, 2, 1));
 for (let i = 20; i < 35; i++) {
  console.log(`${i}: => `, await getWordsWithPage(token, i, 0));
 };
});const BASE = 'https://api-rs-lang.herokuapp.com';
var token = '1';
var userId = '';

const createUser = async user => {
  const rawResponse = await fetch(`${BASE}/users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const content = await rawResponse.json();

  console.log(content);
};

const loginUser = async user => {
  const rawResponse = await fetch(`${BASE}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const content = await rawResponse.json();
  token = content.token;
  userId = content.userId;
  console.log(content);
};

const getUserWords = (wordId, token) => {
  return fetch(`BASE/${wordId}/words`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(res => res.json());
};
const getWithUserIdWords = (userId, token) => {
  return fetch(`${BASE}/users/${userId}/words`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(res => res.json());
};

const getWords = (token) => {
  return fetch(`${BASE}/words/`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(res => res.json());
};

//loginUser({ "email": "hello@user.com", "password": "Gfhjkm_123" });

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  console.log('Here');
  createUser({ "email": "hello@user13.com", "password": "passpass1313" });
});
const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', () => {
  console.log('Here btn2');
  console.log(token);
  console.log(' => ', userId);
  loginUser({ "email": "hello@user13.com", "password": "passpass1313" });
});

const btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', async() => {
  console.log('Here 3', userId);
  console.log(await getWords(token));
});

const btn4 = document.querySelector('.btn4');
btn4.addEventListener('click', async() => {
  console.log('Here 4', userId);
  //console.log('1: => ', await getWordsWithPage(token, 1, 0));
 // console.log('2: => ', await getWordsWithPage(token, 2, 1));
 for (let i = 20; i < 35; i++) {
  console.log(`${i}: => `, await getWordsWithPage(token, i, 0));
 };
});
*/
