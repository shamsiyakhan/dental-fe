import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

profileForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http:HttpClient
  ) {
    this.getUserDetails()
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      title: ['Dr.'],
      fullname: [''],
      email: [''],
      phone: [''],
      dob: [''],
      gender: [''],
      marital_status: [''],
      address: ['']
    });
  }


  getUserDetails(){
    let admin_id=localStorage.getItem('id');
    this.http.post('http://localhost:3000/api/getAdmins', { id:admin_id }).subscribe((data:any)=>{
      this.profileForm.patchValue(data.result[0])
      console.warn(this.profileForm.value)
      data.result[0].dob=this.profileForm.value.dob.split('T')[0]
      this.profileForm.patchValue(data.result[0])
    });
  }
  onSubmit() {
    console.log(this.profileForm.value);
  }

  updateUserDetials(){
    let admin_id=localStorage.getItem('id');
    let body={...this.profileForm.value,id:admin_id}
    this.http.post('http://localhost:3000/api/updateAdminDetails', body).subscribe((data:any)=>{
      console.warn(data)
     Swal.fire({
       icon: 'success',
       title: 'Profile Updated',
       text: 'Your profile has been updated successfully.',
        confirmButtonText: 'OK'
     });
     this.getUserDetails()
    });

  }

}
