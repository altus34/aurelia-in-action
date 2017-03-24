import {App} from '../../src/app';
import {AuthorizeStep} from '../../src/authorize-step';

describe('the App module', () => {
  let app;
  let router;
  let config;

  beforeEach(() => {
    app = new App();
    router = new RouterStub();
    config = new ConfigStub();
    app.configureRouter(config, router);
  });

  it('contains a router property', () => {
    expect(app.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(config.title).toEqual('Aurelia in action');
  });

  it('should have the expected number of routes', () => {
    expect(config.routes.length).toEqual(3);
  });


  it('have the authorization step enabled', () => {
    spyOn(config, 'addAuthorizeStep').and.callFake(function () {
      expect(arguments[0]).toEqual(AuthorizeStep);
    });
    app.configureRouter(config, router);
  });

  it('should have a login route', () => {
    expect(config.routes).toContain({
      route: ['login'],
      name: 'login',
      moduleId: 'modules/security/login',
      nav: true,
      title: 'Login'
    });
  });

  it('should have a registration route', () => {
    expect(config.routes).toContain({
      route: ['registration'],
      name: 'registration',
      moduleId: 'modules/security/registration',
      nav: true,
      title: 'Registration'
    });
  });

  it('should have a home route', () => {
    expect(config.routes).toContain({
      route: ['', 'home'],
      name: 'home',
      moduleId: 'modules/home',
      nav: true,
      auth: true,
      title: 'Home'
    });
  });
});

class RouterStub {
}

class ConfigStub {
  map(routes) {
    this.routes = routes;
  }

  configure(handler) {
    handler(this);
  }

  addAuthorizeStep(step) {
    this.step = step;
  }
}
