import {inject} from 'aurelia-dependency-injection';
import {validationRenderer} from 'aurelia-validation';

export class MaterializeFormValidationRenderer {
  render(instruction) {
    for (let { result, elements } of instruction.unrender) {
      for (let element of elements) {
        this.remove(element, result);
      }
    }

    for (let { result, elements } of instruction.render) {
      for (let element of elements) {
        this.add(element, result);
      }
    }
  }

  add(element, result) {
    if (result.valid) {
      return;
    }

    element.classList.add('invalid');
    let label = element.nextSibling;
    label.classList.add('active');
    label.setAttribute('data-error', result.message);
  }

  remove(element, result) {
    if (result.valid) {
      return;
    }

    element.classList.remove('invalid');
    let label = element.nextSibling;
    label.removeAttribute('data-error');
  }
}
