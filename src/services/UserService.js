import {requestManager} from '../logics/request';
import {JWTAuthStrategy, SimpleAuthStrategy} from '../logics/request/strategy';
import {user} from '../logics/store/user';

class UserServiceImpl {
  signIn(authData) {
    requestManager.post('', authData).then((response) => {
      requestManager.setStrategy(new JWTAuthStrategy(response.data.tokens));
      user.receive(response.data);
    })
  }

  logout() {
    requestManager.setStrategy(new SimpleAuthStrategy());
    user.reset();
  }
}

export const UserService = new UserServiceImpl();