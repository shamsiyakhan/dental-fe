import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent implements OnInit {
  chiefComplaint: any[] = [];

  constructor(
    private http:HttpClient,
    private router:Router
  ) { 
 
  }
 getChiefComplaint() {
  let data2 = localStorage.getItem('patient');
  let data = JSON.parse(data2 || '{}');
  this.http.get(`http://localhost:3000/api/getChiefComplaint/${data.userid}`)
    .subscribe((data1: any) => {
      this.chiefComplaint = data1.chiefComplaint;
      console.log(this.chiefComplaint);
    });
}

  ngOnInit(): void {
    this.getChiefComplaint();
  }

  redirectToDetails(itemid: any) {
   this.router.navigate([`/patient/treatment-details/${itemid}`]);
  }

}
