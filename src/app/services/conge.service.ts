import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conge } from '../modals/conge';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  conge : Conge = new Conge();
  constructor(private httpClient:HttpClient) { }

  public createDemandeConge(conge){
    return this.httpClient.post<Conge>("http://localhost:8080/createConge",conge);

  }


}
