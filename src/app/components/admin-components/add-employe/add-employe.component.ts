import { Component, OnInit } from '@angular/core';
import {  EmployeService } from '../../../services/employe.service';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadfileService } from '../../../services/uploadfile.service';

@Component({

  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  
  //user: employe = new employe();
  title = 'File-Upload-Save';
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;

  constructor(private employeService:EmployeService,private uploadService: UploadfileService ) {}

  createEmploye():void {
    /*this.employeService.createEmploye(this.user)
      .subscribe(  data => {
        alert("employe created successfully");
      } );
    };*/}
 
  ngOnInit() {}

  downloadFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '_File_Saved_Path');
    link.setAttribute('download', 'file_name.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
    }
    change($event) {
    this.changeImage = true;
    }
    changedImage(event) {
    this.selectedFile = event.target.files[0];
    }
    upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
    if (event.type === HttpEventType.UploadProgress) {
    this.progress.percentage = Math.round(100 * event.loaded / event.total);
    } else if (event instanceof HttpResponse) {
    alert('File Successfully Uploaded');
    }
    this.selectedFiles = undefined;
    }
    );
    }
    selectFile(event) {
    this.selectedFiles = event.target.files;
    }


 }


 


