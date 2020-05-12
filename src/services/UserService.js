import {requestManager} from '../logics/request';
import {JWTAuthStrategy, SimpleAuthStrategy} from '../logics/request/strategy';
import {user} from '../logics/store/user';

class UserServiceImpl {
  async signIn(authData) {
    const response = await requestManager.post('/user/', authData);
    requestManager.setStrategy(new JWTAuthStrategy(response.data));
    user.receive(response.data);
  }

  async logout() {
    requestManager.setStrategy(new SimpleAuthStrategy());
    user.reset();
  }
}

export const UserService = new UserServiceImpl();