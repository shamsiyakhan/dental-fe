import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route:Router,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.getPatients()
  }


  patients:any[] = [ 

        {
          fullname:'khan',
          userid:201
        }

  ];

  pendingBills = [
    { name: 'Liam Carter', amount: 20, image: 'https://randomuser.me/api/portraits/men/13.jpg' },
    { name: 'Ethan Brooks', amount: 20, image: 'https://randomuser.me/api/portraits/men/14.jpg' },
    { name: 'Noah Bennett', amount: 20, image: 'https://randomuser.me/api/portraits/men/15.jpg' },
    { name: 'Emma Blake', amount: 20, image: 'https://randomuser.me/api/portraits/women/16.jpg' },
    { name: 'Olivia Carter', amount: 20, image: 'https://randomuser.me/api/portraits/women/17.jpg' },
    { name: 'Aiden Sullivan', amount: 20, image: 'https://randomuser.me/api/portraits/men/18.jpg' },
    { name: 'Ava Morgan', amount: 20, image: 'https://randomuser.me/api/portraits/women/19.jpg' },
    { name: 'Lucas Graham', amount: 20, image: 'https://randomuser.me/api/portraits/men/20.jpg' },
    { name: 'Mason Clark', amount: 20, image: 'https://randomuser.me/api/portraits/men/21.jpg' },
    { name: 'Sophia Bennett', amount: 20, image: 'https://randomuser.me/api/portraits/women/22.jpg' },
    { name: 'Mia Sullivan', amount: 20, image: 'https://randomuser.me/api/portraits/women/23.jpg' },
    { name: 'Oliver Hayes', amount: 20, image: 'https://randomuser.me/api/portraits/men/24.jpg' },
    { name: 'Ella Monroe', amount: 20, image: 'https://randomuser.me/api/portraits/women/25.jpg' },
    { name: 'Henry Foster', amount: 20, image: 'https://randomuser.me/api/portraits/men/26.jpg' }
  ];


  getPatients(){
    this.http.get('http://localhost:3000/getpatients').subscribe((data:any)=>{
      this.patients=data
    })
  }


  viewPatient(patient:any){
    this.route.navigate([`/clerk/patient-history/${patient.userid}`])
  }

  register(){

    this.route.navigate(['/clerk/addpatient'])

  }
}
