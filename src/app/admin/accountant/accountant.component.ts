import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.scss']
})
export class AccountantComponent implements OnInit {

  accountants: any[] = [];
  showForm = false;
  accountant = {
    fullname: '',
    email: '',
    password: '',
    address: '',
    gender: '',
    marital_status: '',
    dob: '',
    phone: '',
    emergency_contact: '',
    emergency_name: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAccountants();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  getAccountants() {
    this.http.get<any>('http://localhost:3000/get-accountant').subscribe({
      next: (res) => {
        this.accountants = res.result;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  addAccountant() {

    let payload={...this.accountant ,password:window.btoa(this.accountant.password) }
    this.http.post<any>('http://localhost:3000/add-accountant', payload).subscribe({
      next: (res) => {
        alert('Accountant added successfully!');
        this.showForm = false;
        this.getAccountants();
        this.accountant = {
          fullname: '',
          email: '',
          password: '',
          address: '',
          gender: '',
          marital_status: '',
          dob: '',
          phone: '',
          emergency_contact: '',
          emergency_name: ''
        };
      },
      error: (err) => {
        console.error(err);
        alert('Failed to add accountant');
      }
    });
  }
}
