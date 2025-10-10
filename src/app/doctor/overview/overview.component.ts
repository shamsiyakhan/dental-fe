import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {
  isHidden = false;
  private breakpoint = 992;
  resizeListener: any;

  constructor(private router: Router) {}

  ngOnInit() {
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

  isActive(route: string) {
    return this.router.url.includes(`/doctor/${route}`) ? 'activeClass' : 'inactiveClass';
  }

  redirect(route: string) {
    this.router.navigate([`/doctor/${route}`]);
  }

  logout() {
    localStorage.clear();
    setTimeout(() => localStorage.clear(), 1000);
    this.router.navigate(['/auth/doctor-login']);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeListener);
  }
}
