import { Injectable } from "@angular/core";
import { generateClient } from "aws-amplify/api";
import { Schema } from "../../../amplify/data/resource";
import { from } from "rxjs";

const client = generateClient<Schema>();

@Injectable({ providedIn: 'root' })
export class InventarioService {

    public obterRegistros() {
        return from(client.queries.obterRegistrosDependencyCheck());
    }

    public obterDependencias(id: string) {
        return from(client.queries.obterDependenciasDependencyCheck({ id: id }));
    }  
    
    public obterHTML(id: string, idRegistro: string, offset: number) {
        console.log('b', { id: id, idRegistro: idRegistro, offset: offset });
        return from(client.queries.obterProjetosDependencyCheck({ id: id, idRegistro: idRegistro, offset: offset }));
    }
}