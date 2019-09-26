import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/Auth-Service/auth-service.service';

@Component({
  selector: 'app-home-application-component',
  templateUrl: './home-application.component.html',
  styleUrls: ['./home-application.component.css']
})
export class HomeApplicationComponent implements OnInit {

  public formAuth: FormGroup;
  public message;

  constructor(private authService: AuthService) {
    this.formAuth = new FormGroup({
      emailUser: new FormControl('', [Validators.email, Validators.required]),
      passwordUser: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  async signIn() {
    if (this.formAuth.valid) {
      (await this.authService.signIn(this.formAuth.value)).subscribe(async (response) => {
        this.message = (await response);
      });
    }
  }

}
