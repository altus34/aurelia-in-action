import {inject, NewInstance, bindable, observable} from 'aurelia-framework';
import {ValidationRules, ValidationController} from 'aurelia-validation';
import {MaterializeFormValidationRenderer} from '../../resources/validations/materialize-form-validation-renderer';
import zxcvbn from 'zxcvbn';

@inject(NewInstance.of(ValidationController))
export class Registration {
  email = '';
  email_confirmation = '';
  @observable password = '';
  score = -1;

  constructor(controller) {
    this.controller = controller;
    this.controller.addRenderer(new MaterializeFormValidationRenderer());
  }

  passwordChanged(value) {
    this.report = zxcvbn(value);
    this.score = this.report.score;
  }

  register() {
    this.controller.validate().then(v => {
      if(v.valid) {
        console.log('Valid');
      } else {
        console.log('Invalid', v);
      }
    });
  }

  emailRules = ValidationRules
    .ensure(p => p.email)
    .required()
    .email()
    .ensure(p => p.email_confirmation)
    .required()
    .email()
    .then()
    .satisfies(() => {
      return this.email === this.email_confirmation;
    }).withMessage('Email are not the same')
    .rules;

  passwordRules = ValidationRules
    .ensure(p => p.password)
    .required()
    .then()
    .satisfies(() => {
      return this.score >= 3;
    }).withMessage('Invalid password')
    .rules;

}
