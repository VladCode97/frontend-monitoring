import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { AdministradorService } from 'src/app/Services/Administrador-Service/administrador.service';
import { ViewGraphicClientComponent } from '../../Administrator-Components/view-graphic-client-component/view-graphic-client-component.component';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsUserComponent implements OnInit {

  public arrayClients = [];
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any>;
  public resultsLength = 0;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private adnminService: AdministradorService, public dialog: MatDialog) {
    this.displayedColumns = ['Nombre', 'Alias', 'Host', 'UltimaActualizacion', 'Disponibilidad', 'Latencia'];
  }

  ngOnInit() {
    this.viewClients();
  }

  viewClients() {
    this.adnminService.viewClients().subscribe(async (response) => {
      this.arrayClients = await response;
      this.dataSource = new MatTableDataSource(this.arrayClients);
      this.dataSource.paginator = this.paginator;
    })
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(avarageClient: any) {
    this.dialog.open(ViewGraphicClientComponent, {
      data: {
        avarageClient
      },
      height: '500px',
      width: '500px',
    });
  }

}
