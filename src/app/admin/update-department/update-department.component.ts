import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {
 departmentForm: any;
  constructor(
    private dialogRef: MatDialogRef<UpdateDepartmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb: FormBuilder 
  ) { 
        this.departmentForm = this.fb.group({
      name: [''],
      hodname: [''],
      username: [''],
      dept_password: ['']
    });
  }

  ngOnInit(): void {
    console.warn(this.data) 
    this.departmentForm.patchValue(this.data);
    this.departmentForm.patchValue({dept_password:window.atob(this.data.dept_password)})
    this.departmentForm.patchValue({username:this.data.dept_username})
    this.departmentForm.patchValue({name:this.data.dept_name})
  }

  cancel(){
    this.dialogRef.close();
  }

  onSubmit(){
    console.log(this.departmentForm.value);
    this.dialogRef.close(this.departmentForm.value);
  }
}
