import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicament } from '../models/medicament.model';

@Injectable({
  providedIn: 'root'
})
export class ApiMedService {
  private baseUrl:string = 'http://localhost:3000/medicament'
  
    constructor(private http:HttpClient) { }
  
    postRegistration(registerObj: Medicament){
      return this.http.post<Medicament>(`${this.baseUrl}`, registerObj)
    }
    getRegisteredMedicament(){
      return this.http.get<Medicament[]>(`${this.baseUrl}`)
    }
  
    updateRegisterMedicament(registerObj: Medicament, id:number){
      return this.http.put<Medicament>(`${this.baseUrl}/${id}`, registerObj)
    }
    deleteRegister(id:number){
      return this.http.delete<Medicament>(`${this.baseUrl}/${id}`)
    }
    getRegisteredMedicamentId(id: number){
      return this.http.get<Medicament>(`${this.baseUrl}/${id}`,) }
  
}
