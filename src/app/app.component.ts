import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private roles : string[];
  isLoggedIn = false ; 
  showAdminBoard = false ; 
  username: string ; 

  constructor(){}
  title = 'managementProject';
  ngOnInit() {
    
  }



  
}
