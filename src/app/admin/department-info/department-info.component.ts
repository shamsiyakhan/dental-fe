import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-info',
  templateUrl: './department-info.component.html',
  styleUrls: ['./department-info.component.scss']
})
export class DepartmentInfoComponent implements OnInit {
 treatment=true
 doctor=false
 patient =false
  constructor() { }

  ngOnInit(): void {
  }

  treatment1(){
    this.treatment=true
    this.doctor=false;
    this.patient=false

  }
  doctor1(){
    this.treatment=false
    this.doctor=true;
    this.patient=false

  }
  patient1(){
    this.treatment=false;
    this.doctor=false;
    this.patient=true

  }

}
