export default class SessionStorage {
  storage;

  constructor(storage) {
    this.storage = storage || window.sessionStorage;
  }

  getItemSync(name) {
    let session = this.storage?.getItem(name);
    if (!session) {
      return null;
    }
    return JSON.parse(session);
  }

  getItem(name) {
    return (
      (new Promise() < string) |
      (null >
        ((resolve, reject) => {
          const value = this.storage?.getItem(name);
          if (value) {
            resolve(value);
          }
          resolve(null);
        }))
    );
  }

  getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName.trim() === name) {
        return cookieValue;
      }
    }
    return null;
  }

  setCookie(name, value, expirationDays) {
    const date = new Date();
    date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }

  removeCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }

  removeItem(name) {
    return new Promise((resolve, reject) => {
      this.storage?.removeItem(name);
      resolve();
    });
  }

  removeItemSync(name) {
    return this.storage?.removeItem(name);
  }

  clear() {
    return new Promise((resolve, reject) => {
      this.storage?.clear();
      resolve();
    });
  }

  clearSync() {
    return this.storage?.clear();
  }

  setItem(name, value) {
    return new Promise((resolve, reject) => {
      this.storage?.setItem(name, value);
      resolve();
    });
  }

  setItemSync(name, value) {
    return this.storage?.setItem(name, value);
  }

  deleteAllCookies() {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
  }
}
