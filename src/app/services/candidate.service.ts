import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from '../modals/candidate';


@Injectable({
  providedIn: 'root'
})

export class CandidateService {

  candidate: Candidate = new Candidate();
  constructor(private httpClient:HttpClient) { }

  public createCandidate(candidate, fileCV:File, fileLettre:File) {

    const data:FormData= new FormData();
    data.append('candidate',JSON.stringify(candidate));
    data.append('cv_file',fileCV);
    data.append('motiv_letter_file',fileLettre);

    return this.httpClient.post<Candidate>("http://localhost:8080/createcandidate", data);
  }

  public getCandidatesList(){
    console.log('test');
    return this.httpClient.get<any>("http://localhost:8080/candidats");
  }

  public downloadFile(pathCv:String){
    
    return this.httpClient.get<any>("http://localhost:8080//downloadFile"+"/"+ pathCv);
  }

  

/*
  saveUserProfile(formData: FormData){
    return this.httpClient.post("http://localhost:8080/candidats/create", formData);
    
  }*/
}
