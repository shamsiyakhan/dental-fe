import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

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
    if(this.router.url.includes(route)){
      return 'activeClass'
    }else{
      return 'inactiveClass'
    }
  }

  redirect(route:any){
    this.router.navigate([`/admin/${route}`])
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/auth/admin-login'])
  }

}
