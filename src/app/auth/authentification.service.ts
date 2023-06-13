import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  register(email: string, password: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router) { }
  //login methode
}