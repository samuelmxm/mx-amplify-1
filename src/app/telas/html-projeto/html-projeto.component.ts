import { Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InventarioService } from '../../servicos/inventarioService';
import { HTMLDeProjeto } from '../../model/registro-inventario-componentes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-html-projeto',
  standalone: true,
  imports: [],
  templateUrl: './html-projeto.component.html',
  styleUrl: './html-projeto.component.scss'
})
export class HtmlProjetoComponent implements OnInit {
  public htmlContent: any;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private inventarioService: InventarioService) {

  }
  ngOnInit(): void {
   /* this.route.queryParams.subscribe(params => {
      const idProjeto = params['idprojeto'];
      console.log('idProjeto', idProjeto);
      this.inventarioService.obterHTML(idProjeto).subscribe(r => {
        console.log('r', r);
        if (r.data) {
          const registro = JSON.parse(r.data as string) as HTMLDeProjeto;

          //this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(registro.HTML);

          // Open a new window
          const newWindow = window.open('', '_blank');

          // Check if the window was opened successfully
          if (newWindow) {
            // Set the content of the new window
            newWindow.document.write(registro.HTML);
            newWindow.document.close(); // Important to close the document to trigger JavaScript execution
          } else {
            console.error('Failed to open new window');
          }

        }

      });
    });*/
  }

}
