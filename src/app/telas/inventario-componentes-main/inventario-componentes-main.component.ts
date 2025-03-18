import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { InventarioService } from '../../servicos/inventarioService';
import { RegistroInventarioComponentes } from '../../model/registro-inventario-componentes';
import { DatePipe } from '@angular/common';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-inventario-componentes-main',
  standalone: true,
  imports: [MatTableModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    
    DatePipe],
  templateUrl: './inventario-componentes-main.component.html',
  styleUrl: './inventario-componentes-main.component.scss'
})
export class InventarioComponentesMainComponent implements OnInit {
  displayedColumns: string[] = [
    //'acoes',
    'data'];
  dataSource: RegistroInventarioComponentes[] = [];

  constructor(private inventarioService: InventarioService) {

  }
  ngOnInit(): void {
    this.inventarioService.obterRegistros().subscribe(r => {
      if (r.data) {
        const registros = JSON.parse(r.data as string) as RegistroInventarioComponentes[];
        console.log('Registros', registros);
        this.dataSource = registros;
      }

    });
  }


}
