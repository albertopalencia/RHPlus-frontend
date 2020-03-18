import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../modals/employe';
import { Presence } from '../modals/presence';



@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  employe: Employe = new Employe();

  constructor(private httpClient:HttpClient){}

  public getEmployeesList()  {
    console.log("test call");
    return this.httpClient.get<any>("http://localhost:8080/employees");
  }

  public getEmploye(id: number){
    return this.httpClient.get<Employe>("http://localhost:8080/employees"+"/"+ id);
  }

  public deleteEmployeById (id: number)  {
    return this.httpClient.delete("http://localhost:8080/employees"+"/" + id);
  }

  public updateEmployee(id: number, value: any): Observable<Object> {
    return this.httpClient.put("http://localhost:8080/candidats/createcandidate"+id, value);
  }

  populateForm(employe){
      
  }

  getAttendance()
  {
    return this.httpClient.get<Presence[]>('http://localhost:8080/card');
  }

  
}
