import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { InventarioService } from '../../servicos/inventarioService';
import { Dependencia, HTMLDeProjeto, RegistroInventarioComponentes } from '../../model/registro-inventario-componentes';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-dependencias-do-registro',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, RouterModule, CommonModule, MatTooltipModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './dependencias-do-registro.component.html',
  styleUrl: './dependencias-do-registro.component.scss'
})
export class DependenciasDoRegistroComponent implements OnInit {
  displayedColumns: string[] = [
    'i',
    'nome'
    , 'versao', 'descricao', 'contemvulnerabilidades'
    , 'licenca'
    , 'projetos'
  ];
  dataSource: Dependencia[] = [];
  dataRegistro: Date = new Date();
  idRegistro: string = '';

  constructor(private route: ActivatedRoute, private inventarioService: InventarioService) { }

  ngOnInit(): void {
    this.carregando = true;
    this.route.queryParams.subscribe(params => {
      const idregistro = params['idregistro'];
      this.idRegistro = idregistro;

      this.inventarioService.obterDependencias(idregistro).subscribe(r => {
        if (r.data) {
          const registro = JSON.parse(r.data as string) as RegistroInventarioComponentes;
          this.dataRegistro = registro.DataRegistro;
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
        }
        this.carregando = false;
        this.inicializando = false;
      });
    });
  }
  carregando = false;
  inicializando = true;
  mostrarHtml(projeto: string) {
    this.html = '';
    this.carregando = true;
    this.buscarHTML(projeto, 0);
  }

  html = '';
  buscarHTML(projeto: string, offset: number) {
    this.inventarioService.obterHTML(projeto, this.idRegistro, offset).subscribe(r => {
      console.log('r', r);
      if (r.data) {

        const registro = JSON.parse(r.data as string) as HTMLDeProjeto;
        this.html += registro.html;
        if (registro.temMais) {
          this.buscarHTML(projeto, registro.offset);
        }
        else {
          this.carregando = false;
          //this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(registro.HTML);

          // Open a new window
          const newWindow = window.open('', '_blank');

          // Check if the window was opened successfully
          if (newWindow) {
            // Set the content of the new window
            newWindow.document.write(this.html);
            newWindow.document.close(); // Important to close the document to trigger JavaScript execution
          } else {
            console.error('Failed to open new window');
          }
        }

      }

    });
  }
}