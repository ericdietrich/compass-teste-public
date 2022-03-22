export const api = {
  baseUrl: "https://api.github.com",
  loginUrl: `https://github.com/login/oauth`
}

export function LOGIN () {
  return {
    url: `${api.loginUrl}/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`,
    options: {
      METHOD: 'GET',
      headers: {
        'User-Agent': 'request'
      }
    }
  }
}

export function  VALIDATE_LOGIN (code) {
  return {
    url: `https://github.com/login/oauth/access_token`,
    options: {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_ID_SECRET,
        code: code,
        Accept: 'json'
      }),
    }
  }
}

export function USER_SEARCH (query) {
  return {
    url: `${api.baseUrl}/search/users?q=${query}`,
    options: {
      method: "GET"
    }
  }
}

export function REPO_SEARCH (query) {
  return {
    url: `${api.baseUrl}/search/repositories?q=${query}`,
    options: {
      method: "GET"
    },
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('github_token'),
    }
  }
}

export function USER_REPO (user) {
  return {
    url: `${api.baseUrl}/users/${user}/repos`,
    options: {
      method: "GET"
    },
    headers: {
      Authorization: 'token ' + window.localStorage.getItem('github_token'),
    }
  }
}

export function USER_STARRED (user) {
  return {
    url: `${api.baseUrl}/users/${user}/starred`,
    options: {
      method: "GET"
    },
    headers: {
      Authorization: 'token  ' + window.localStorage.getItem('github_token'),
    }
  }
}