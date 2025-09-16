import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/commanServices/api/api.service';



@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'email', 'phone_no', 'gender' , 'dob'  , 'emergency_contact_name' , 'emergency_contact_number' , ];
  dataSource = new MatTableDataSource<any>();
  url:any
  constructor(
    private http:HttpClient,
    private api:ApiService,
    private router:Router
  ) { 
    this.url=api.url
  }

  ngOnInit(): void {
    console.warn("Patient component initialized");
    this.http.get(this.url+'/getPatients').subscribe((data:any)=>{
      console.log(data)
      this.dataSource.data=data   }

    )
  }

  redirectTreatment(id:any){
    this.router.navigate(['/admin/patient/', id])
  }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
