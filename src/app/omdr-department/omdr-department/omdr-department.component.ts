import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-omdr-department',
  templateUrl: './omdr-department.component.html',
  styleUrls: ['./omdr-department.component.scss']
})
export class OmdrDepartmentComponent implements OnInit {

  isHidden = false;
private breakpoint = 992;
resizeListener: any;

constructor(
     private router:Router
   ) { }
 
   ngOnInit(): void {
     this.isHidden = window.innerWidth < this.breakpoint ? true : false;

  this.resizeListener = () => {
    if (window.innerWidth >= this.breakpoint) {
      this.isHidden = false;
    }
  };

  window.addEventListener('resize', this.resizeListener);
   }

   toggleSidebar() {
  this.isHidden = !this.isHidden;
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
