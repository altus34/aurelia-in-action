import {inject} from 'aurelia-framework';
import {Redirect} from 'aurelia-router';
import {User} from './domain/user';

@inject(User)
export class AuthorizeStep {
  constructor(user) {
    this.user = user;
  }

  run(routingContext, next) {
    if (routingContext.getAllInstructions().some(inst => inst.config.auth)) {
      if (this.user.isAnonymous()) {
        return next.cancel(new Redirect('login'));
      }
    }
    return next();
  }
}
