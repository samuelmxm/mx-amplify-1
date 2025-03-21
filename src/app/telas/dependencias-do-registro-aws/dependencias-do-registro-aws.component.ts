import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { downloadData } from '@aws-amplify/storage';
import { Dependencia, RegistroInventarioComponentes } from '../../model/registro-inventario-componentes';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { InventarioService } from '../../servicos/inventarioService';
import { HTMLDeProjeto } from '../../model/registro-inventario-componentes';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Schema } from '../../../../amplify/data/resource';
import { generateClient } from 'aws-amplify/api';

@Component({
  selector: 'app-dependencias-do-registro-aws',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, RouterModule, CommonModule, MatTooltipModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './dependencias-do-registro-aws.component.html',
  styleUrl: './dependencias-do-registro-aws.component.scss'
})
export class DependenciasDoRegistroAwsComponent implements OnInit {
  client;
  constructor(private route: ActivatedRoute) { 
      this.client = generateClient<Schema>();
  }
  dataSource: Dependencia[] = [];
  dataRegistro: string = '';
  idRegistro: string = '';
  carregando = false;
  inicializando = true;
  displayedColumns: string[] = [
    'i',
    'nome'
    , 'versao', 'descricao', 'contemvulnerabilidades'
    , 'licenca'
    , 'projetos'
  ];

  ngOnInit(): void {
    this.carregando = true;
    this.route.queryParams.subscribe(params => {
      const idregistro = params['idregistro'];
      this.idRegistro = idregistro;

      try {
        this.client.models.Registros.get({id: idregistro}).then(i => {
     
            if(i.data)
            {
              console.log('i',i.data);
              this.dataRegistro =  i.data.createdAt;
            }
  
        });
      } catch (error) {
        console.error('error fetching todos', error);
      }

      from(downloadData({
        path: `registros/${idregistro}.json`
      }).result).subscribe(r => {
        from(r.body.text()).subscribe(reg => {

          const registro = JSON.parse(reg) as RegistroInventarioComponentes;
console.log(registro);

          this.dataSource = registro.Dependencias.sort((a, b) => {
            if (a.Nome == b.Nome) {
              if (a.Versao && b.Versao) {
                // Split version string into [major, minor, patch] numbers
                const versionA = a.Versao.split('.').map(Number);
                const versionB = b.Versao.split('.').map(Number);

                // Compare version parts one by one
                for (let i = 0; i < versionA.length; i++) {
                  if (versionA[i] !== versionB[i]) {
                    return versionA[i] - versionB[i];
                  }
                }
                return 0;  // If versions are identical
              }
            }

            return a.Nome.localeCompare(b.Nome);
          });
          this.carregando = false;
          this.inicializando = false;


        });
      });
    });
  }

  mostrarHtml(projeto: string) {

    from(downloadData({
      path: `html/${this.idRegistro}_${projeto}.html`
    }).result).subscribe(r => {
      from(r.body.text()).subscribe(html => {

        const newWindow = window.open('', '_blank');

        // Check if the window was opened successfully
        if (newWindow) {
          // Set the content of the new window
          newWindow.document.write(html);
          newWindow.document.close(); // Important to close the document to trigger JavaScript execution
        } else {
          console.error('Failed to open new window');
        }

      })
    });
  
  }
}



