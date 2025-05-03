import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignDepartmentComponent } from '../assign-department/assign-department.component';
import { AppointmentAssignComponent } from '../appointment-assign/appointment-assign.component';

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
    private route:ActivatedRoute,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      console.warn(params)
      this.http.get('http://localhost:3000/getPatientTreatments/'+params.id).subscribe((data:any)=>{
        console.warn(data)
        console.warn(data.length)
        this.patientId=params.id
       this.treatments=data.data
      })

      this.http.get('http://localhost:3000/getPatientChiefComplaint/'+params.id).subscribe((data:any)=>{
        console.warn(data)
        if(data.result!="No data found"){
          this.chiefComplaint=data.result
        }
      })
    })
  }

  appointment(appointment:any){
    console.warn(appointment)
    const dialogref=this.dialog.open(AppointmentAssignComponent , {
      data:appointment,
      width:'500px',
    })

    
  }

  getData(){
    this.http.get('http://localhost:3000/getPatientTreatments/'+this.patientId).subscribe((data:any)=>{
      console.warn(data)
      if(data.result!="No data found"){
        this.treatments=data.result
      }
    })

    this.http.get('http://localhost:3000/getPatientChiefComplaint/'+this.patientId).subscribe((data:any)=>{
      console.warn(data)
      if(data.result!="No data found"){
        this.chiefComplaint=data.result
      }
    })
  }

  changetab(){
    this.isTreatment=!this.isTreatment
  }

  startTreatment(complaint:any){
    const dialogRef=this.dialog.open(AssignDepartmentComponent , {
      data:complaint,
      width:'500px',
    })

    dialogRef.afterClosed().subscribe((result:any)=>{
      this.getData()
    })
  }

  registerComplaint(){
    this.router.navigate([`/omdr/register-complaint/${this.patientId}`])
  }

}
