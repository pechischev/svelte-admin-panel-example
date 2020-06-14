export class JWTAuthStrategy {
  constructor(tokens) {
    this._accessToken = tokens.access_token;
    this._refreshToken = tokens.refresh_token;
  }

  getAuthData() {
    return {
      'Authorization': `Bearer ${this._accessToken}`
    };
  }
}