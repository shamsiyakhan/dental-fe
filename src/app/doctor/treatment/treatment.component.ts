import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  activeTab: string = 'appointment';

  appointment = {
    patientName: '',
    age: null,
    gender: '',
    history: '',
    findings: ''
  };

  invoice = {
    treatment: '',
    amount: null,
    status: ''
  };

  prescription = {
    medicines: '',
    instructions: ''
  };

  isComplete = false;
  nextAppointmentDate: string = '';
}
