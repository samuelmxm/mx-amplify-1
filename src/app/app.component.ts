import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

Amplify.configure(outputs);


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AmplifyAuthenticatorModule,
    MatButtonModule, 
    MatMenuModule, 
    MatIconModule,
    RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  constructor(public authenticator: AuthenticatorService) { }

}
