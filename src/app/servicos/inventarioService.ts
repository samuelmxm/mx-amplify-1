import { Injectable } from "@angular/core";
import { generateClient } from "aws-amplify/api";
import { Schema } from "../../../amplify/data/resource";
import { from } from "rxjs";

const client = generateClient<Schema>();

@Injectable({providedIn: 'root'})
export class inventarioService{

    public obterRegistros(){
        //return from( client.queries.teste());
    }
}