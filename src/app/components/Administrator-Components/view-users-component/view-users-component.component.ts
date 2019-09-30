import { Component, OnInit, ViewChild } from '@angular/core';
import { AdministradorService } from 'src/app/Services/Administrador-Service/administrador.service';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { UpdateStateUserComponent } from '../update-state-user/update-state-user.component';

@Component({
  selector: 'app-view-users-component',
  templateUrl: './view-users-component.component.html',
  styleUrls: ['./view-users-component.component.css']
})
export class ViewUsersComponent implements OnInit {

  public arrayUsers = [];
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any>;
  public resultsLength = 0;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private adminService: AdministradorService, public dialog: MatDialog) {
    this.displayedColumns = ['Nombre', 'Rol', 'Email', 'Estado', 'CambiarEstado'];
  }

  ngOnInit() {
    this.viewUsers();
  }

  async viewUsers() {
    this.arrayUsers = (await this.adminService.filterUserbyRoleTiqal());
    this.resultsLength = this.arrayUsers.length;
    this.dataSource = new MatTableDataSource(this.arrayUsers);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(nameUser: string) {
    this.dialog.open(UpdateStateUserComponent, {
      data: {
        nameUser
      },
      height: '350px',
      width: '450px',
    });
  }


}
