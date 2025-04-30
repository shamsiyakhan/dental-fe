import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      title: ['Dr.'],
      fullName: ['Dave Affleck'],
      email: ['daveaffleck@gmail.com'],
      phone: ['+91 7879652334'],
      dob: ['1994-03-29'],
      gender: ['Male'],
      maritalStatus: ['Single'],
      address: ['High Street, B2B Building, Pune, India - 411090']
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

}
