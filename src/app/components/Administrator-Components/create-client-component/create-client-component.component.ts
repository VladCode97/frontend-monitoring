import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AdministradorService } from 'src/app/Services/Administrador-Service/administrador.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-client-component',
  templateUrl: './create-client-component.component.html',
  styleUrls: ['./create-client-component.component.css']
})
export class CreateClientComponent implements OnInit {

  public message;
  public formClient: FormGroup;

  constructor(private adminstratorService: AdministradorService, private snackBar: MatSnackBar) {
    this.formClient = new FormGroup({
      nameClient: new FormControl('', [Validators.required]),
      aliasClient: new FormControl('', [Validators.required]),
      hostClient: new FormControl('', [Validators.required]),
      emailClient: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit() {
  }

  async createClient() {
    if (this.formClient.valid) {
      (await this.adminstratorService.createClient(this.formClient.value).subscribe(async (response) => {
        let message = (await response);
        if (message != undefined && (message).length !== 0) {
          this.snackBar.open(`${message}`, '');
        } else {
          this.snackBar.open('Client created', '', {
            duration: 2000,
          })
          this.formClient.reset({});
        }
      }));
    }
  }

}
