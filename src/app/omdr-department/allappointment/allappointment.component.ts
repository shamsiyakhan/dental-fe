import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allappointment',
  templateUrl: './allappointment.component.html',
  styleUrls: ['./allappointment.component.scss']
})
export class AllappointmentComponent implements OnInit {

  constructor() { }
  activeTab: string = 'upcoming';


  appointments = [
    {
      image: 'assets/doc3.jpg',
      name: 'Zara Khan',
      purpose: 'Initial Oral Checkup',
      id: '980789',
      date: '8th Mar, 2025',
      time: '6:00 pm'
    },
    {
      image: 'assets/doc1.jpg',
      name: 'Aanya Sharma',
      purpose: 'Medical & Oral History Consultation',
      id: '890786',
      date: '8th Mar, 2025',
      time: '1:00 pm'
    },
    {
      image: 'assets/doc4.jpg',
      name: 'Aanya Sharma',
      purpose: 'Medical & Oral History Consultation',
      id: '890786',
      date: '8th Mar, 2025',
      time: '1:00 pm'
    },
    {
      image: 'assets/doc3.jpg',
      name: 'Zara Khan',
      purpose: 'Initial Oral Checkup',
      id: '980789',
      date: '8th Mar, 2025',
      time: '6:00 pm'
    },
    // ... other appointments
  ];
  
  
  selectTab(tab: string) {
    this.activeTab = tab;
  }
  ngOnInit(): void {
  }

}
