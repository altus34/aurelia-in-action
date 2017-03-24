import {User} from "../../src/domain/user";

describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User();
  });

  it('is anonymous when he have not security token', () => {
    expect(user.isAnonymous()).toBe(true);
    user.token = '1234';
    expect(user.isAnonymous()).toBe(false);
  });

});
