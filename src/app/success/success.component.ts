import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AES, enc } from 'crypto-js';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent {
  emailadd: string = '';
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const encryptedData = params['th1s'];
      const decyptedData = AES.decrypt(encryptedData, 'secret-key').toString(
        enc.Utf8
      );
      this.emailadd = decyptedData;
      console.log(this.emailadd);
    });
  }

  home() {
    this.router.navigate(['/']);
  }
}
