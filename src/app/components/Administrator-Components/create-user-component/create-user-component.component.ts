import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdministradorService } from 'src/app/Services/Administrador-Service/administrador.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-user-component',
  templateUrl: './create-user-component.component.html',
  styleUrls: ['./create-user-component.component.css']
})
export class CreateUserComponent implements OnInit {


  public message;
  public formUser: FormGroup;

  constructor(private adminstratorService: AdministradorService,  private snackBar: MatSnackBar) {
    this.formUser = new FormGroup({
      nameUser: new FormControl('', [Validators.required]),
      roleUser: new FormControl('', [Validators.required]),
      passwordUser: new FormControl('', [Validators.required]),
      emailUser: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit() {
  }

  async createUser() {
    if (this.formUser.valid) {
      (await this.adminstratorService.createUser(this.formUser.value).subscribe(async (response) => {
        let message = (await response);
        if (message != undefined && (message).length !== 0) {
          this.snackBar.open(`${message}`, '');
        } else {
          this.snackBar.open('Customer created', '', {
            duration: 2000,
          });
          this.formUser.reset({});
        }
      }));
    }
  }

}
