export class JWTAuthStrategy {
  constructor(token) {
    this._accessToken = token.accessToken;
    this._refreshToken = token.refreshToken;
  }

  getAuthData() {
    return {
      accessToken: this._accessToken,
      refreshToken: this._refreshToken
    };
  }
}