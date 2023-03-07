import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nurse } from '../models/nurse.model';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class ApiNurseAssementService {
  private baseUrl:string = 'http://localhost:3000/assessment'
  
    constructor(private http:HttpClient) { }
  
    postRegistration(registerObj: Nurse){
      return this.http.post<Nurse>(`${this.baseUrl}`, registerObj)
    }
    getRegisteredNurse(){
      return this.http.get<Nurse[]>(`${this.baseUrl}`)
    }
  
    updateRegisterNurse(registerObj: Nurse, id:number){
      return this.http.put<Nurse>(`${this.baseUrl}/${id}`, registerObj)
    }
    deleteRegister(id:number){
      return this.http.delete<Nurse>(`${this.baseUrl}/${id}`)
    }
    getRegisteredNurseId(id: number){
      return this.http.get<Nurse>(`${this.baseUrl}/${id}`,) }
  
}
