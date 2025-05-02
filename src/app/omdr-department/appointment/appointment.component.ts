import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  general=true
  oral=false
  constructor(private rotue:Router) { }

  
  ngOnInit(): void {
  }

  general1(){
    this.general=true
    this.oral=false;
    this.rotue.navigate(['omdr/allappointment'])


  }
  oral1(){
    this.general=false
    this.oral=true;

  }

}
