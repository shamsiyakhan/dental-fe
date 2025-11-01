import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit, OnDestroy {
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

  isActive(route: any) {
    return this.router.url.includes(route) ? 'activeClass' : 'inactiveClass';
  }

  redirect(route: any) {
    this.router.navigate([`/patient/${route}`]);
  }

  logout() {
    localStorage.clear();
    setTimeout(() => localStorage.clear(), 1000);
    this.router.navigate(['auth/login']);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeListener);
  }
}
