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
     if(this.router.url.includes(`/doctor/${route}`)){
       return 'activeClass'
     }else{
       return 'inactiveClass'
     }
   }
 
   redirect(route:any){
     this.router.navigate([`/doctor/${route}`])
   }
 
 }