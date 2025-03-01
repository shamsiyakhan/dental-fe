import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/commanServices/api/api.service';



@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'email', 'phone_no', 'gender' , 'dob'  , 'emergency_contact_name' , 'emergency_contact_number' , 'treatment'];
  dataSource = [];
  url:any
  constructor(
    private http:HttpClient,
    private api:ApiService,
    private router:Router
  ) { 
    this.url=api.url
  }

  ngOnInit(): void {
    this.http.get(this.url+'/get-patients').subscribe((data:any)=>{
      console.log(data)
      this.dataSource=data.msg
    }
    )
  }

  redirectTreatment(id:any){
    this.router.navigate(['/admin/patient/', id])
  }

}
