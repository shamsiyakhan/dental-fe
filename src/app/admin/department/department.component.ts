import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  department_list:any[] = [];
  constructor(
    private route:Router,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.getDepartments()
  }

  departInfo(dept_id:any){
      this.route.navigate([`admin/departInfo/${dept_id}`]);
  }

  getDepartments(){
    this.http.get('http://localhost:3000/api/getDepartments').subscribe((data:any)=>{
      this.department_list=data.result
    })
  }

}
