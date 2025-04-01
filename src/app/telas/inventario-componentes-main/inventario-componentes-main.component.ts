import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { InventarioService } from '../../servicos/inventarioService';
import { RegistroInventarioComponentes } from '../../model/registro-inventario-componentes';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

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

    DatePipe,
    CommonModule, MatTooltipModule,
    MatProgressSpinnerModule],
  templateUrl: './inventario-componentes-main.component.html',
  styleUrl: './inventario-componentes-main.component.scss'
})
export class InventarioComponentesMainComponent implements OnInit {
  carregando = false;
  displayedColumns: string[] = [
    //'acoes',
    'data'];
  dataSource: RegistroInventarioComponentes[] = [];

  constructor(private inventarioService: InventarioService) {

  }
  ngOnInit(): void {
    this.carregando = true;
    this.inventarioService.obterRegistros().subscribe(r => {
      if (r.data) {
        const registros = JSON.parse(r.data as string) as RegistroInventarioComponentes[];
        this.dataSource = registros;
        this.carregando = false;
      }

    });
  }

  exportarExcel(){
    
  }


}
