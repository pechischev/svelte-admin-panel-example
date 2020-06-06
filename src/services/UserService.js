import {requestManager} from '../logics/request';
import {JWTAuthStrategy, SimpleAuthStrategy} from '../logics/request/strategy';
import {user} from '../logics/store/user';

class UserServiceImpl {
  async signIn(authData) {
    const response = await requestManager.post('/user/', authData);
    const {accessToken, refreshToken, ...rest} = response.data;
    requestManager.setStrategy(new JWTAuthStrategy(accessToken, refreshToken));
    localStorage.setItem('jwt-tokens', JSON.stringify({accessToken, refreshToken}));
    user.receive({...rest, authorized: true });
  }

  async fetchUser() {
    const tokens = localStorage.getItem('jwt-tokens');
    if (!tokens) {
      return ;
    }
    const response = await requestManager.get('/user/', { data: JSON.parse(tokens) });
    user.receive(response.data);
  }

  async logout() {
    requestManager.setStrategy(new SimpleAuthStrategy());
    user.reset();
  }
}

export const UserService = new UserServiceImpl();