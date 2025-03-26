import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  back(){
    console.log("Navigating to /login");
    this.route.navigate(['auth/login']);
  }

}
