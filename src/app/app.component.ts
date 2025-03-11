import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { generateClient } from 'aws-amplify/api';
import { Schema } from '../../amplify/data/resource';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

Amplify.configure(outputs);

const client = generateClient<Schema>();

async function sayHello(){
  const result = await client.queries.sayHello({
    name: 'Samuel'
  });

  console.log('Result', result);
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(Amplify.getConfig());
  }
  title = 'Teste Amplify';

  sayHello(){
    sayHello();
  }
}
