import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  // This is the address of the Fake API
   baseUrl = 'http://localhost:4000/users/';
   constructor(private http: HttpClient) { }
   
   getEmployees(): Observable<Employee[]> {
      return this.http.get<Employee[]>(this.baseUrl);
   }
   getEmployeeById(id: number): Observable<Employee> {
     return this.http.get<Employee>(this.baseUrl + '/' + id);
   }
 
   registerEmployee(employee: Employee): Observable<Employee> {
     return this.http.post<Employee>(this.baseUrl, employee);
   }
 
   updateEmployee(employee: Employee): Observable<Employee> {
     return this.http.put<Employee>(this.baseUrl + '/' + employee.id, employee);
   }
 
   deleteEmployee(id: number): Observable<Employee> {
     return this.http.delete<Employee>(this.baseUrl + '/' + id);
   }
   loginEmployee(employee: Employee): Observable<any> {
     return this.http.post(this.baseUrl, employee);
   }
 
 logout() {
     // remove user from local storage to log user out
     localStorage.removeItem('currentUser');
 }
 }
