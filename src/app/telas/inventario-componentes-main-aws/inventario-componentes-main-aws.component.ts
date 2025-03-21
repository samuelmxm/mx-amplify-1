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
import { generateClient } from "aws-amplify/api";
import { data, Schema } from "../../../../amplify/data/resource";

@Component({
  selector: 'app-inventario-componentes-main-aws',
  standalone: true,
  imports: [MatTableModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,

    DatePipe,
    CommonModule, MatTooltipModule,
    MatProgressSpinnerModule],
  templateUrl: './inventario-componentes-main-aws.component.html',
  styleUrl: './inventario-componentes-main-aws.component.scss'
})
export class InventarioComponentesMainAwsComponent implements OnInit {
  carregando = false;
  displayedColumns: string[] = [
    //'acoes',
    'data'];
  dataSource: any[] = [];
  client;
  constructor() {
    this.client = generateClient<Schema>();
  }
  ngOnInit(): void {
    this.carregando = true;

    const item = {
      id: '123',
      data: '2025-03-20T14:04:03.8250097-03:00'
    };
   // console.log('item', item);
   // this.client.models.Registros.create(item);

    try {
      this.client.models.Registros.observeQuery().subscribe({
        next: ({ items, isSynced }) => {
          console.log('items', items);
          if (items) {
            this.dataSource = items;
          }
          this.carregando = false;
        },
      });
    } catch (error) {
      console.error('error fetching todos', error);
    }
  }


}
