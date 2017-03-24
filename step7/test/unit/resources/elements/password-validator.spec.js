import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';

describe('PasswordValidator', () => {
  let component;

  beforeEach(() => {
    component = StageComponent
      .withResources('resources/elements/password-validator')
      .inView('<password-validator password.bind="password"></password-validator>')
  });

  it('should be render as a meter and not visible when password is empty', done => {
    component.boundTo({password: ''});

    component.create(bootstrap).then(() => {
      const meter = document.querySelector('meter');
      expect(meter.getAttribute('max')).toBe('5');
      expect(meter.getAttribute('value')).toBe('0');

      const container = meter.parentNode;
      expect(container.classList.contains('aurelia-hide')).toBe(true);
      done();
    });
  });

  it('should be render and visible when password is filled', done => {
    component.boundTo({password: 'test'});

    component.create(bootstrap).then(() => {
      const container = document.querySelector('meter').parentNode;
      expect(container.classList.contains('aurelia-hide')).toBe(false);
      done();
    });
  });

  it('should test strength on password change', done => {
    component.boundTo({password: 'cheval23'});

    component.create(bootstrap).then(() => {
      const meter = document.querySelector('meter');
      expect(meter.getAttribute('value')).toBe('3');

      done();
    });

  });

  afterEach(() => {
    component.dispose();
  });

});


