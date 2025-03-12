import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { generateClient } from 'aws-amplify/api';
import { Schema } from '../../amplify/data/resource';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

Amplify.configure(outputs);

const client = generateClient<Schema>();

async function sayHello() {
  const result = await client.queries.teste({
    name: 'Samuel'
  });

  console.log('Result', result);
}



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    AmplifyAuthenticatorModule, 
    
    MatButtonModule, MatMenuModule, MatIconModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {


  constructor(public authenticator: AuthenticatorService) { }

  ngOnInit(): void {
    console.log(Amplify.getConfig());



    /*const userData = fetchUserAttributes().then(u => {
      this.nickname = u.nickname;
    });*/
  }
  title = 'Teste Amplify';

 sayHello() {
sayHello();
  }

}
