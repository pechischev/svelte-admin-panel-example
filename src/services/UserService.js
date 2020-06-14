import {requestManager} from '../logics/request';
import {JWTAuthStrategy, SimpleAuthStrategy} from '../logics/request/strategy';
import {user as userStore} from '../logics/store';

class UserServiceImpl {
  async signIn(authData) {
    const response = await requestManager.post('/signin/', { data: authData});
    const {tokens, user} = response.data;
    requestManager.setStrategy(new JWTAuthStrategy(tokens));
    localStorage.setItem('jwt-tokens', JSON.stringify(tokens));
    localStorage.setItem('user-id', user.id);
    userStore.receive({...user, authorized: true });
  }

  async fetchUser() {
    const tokens = localStorage.getItem('jwt-tokens');
    if (!tokens) {
      return;
    }
    requestManager.setStrategy(new JWTAuthStrategy(JSON.parse(tokens)));
    const userId = localStorage.getItem('user-id');
    const response = await requestManager.get(`/users/${userId}/`);
    userStore.receive(response.data);
  }

  async logout() {
    await requestManager.delete('/signout/');
    requestManager.setStrategy(new SimpleAuthStrategy());
    userStore.reset();
  }
}

export const UserService = new UserServiceImpl();