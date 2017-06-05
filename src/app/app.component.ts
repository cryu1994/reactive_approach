import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'; // import validators

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup; // we could initialize the forms here but, its not the best way.

  // instead, implements OnInit methods and inside, i can initialize the method using ngOnInit
  ngOnInit() {
    this.signupForm = new FormGroup({ // this form doesnt have any control yet. so lets add some

      // this is the very basic form
      'username': new FormControl(null, Validators.required),  // username control, we can pass validators
      'email': new FormControl(null, [Validators.required, Validators.email]),     // email control, we can also pass array of validators
      'gender': new FormControl('male'),
    });
  }
  onSubmit() {
    console.log(this.signupForm);
  }
}
