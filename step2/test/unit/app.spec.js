import {App} from '../../src/app';

class RouterStub {
  configure(handler) {
    handler(this);
  }

  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  let app;
  let mockedRouter;

  beforeEach(() => {
    app = new App();
    mockedRouter = new RouterStub();
    app.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(app.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(app.router.title).toEqual('Aurelia in action');
  });

  it('should have a login route', () => {
    expect(app.router.routes).toContain({ route: ['login'], name: 'login',  moduleId: 'modules/security/login', nav: true, title: 'Login' });
  });

  it('should have a registration route', () => {
    expect(app.router.routes).toContain({ route: ['registration'], name: 'registration',  moduleId: 'modules/security/registration', nav: true, title: 'Registration' });
  });

  it('should have a home route', () => {
    expect(app.router.routes).toContain({ route: ['', 'home'], name: 'home',  moduleId: 'modules/home', nav: true, title: 'Home' });
  });
});
