import { Component, OnInit } from '@angular/core';
import { Conge } from '../../../modals/conge';
import { Employe } from '../../../modals/employe';
import { EmployeService } from '../../../services/employe.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile-employe',
  templateUrl: './profile-employe.component.html',
  styleUrls: ['./profile-employe.component.css']
})
export class ProfileEmployeComponent implements OnInit {

  id: number ;
  private sub: any ; 
  conge: Conge  = new Conge();
  employe: Employe = new Employe();
  constructor(private employeService:EmployeService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getEmploye();
  }

  getEmploye() {
    this.employeService.getEmploye(this.id).subscribe(
      response => {
        this.employe = response ; }
    );
  }

  

  

}
