import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})


export class OverviewComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  isActive(route:any){
    if(this.router.url.includes(route)){
      return 'activeClass'
    }else{
      return 'inactiveClass'
    }
  }

  login(){
    this.router.navigate(['/auth/clerk-login'])
  }

  redirect(route:any){
    this.router.navigate([`/clerk/${route}`])
  }

}


