import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nurse } from '../models/nurse.model';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class ApiNurseService {
  private baseUrl:string = 'http://localhost:3000/nurse'
  
    constructor(private http:HttpClient) { }
  
    postRegistration(registerObj: Nurse){
      return this.http.post<Nurse>(`${this.baseUrl}`, registerObj)
    }
    getRegisterednurse(){
      return this.http.get<Nurse[]>(`${this.baseUrl}`)
    }
  
    updateRegisternurse(registerObj: Nurse, id:number){
      return this.http.put<Nurse>(`${this.baseUrl}/${id}`, registerObj)
    }
    deleteRegister(id:number){
      return this.http.delete<Nurse>(`${this.baseUrl}/${id}`)
    }
    getRegisteredNurseId(id: number){
      return this.http.get<Patient>(`${this.baseUrl}/${id}`,) }
  
}

