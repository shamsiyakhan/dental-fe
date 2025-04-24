import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {


  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  isActive(route:any){
    if(this.router.url.includes(route)){
      return 'activeClass'
    }else{
      return 'inactiveClass'
    }
  }

  redirect(route:any){
    this.router.navigate([`/patient/${route}`])
  }

}
