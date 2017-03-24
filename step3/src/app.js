import {AuthorizeStep} from './authorize-step';

export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia in action';
    config.addAuthorizeStep(AuthorizeStep);

    config.map([
      {route: ['login'], name: 'login', moduleId: 'modules/security/login', nav: true, title: 'Login'},
      {route: ['registration'], name: 'registration', moduleId: 'modules/security/registration', nav: true, title: 'Registration'},
      {route: ['', 'home'], name: 'home', moduleId: 'modules/home', nav: true, title: 'Home', auth: true}
    ]);
  }
}
