import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATIONS_MESSAGES:any = {
  required: 'Should not be empty',
  email: 'Email is not vaild',
  minlength: 'Field id too short',
  notMatch: 'Password and Confirm Password not matchmatch'
}

@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.scss']
})
export class InputValidationComponent implements OnInit,OnChanges {
  @Input()control!:AbstractControl;
  @Input()showErrorWhen:boolean = true;
  errorMessages: string[] = [];

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }

  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() =>{
      this.checkValidation();
    })
  }

  checkValidation() {
    const errors = this.control.errors;
    if(!errors) {
      this.errorMessages = [];
      return;
    }

    const errorKeys = Object.keys(errors);
    this.errorMessages = errorKeys.map(key => VALIDATIONS_MESSAGES[key]);
  }

}
