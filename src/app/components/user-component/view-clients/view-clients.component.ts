import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';
import { AdministradorService } from 'src/app/Services/Administrador-Service/administrador.service';
import { ViewGraphicClientComponent } from '../../Administrator-Components/view-graphic-client-component/view-graphic-client-component.component';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';

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
  public formDate: FormGroup;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private adnminService: AdministradorService, public dialog: MatDialog, private snackBar: MatSnackBar) {
    this.displayedColumns = ['Nombre', 'Alias', 'Host', 'UltimaActualizacion', 'Disponibilidad', 'Latencia'];
    this.formDate = new FormGroup({
      dateInit: new FormControl(),
      dateFinal: new FormControl()
    })
  }

  ngOnInit() {
    this.viewClients();
  }

  public get dateInit(): FormControl {
    return this.formDate.get('dateInit') as FormControl;
  }

  public get dateFinal(): FormControl {
    return this.formDate.get('dateFinal') as FormControl;
  }

  private getFormatedDate(date: Date): string {
    return moment(date).format('MM/DD/YYYY HH:mm:ss')
  }

  viewClients() {
    this.adnminService.viewClients().subscribe(async (response) => {
      this.arrayClients = await response;
      this.dataSource = new MatTableDataSource(this.arrayClients);
      this.dataSource.paginator = this.paginator;
    })
  }

  viewClientByDates() {
    if (this.formDate.valid) {
      this.adnminService.viewClientsByDates(this.getFormatedDate(this.dateInit.value), this.getFormatedDate(this.dateFinal.value)).
        subscribe(async (response) => {
          let message = await response;
          if (message === 'No data for this date') {
            this.snackBar.open(`${message}`, '', {
              duration: 2000,
            });
          } else {
            this.arrayClients = await response;
            this.dataSource = new MatTableDataSource(this.arrayClients);
            this.dataSource.paginator = this.paginator;
            this.formDate.reset({});
          }
        });
    }
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
