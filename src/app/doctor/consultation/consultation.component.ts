import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationSaveService } from '../consultation-save.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
  todaysAppointments:any[]=[]
  constructor(
    private http:HttpClient,
    private router:Router,
    private obj:ConsultationSaveService
  ) { }

  ngOnInit() {
    this.getTodaysAppointments()
  }

  activeTab: string = 'identity';

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  saveInfo(consultation:any){
    this.obj.consultationData=consultation
    this.router.navigate(['/doctor/info-consultation']);
  }

  
  getTodaysAppointments(){
    const deptId = localStorage.getItem('department')
    const deptString = JSON.parse(deptId || '{}');
    this.http.get('http://localhost:3000/getTodayAppointment/'+deptString.dept_id).subscribe((data:any)=>{
      console.warn(data)
      this.todaysAppointments=data.result
    })
  }


}
