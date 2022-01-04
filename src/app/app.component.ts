import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Add: FormGroup;
  submitted: boolean;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.Add = this.formBuilder.group({
      first_name: ['', Validators.compose([Validators.required])],
      second_name: ['', Validators.compose([Validators.required])],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.Add.invalid) {
      console.log('Invalid');
      return;
    }
    console.log(this.Add.value);
  }
}
