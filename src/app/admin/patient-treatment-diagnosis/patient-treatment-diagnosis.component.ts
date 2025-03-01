import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/commanServices/api/api.service';

@Component({
  selector: 'app-patient-treatment-diagnosis',
  templateUrl: './patient-treatment-diagnosis.component.html',
  styleUrls: ['./patient-treatment-diagnosis.component.scss']
})
export class PatientTreatmentDiagnosisComponent implements OnInit {
  url:any
  treatmentId:any
  diagnosisHistory:any
  constructor(
    private http:HttpClient,
    private api:ApiService,
    private activatedRouter:ActivatedRoute
  ) {
    this.url=api.url
   }



  ngOnInit(): void {
    this.activatedRouter.params.subscribe((data:any)=>{
      this.treatmentId=data['id']
    })
    console.log(this.url+'getDiagnosis/'+this.treatmentId)
    this.http.get(this.url+'/getDiagnosis/'+this.treatmentId).subscribe((data:any)=>{
      console.log(data)
      this.diagnosisHistory=data.msg
    }
    )
  }

}
