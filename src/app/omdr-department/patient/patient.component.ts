import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }
  patients:any[]=[]



  ngOnInit(): void {
    this.http.get('http://localhost:3000/getPatients').subscribe((data:any)=>{
      this.patients=data

      console.warn(this.patients)
    })
  }


  redirectToPatientInfo(id:any){
    this.router.navigate([`/omdr/patient-info/${id}`],{queryParams:{id:id}})
  }

}
