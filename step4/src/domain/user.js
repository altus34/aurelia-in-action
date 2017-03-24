export class User {
  token;

  isAnonymous() {
    return this.token == null;
  }
}
