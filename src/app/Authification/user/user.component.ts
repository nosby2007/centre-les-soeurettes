import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/auth/authentification.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  email : string = '';
  password: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  login(){
  }

}