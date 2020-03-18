import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit {

  pageUsers: any;
  motCle = '';
  currentPage = 0;
  size = 4;
  pages: Array<number>;


  constructor() { }

  ngOnInit() {
  }

}
