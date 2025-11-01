import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-omdr-department',
  templateUrl: './omdr-department.component.html',
  styleUrls: ['./omdr-department.component.scss']
})
export class OmdrDepartmentComponent implements OnInit {

constructor(
     private router:Router
   ) { }
 
   ngOnInit(): void {
   }
 
   isActive(route:any){
     if(this.router.url.includes(`/omdr/${route}`)){
       return 'activeClass'
     }else{
       return 'inactiveClass'
     }
   }

   showOptions(){
    return localStorage.getItem('department_id')=='18MIA4AsbJ' ? true:false
   }
 
   redirect(route:any){
     this.router.navigate([`/omdr/${route}`])
   }

   logout(){
    localStorage.clear()
    setTimeout(() => {
      localStorage.clear();
    }, 1000);
    this.router.navigate(['/auth/department-login'])  
   }
 

}
