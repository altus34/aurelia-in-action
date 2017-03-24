import {customElement, bindable} from 'aurelia-framework'
import zxcvbn from 'zxcvbn';

@customElement('password-validator')
export class PasswordValidator {
  @bindable password;
  score = -1;

  passwordChanged() {
    if (this.password) {
      this.report = zxcvbn(this.password);
      this.score = this.report.score;
    }
  }
}
