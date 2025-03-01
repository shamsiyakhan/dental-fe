import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/commanServices/api/api.service';

@Component({
  selector: 'app-patient-treatment',
  templateUrl: './patient-treatment.component.html',
  styleUrls: ['./patient-treatment.component.scss']
})
export class PatientTreatmentComponent implements OnInit {
  url:any
  constructor(
    private route:ActivatedRoute,
    private http:HttpClient,
    private api:ApiService,
    private router:Router
  ) { }
  treatments:any['']
  patientId:any

  ngOnInit(): void {
    this.url=this.api.url
    console.warn(this.url)
      this.route.params.subscribe(data=>{
        // console.warn(data['id'])
        this.patientId=data['id']
        const fullUrl = `${this.url}/get-treatments/${this.patientId}`;
        console.log('Final API URL:', fullUrl); // Debugging
      
        this.http.get(fullUrl).subscribe((data: any) => {
          this.treatments = data.msg;
        });
      })

   
  }

  getDiagnosisInfo(treatment: any) {
    console.log('Fetching Diagnosis Info for:', treatment.treatment_name);
    this.router.navigate([`/admin/patient/treatment/${treatment}`]);
  }

}
