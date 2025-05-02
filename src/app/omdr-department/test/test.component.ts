import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private route:Router) { }
  patients = [
    { name: 'Vihaan Malhotra', id: '990919', image: 'assets/doc1.jpg' },
    { name: 'Nora Bansal', id: '890877', image: 'assets/doc2.jpg' },
    { name: 'Vihaan Malhotra', id: '990919', image: 'assets/doc3.jpg' },
    { name: 'Nora Bansal', id: '890877', image: 'assets/doc4.jpg' },
    { name: 'Vihaan Malhotra', id: '990919', image: 'assets/doc5.jpg' },
    { name: 'Nora Bansal', id: '890877', image: 'assets/doc1.jpg' },
    { name: 'Vihaan Malhotra', id: '990919', image: 'assets/doc2.jpg' },
    { name: 'Nora Bansal', id: '890877', image: 'assets/doc3.jpg' },
    { name: 'Vihaan Malhotra', id: '990919', image: 'assets/doc2.jpg' },
    { name: 'Nora Bansal', id: '890877', image: 'assets/doc3.jpg' },
    { name: 'Vihaan Malhotra', id: '990919', image: 'assets/doc2.jpg' },
    { name: 'Nora Bansal', id: '890877', image: 'assets/doc3.jpg' },
    { name: 'Nora Bansal', id: '890877', image: 'assets/doc3.jpg' },
    { name: 'Vihaan Malhotra', id: '990919', image: 'assets/doc2.jpg' },
    { name: 'Nora Bansal', id: '890877', image: 'assets/doc3.jpg' },
    { name: 'Nora Bansal', id: '890877', image: 'assets/doc3.jpg' },
    { name: 'Vihaan Malhotra', id: '990919', image: 'assets/doc2.jpg' },
    { name: 'Nora Bansal', id: '890877', image: 'assets/doc3.jpg' },
    // Add all other patients similarly
  ];
  ngOnInit(): void {
  }

  viewtest(){
      this.route.navigate(['omdr/viewtest'])
  }

}
