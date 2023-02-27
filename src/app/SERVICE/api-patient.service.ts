import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class ApiPatientService {
  private baseUrl:string = 'http://localhost:3000/patient'
  
    constructor(private http:HttpClient) { }
  
    postRegistration(registerObj: Patient){
      return this.http.post<Patient>(`${this.baseUrl}`, registerObj)
    }
    getRegisteredPatient(){
      return this.http.get<Patient[]>(`${this.baseUrl}`)
    }
  
    updateRegisterPatient(registerObj: Patient, id:number){
      return this.http.put<Patient>(`${this.baseUrl}/${id}`, registerObj)
    }
    deleteRegister(id:number){
      return this.http.delete<Patient>(`${this.baseUrl}/${id}`)
    }
    getRegisteredPatientId(id: number){
      return this.http.get<Patient>(`${this.baseUrl}/${id}`,) }
  
}
