import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clerk',
  templateUrl: './clerk.component.html',
  styleUrls: ['./clerk.component.scss']
})
export class ClerkComponent implements OnInit {
   clerks:any[] = [];

  constructor(
    private http: HttpClient
  ) { }


  getClerks(){
    this.http.get('http://localhost:3000/get-clerks').subscribe((data: any) => {
      this.clerks = data.user;
      console.warn(this.clerks)
    }, error => {
      console.error('Error fetching clerks:', error);
    });
  }

  ngOnInit(): void {
    this.getClerks();
  }

  }


