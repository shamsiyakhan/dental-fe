import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  patients = [
    { name: 'Vihaan Malhotra', id: 990919, image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Nora Bansal', id: 890877, image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Nathan Blake', id: 999999, image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Caleb Hartman', id: 898909, image: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { name: 'Ibrahim Qureshi', id: 777333, image: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { name: 'Saanvi Joshi', id: 367889, image: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { name: 'Yuvan Bhatia', id: 782345, image: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { name: 'Fatima Siddiqui', id: 876289, image: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { name: 'Mikhail Ivanov', id: 897888, image: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { name: 'Tara Bhattacharya', id: 898888, image: 'https://randomuser.me/api/portraits/women/10.jpg' },
    { name: 'Reyansh Kulkarni', id: 897890, image: 'https://randomuser.me/api/portraits/men/11.jpg' },
    { name: 'Isla Morgan', id: 878909, image: 'https://randomuser.me/api/portraits/women/12.jpg' }
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






  register(){

    this.route.navigate(['/clerk/addpatient'])

  }
}
