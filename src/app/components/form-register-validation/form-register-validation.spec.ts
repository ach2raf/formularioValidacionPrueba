import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormRegisterValidation } from './form-register-validation';

describe('FormRegisterValidation', () => {
  let component: FormRegisterValidation;
  let fixture: ComponentFixture<FormRegisterValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegisterValidation],
    }).compileComponents();

    fixture = TestBed.createComponent(FormRegisterValidation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
