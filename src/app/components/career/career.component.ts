import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  form: FormGroup
  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.email, Validators.required
      ]),
      number: new FormControl('+7', [
        Validators.required, Validators.minLength(10),
        Validators.maxLength(12)
      ]),
      profession: new FormControl('', Validators.required),
      about: new FormControl('', [
        Validators.required, Validators.minLength(100)
      ]),
      education: new FormControl('', Validators.required),
      portfolio: new FormControl('', Validators.required)
    })
  }
  submit(){
    this.form.reset()
  }
}
