import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {

  treatments:any[]=[]
  chiefComplaint:any[]=[]
  isTreatment=true
  patientId:any
  constructor(
    private http:HttpClient,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
      console.warn(params)
      this.http.get('http://localhost:3000/getPatientTreatments/'+params.id).subscribe((data:any)=>{
        console.warn(data)
        this.patientId=params.id
        if(data.result!="No data found"){
          this.treatments=data.result
        }
      })

      this.http.get('http://localhost:3000/getPatientChiefComplaint/'+params.id).subscribe((data:any)=>{
        console.warn(data)
        if(data.result!="No data found"){
          this.chiefComplaint=data.result
        }
      })
    })
  }


  changetab(){
    this.isTreatment=!this.isTreatment
  }

  registerComplaint(){
    this.router.navigate([`/omdr/register-complaint/${this.patientId}`])
  }

}
