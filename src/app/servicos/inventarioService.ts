import { Injectable } from "@angular/core";
import { generateClient } from "aws-amplify/api";
import { Schema } from "../../../amplify/data/resource";
import { from } from "rxjs";



@Injectable({ providedIn: 'root' })
export class InventarioService {
    client;
    constructor() {
        this.client = generateClient<Schema>();
    }

    public obterRegistros() {
        return from(this.client.queries.obterRegistrosDependencyCheck());
    }

    public obterDependencias(id: string) {
        return from(this.client.queries.obterDependenciasDependencyCheck({ id: id }));
    }

    public obterHTML(id: string, idRegistro: string, offset: number) {
        console.log('b', { id: id, idRegistro: idRegistro, offset: offset });
        return from(this.client.queries.obterProjetosDependencyCheck({ id: id, idRegistro: idRegistro, offset: offset }));
    }
}