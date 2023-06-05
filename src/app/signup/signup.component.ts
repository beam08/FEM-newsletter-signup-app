import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AES, enc } from 'crypto-js';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  emailadd: string = '';
  isValidEmail: boolean = true;
  isInputEmpty: boolean = true;

  constructor(private router: Router) {}

  validateEmail(): void {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (this.emailadd && !emailRegex.test(this.emailadd)) {
      this.isValidEmail = false;
    } else {
      this.isValidEmail = true;
    }
  }

  navigateToSuccess() {
    if (this.isValidEmail === true && this.emailadd !== '') {
      const encryptedData = AES.encrypt(this.emailadd, 'secret-key').toString();
      this.router.navigate(['/success'], {
        queryParams: { th1s: encryptedData },
      });
    } else {
      console.log('test');
    }
  }

  isEmpty(): void {
    if (this.emailadd === '') {
      this.isInputEmpty = false;
    } else {
      this.isInputEmpty = true;
    }
  }
}
