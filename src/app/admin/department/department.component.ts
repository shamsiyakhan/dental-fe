import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddDepartmentComponent } from '../add-department/add-department.component';
import Swal from 'sweetalert2';
import { UpdateDepartmentComponent } from '../update-department/update-department.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  department_list:any[] = [];
  constructor(
    private route:Router,
    private http:HttpClient,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.getDepartments()
  }

  departInfo(dept_id:any){
      this.route.navigate([`admin/departInfo/${dept_id}`]);
  }

  getDepartments(){
    this.http.get('http://localhost:3000/api/getDepartments').subscribe((data:any)=>{
      this.department_list=data
      console.warn(this.department_list)
    })
  }

  addDepartment(){
    this.dialog.open(AddDepartmentComponent,{
      width:'500px'
    }).afterClosed().subscribe(val=>{
      val={...val , dept_password:window.btoa(val.dept_password)}
      this.http.post('http://localhost:3000/api/add-department',val).subscribe((data:any)=>{
        console.warn(data)
        Swal.fire({
          icon: 'success',
          text: 'Department Added Successfully',
          confirmButtonText: 'OK'
        })
      })
      this.getDepartments()
    })
  }

  updateDepartmentInfo(event:Event , department:any){
    event.stopPropagation();
     this.dialog.open(UpdateDepartmentComponent,{
      width:'400px',
      data:department
    }).afterClosed().subscribe(val=>{
      if(val){
      val={...val , dept_password:window.btoa(val.dept_password)}
      this.http.put(`http://localhost:3000/api/update-department/${department.dept_id}`,{...val} ).subscribe((data:any)=>{
        console.warn(data)
        Swal.fire({
          icon: 'success',
          text: 'Updated Successfully',
          confirmButtonText: 'OK'
        })
         this.getDepartments()
      })
     
      }

    })

  
  }

  deleteDepartment(event:Event , department:any){
    event.stopPropagation();
    Swal.fire({
      title: 'Are you sure?',
      text: `Deleting a department(${department.dept_name}) will remove all associated data.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:3000/api/delete-department/${department.dept_id}`).subscribe((data:any)=>{
          console.warn(data)
          this.getDepartments()
        })
        Swal.fire(
          'Deleted!',
          'Department has been deleted.',
          'success'
        )
      }
    })
  }

}
