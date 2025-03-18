import { Routes } from '@angular/router';
import { InventarioComponentesMainComponent } from './telas/inventario-componentes-main/inventario-componentes-main.component';
import { DependenciasDoRegistroComponent } from './telas/dependencias-do-registro/dependencias-do-registro.component';
import { HtmlProjetoComponent } from './telas/html-projeto/html-projeto.component';

export const routes: Routes = [
    { path: 'inventariodecomponentes', component: InventarioComponentesMainComponent },
    { path: 'dependencias', component: DependenciasDoRegistroComponent },
    { path: 'relatoriodependencycheck', component: HtmlProjetoComponent },
];
