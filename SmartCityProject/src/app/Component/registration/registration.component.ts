import { Component } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { Citizen } from '../../models/citizen';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],

})
export class RegistrationComponent {
  
  constructor(
    private service: RegistrationService ,
    private router: Router
  ) {}

  submitted = false;
  citizen = new Citizen();

  onSubmit() {
    this.submitted = true;
    this.add();
  }
  add() {
    this.service.registerCitizen(this.citizen).subscribe(
      (response: HttpResponse<any>) => {
        console.log('Registration Response:', response);

        // Assuming the token is sent as a response header named 'Authorization'
        const token = response.headers.get('Authorization');

        if (token) {
          // Handle the token, e.g., save it to localStorage, navigate to another page, etc.
          console.log('Received Token:', token);

          // Example: Save token to localStorage
          localStorage.setItem('token', token);

          console.log('Navigating to login page');


          // Example: Navigate to another page (replace with your actual route)
           this.router.navigate(['/Login']);
        }
      },
      error => {
        console.error('Error during registration:', error);
        // Handle error, show a message, etc.
      }
    );
  }
}
