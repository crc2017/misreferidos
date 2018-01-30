import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-detalle-sucursal',
  templateUrl: './dialog-detalle-sucursal.component.html',
  styleUrls: ['./dialog-detalle-sucursal.component.css']
})
export class DialogDetalleSucursalComponent {
  public zoomMapa:number = 17;
  public latitud: number;
  public longitud: number;
  public isMapaCargando:boolean = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
      this.latitud = parseFloat(data.sucursal.latitud);
      this.longitud = parseFloat(data.sucursal.longitud);
  }

  public mapaCargado($event) {
      this.isMapaCargando = false;
  }
}
