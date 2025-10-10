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
  user_id:any
  constructor(
    private http:HttpClient,
    private router:Router,
    private obj:ConsultationSaveService
  ) { }

  ngOnInit() {
   
    console.warn("hello")
    var doc=localStorage.getItem('doctor')
    this.user_id=JSON.parse(doc || '{}').doctor_id
    console.warn(this.user_id)
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
    console.warn("get todays appointment called")
    const deptId = localStorage.getItem('department')
    const deptString = JSON.parse(deptId || '{}');
    this.http.get('http://localhost:3000/getTodayAppointment/'+deptString.dept_id+'/'+this.user_id).subscribe((data:any)=>{
      console.warn(data)
      this.todaysAppointments=data.result
    })
  }


}
