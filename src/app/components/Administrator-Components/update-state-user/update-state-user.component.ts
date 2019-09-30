import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { AdministradorService } from 'src/app/Services/Administrador-Service/administrador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-state-user',
  templateUrl: './update-state-user.component.html',
  styleUrls: ['./update-state-user.component.css']
})
export class UpdateStateUserComponent implements OnInit {

  public formUpdateStateUser: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private adminService: AdministradorService, private route: Router) {
    this.formUpdateStateUser = new FormGroup({
      nameUser: new FormControl(this.data.nameUser),
      stateUser: new FormControl()
    })
  }

  ngOnInit() {
  }


  updateStateUser() {
    if (this.formUpdateStateUser.valid) {
      this.adminService.updateStateUser(this.formUpdateStateUser.value).subscribe(async (response) => {
        let message = await response;
        if (message === 'user status is updated'){
         return this.route.navigate(['/admin/'])
        }
      })
    }
  }

}
