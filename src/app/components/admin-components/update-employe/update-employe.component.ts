import { Component, OnInit } from '@angular/core';
import { Employe } from '../../../modals/employe';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from '../../../services/employe.service';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {

  id: number ; 
  employe: Employe ; 

  constructor(private route: ActivatedRoute, private router:Router,
    private employeService: EmployeService) { }

  ngOnInit() {
    this.employe = new Employe();

    this.id = this.route.snapshot.params['id'];

    this.employeService.getEmploye(this.id)
    .subscribe(data => {
      console.log(data)
      this.employe = data ; 
    }, error => console.log(error));

    }

    updateEmploye(){
      this.employeService.updateEmployee(this.id, this.employe)
      .subscribe(data => console.log(data),error => console.log(error));
      this.employe = new Employe();
      this.gotoList();
    }

    onSubmit(){
      this.updateEmploye();
    }

    gotoList(){
      this.router.navigate(['/employees']);
    }


  }


