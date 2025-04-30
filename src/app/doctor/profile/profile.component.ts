import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private rotue:Router) { }

  activeTab: string = 'identity';

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  personal(){

  }

  ngOnInit(): void {
  }

}
