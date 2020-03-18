import { Component, OnInit } from '@angular/core';
import {NgbModalConfig , NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CongeService } from 'src/app/services/conge.service';
import { Conge } from 'src/app/modals/conge';

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class DemandeCongeComponent implements OnInit {

  conge: Conge = new Conge();
  constructor( private congeService:CongeService) {
    
  }

  ngOnInit() {
  }

  createDemandeConge():void {
    this.congeService.createDemandeConge(this.conge)
    .subscribe( data => {
      alert("demande created successfully");
     });

  };

}
