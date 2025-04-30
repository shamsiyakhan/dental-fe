import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  professional=this.fb.group({
    depatmentid:[''],
    departmentname: [''],
    experience: [''],
    qualification: [''],
    specialization: [''],
    biography:['']
  })

  ngOnInit(): void {
  }
  submit(){
    
  }

}
