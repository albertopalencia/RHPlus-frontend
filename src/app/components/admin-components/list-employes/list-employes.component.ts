import { Component, OnInit } from '@angular/core';
import {  EmployeService } from '../../../services/employe.service';
import { Observable } from 'rxjs';
import { Employe } from '../../../modals/employe';

@Component({
  selector: 'app-list-employes',
  templateUrl: './list-employes.component.html',
  styleUrls: ['./list-employes.component.css']
})
export class ListEmployesComponent implements OnInit {

  employe : Employe = new Employe();
  id : number; 
  employees: Employe[];
  constructor(private employeService:EmployeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.employeService.getEmployeesList().subscribe(
      response => {
        this.employees = response; }
     );
  }

  deleteEmploye(employe:Employe): void {
    this.employeService.deleteEmployeById(employe.idUser)
      .subscribe( data => {
        this.employees = this.employees.filter(u => u !== employe);
      })
    
  }

 /* getEmploye(employe : Employe) {
    this.employeService.getEmploye(employe.idUser).subscribe(
      response => {
        this.employe = response ; }
    );
  }*/

  onEdit(row){
    this.employeService.populateForm(row);
  }

}
