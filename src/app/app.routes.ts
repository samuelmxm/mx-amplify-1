import { Routes } from '@angular/router';
import { InventarioComponentesMainComponent } from './telas/inventario-componentes-main/inventario-componentes-main.component';
import { DependenciasDoRegistroComponent } from './telas/dependencias-do-registro/dependencias-do-registro.component';
import { HtmlProjetoComponent } from './telas/html-projeto/html-projeto.component';
import { InventarioComponentesMainAwsComponent } from './telas/inventario-componentes-main-aws/inventario-componentes-main-aws.component';
import { DependenciasDoRegistroAwsComponent } from './telas/dependencias-do-registro-aws/dependencias-do-registro-aws.component';

export const routes: Routes = [
    { path: 'inventariodecomponentes', component: InventarioComponentesMainComponent },
    { path: 'inventariodecomponentesaws', component: InventarioComponentesMainAwsComponent },
    { path: 'dependencias', component: DependenciasDoRegistroComponent },
    { path: 'dependenciasaws', component: DependenciasDoRegistroAwsComponent },
    { path: 'relatoriodependencycheck', component: HtmlProjetoComponent },
];
