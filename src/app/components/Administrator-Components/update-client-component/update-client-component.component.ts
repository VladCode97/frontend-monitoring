import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdministradorService } from 'src/app/Services/Administrador-Service/administrador.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-update-client-component',
  templateUrl: './update-client-component.component.html',
  styleUrls: ['./update-client-component.component.css']
})
export class UpdateClientComponent implements OnInit {

  public formClient: FormGroup;

  constructor(private adminstratorService: AdministradorService, private snackBar: MatSnackBar) {
    this.formClient = new FormGroup({
      nameClient: new FormControl('', [Validators.required]),
      hostClient: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  async updateHost() {
    if (this.formClient.valid) {
      (await this.adminstratorService.updateClient(this.formClient.value).subscribe(async (response) => {
        let message = (await response);
        if (message != undefined && (message).length !== 0) {
          this.snackBar.open(`${message}`, '');
          this.formClient.reset();
        }
      }));
    }
  }

}
