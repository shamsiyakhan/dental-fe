import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  doctors:any[]=[]
  departments:any[]=[]

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.getDoctorsList()
    this.getDepartmentsList()
  }
  

  getDoctorsList(){
    const deptString = localStorage.getItem('department');

    if (deptString) {
      const dept = JSON.parse(deptString); 
      const deptId = dept.dept_id;
    
      this.http.get(`http://localhost:3000/getDoctors/${deptId}`).subscribe((data: any) => {
        this.doctors = data.data;
        console.log(this.doctors);
      });
    } 
  }

  getDepartmentsList(){
    this.http.get('http://localhost:3000/departments').subscribe((data:any)=>{
      this.departments = data.result
      console.log(this.departments)
    })
  }

  onDepartmentChange(event: Event): void {
    const selectedDeptId = (event.target as HTMLSelectElement).value;
    console.log('Selected department ID:', selectedDeptId);
  
   
  }
  
  

}
