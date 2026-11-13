import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-register-validation',
  styleUrl: './form-register-validation.css',
  templateUrl: './form-register-validation.html',
})
export class FormRegisterValidation {
  especies=['Perro', 'Gato' , 'Ave' , 'Otro'];
  sexos=['Macho' , 'Hembra'];
  formRegisterValidation=new FormGroup({
    
    nombre:new FormControl('', {validators: [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]}),
    apellidos:new FormControl('', {validators: [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]}),
    telefono:new FormControl('', {validators: [Validators.required, Validators.pattern( /^(\+34 ?)?[6-9]\d{8}$/)]}),
    email:new FormControl('',{validators : [Validators.required, Validators.email]}),
    nombreMascota:new FormControl('',{validators : [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+([ -][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]}),
    especie:new FormControl('',{ validators : [Validators.required]}),
    sexo:new FormControl('',{validators : [Validators.required]}),

    edad:new FormControl('',{validators:[Validators.required, Validators.maxLength(30), Validators.minLength(0)]}),
    peso:new FormControl('',{validators : [Validators.required, Validators.min(0.1), Validators.max(90)]}),


    raza:new FormControl('',{validators: [Validators.maxLength(40)]}),
    numeroMic:new FormControl('',{ validators: [Validators.required, Validators.pattern(/^\d{15}$/)]}),
    contraseña:new FormControl('',{validators: [Validators.required, Validators.minLength(10), Validators.maxLength(24), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/)]}),
    motivo:new FormControl('',{validators : [Validators.required, Validators.maxLength(300), Validators.minLength(10)]}),
    aceptoPoli:new FormControl('',{validators : [Validators.requiredTrue]})
  })

   isInvalidField(field: string) {
    const control = this.formRegisterValidation.get(field);
    return control?.invalid && (control?.dirty || control?.touched);
  }

  hasError(field: string, error: string) {
    const control = this.formRegisterValidation.get(field);
    return control?.hasError(error) && (control?.dirty || control?.touched);
  }

  missing(field: string, requirement: RegExp) {
    const control = this.formRegisterValidation.get(field);
    return (control?.dirty || control?.touched) && !!control?.value && !requirement.test(control.value);
  }

  onSubmit() {
    if (this.formRegisterValidation.invalid) {
      this.formRegisterValidation.markAllAsTouched();
      return;
    }
    console.log(this.formRegisterValidation.value);
  }


}

