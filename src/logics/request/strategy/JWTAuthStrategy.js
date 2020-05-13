export class JWTAuthStrategy {
  constructor(accessToken, refreshToken) {
    this._accessToken = accessToken;
    this._refreshToken = refreshToken;
  }

  getAuthData() {
    return {
      accessToken: this._accessToken,
      refreshToken: this._refreshToken
    };
  }
}