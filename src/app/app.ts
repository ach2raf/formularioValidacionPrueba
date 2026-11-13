import { Component, signal } from '@angular/core';
import { FormRegisterValidation } from './components/form-register-validation/form-register-validation';

@Component({
  imports: [FormRegisterValidation],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('formularioValidacionPrueba');
}
