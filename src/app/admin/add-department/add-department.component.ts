import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
  departmentForm: any;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddDepartmentComponent>
  ) { }

  ngOnInit(): void {
    this.departmentForm = this.fb.group({
      name: [''],
      hodname: [''],
      username: [''],
      dept_password: ['']
    });
  }

  onSubmit(){
    console.log(this.departmentForm.value);
    this.dialogRef.close(this.departmentForm.value);
  }

  close(){
    this.dialogRef.close();
  }

}
