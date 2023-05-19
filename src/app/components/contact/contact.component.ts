import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{
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
    })
  }

  submit(){
    console.log(this.form)
  this.form.reset()
  }
}
