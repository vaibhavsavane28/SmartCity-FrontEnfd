import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isOtpSent = false;
  isOtpVerified = false;
  
  enteredOTP: string = '';
  firstname: string = '';
  lastname: string = '';
  contactnumber: string = '';
  username: string = '';
  password: string = '';


  // Add your registration logic here
  register() {
    console.log('Registration logic goes here');
    console.log('User Details:', 
    
    {
      firstname: this.firstname,
      lastname :this.lastname,
      contactnumber: this.contactnumber,
      username: this.username,
      password: this.password,
      // ... other details
    });

    // You can navigate to another page, show a modal, etc.
  }

 
  sendOTP() {
    // Implement your OTP sending logic here
    console.log('Sending OTP...');
    // Assuming OTP is sent successfully, update the flag
    this.isOtpSent=true;

  }

  verifyOTP() {
    // Implement your OTP verification logic here
    console.log('Verifying OTP...');
    console.log('Entered OTP:', this.enteredOTP);
    // Assuming OTP is verified successfully, update the flag
    this.isOtpVerified = true;
  }


}

