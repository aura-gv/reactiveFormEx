import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.myForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl('', [Validators.required, Validators.email]),
      hobbies: new FormArray([]),
    });
  }

  get hobbiesFormArray() {
    return this.myForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbiesFormArray.push(new FormControl());
  }

  removeHobby(index: number) {
    this.hobbiesFormArray.removeAt(index);
  }
  onSubmit() {
    console.log(this.myForm.value);
  }
}
