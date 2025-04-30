import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-info',
  templateUrl: './department-info.component.html',
  styleUrls: ['./department-info.component.scss']
})
export class DepartmentInfoComponent implements OnInit {
 treatment=true
 doctor=false
 patient =false
 currentPage = 1;
 pageSize = 12;
  constructor() { }

  ngOnInit(): void {
  }

/*   treatments = [
    { name: 'Dental Crown (PFM)', charge: '₹4,000' },
    { name: 'Dental Crown (Zirconia)', charge: '₹9,000' },
    { name: 'Dental Bridge (3-unit, PFM)', charge: '₹12,000' },
    { name: 'Dental Bridge (3-unit, Zirconia)', charge: '₹25,000' },
    { name: 'Complete Denture (Single Arch)', charge: '₹8,000' },
    { name: 'Complete Denture (Both Arches)', charge: '₹15,000' },
    { name: 'Partial Denture (Acrylic)', charge: '₹3,000' },
    { name: 'Partial Denture (Cast Metal)', charge: '₹9,000' },
    { name: 'Implant-Supported Crown', charge: '₹35,000' },
    { name: 'Implant-Supported Denture', charge: '₹60,000' },
    { name: 'Post and Core', charge: '₹2,000' },
    { name: 'Tooth Preparation & Impression Taking', charge: '₹1,500' },
    { name: 'Prosthesis Repair & Relining', charge: '₹1,200' },
    { name: 'Full Mouth Rehabilitation', charge: '₹1,50,000' },
  ];

  editTreatment(treatment: any) {
    console.log('Edit:', treatment);
    
  }

  deleteTreatment(treatment: any) {
    console.log('Delete:', treatment);
   
  } */


    displayedColumns: string[] = ['name', 'charge', 'actions'];
    dataSource = [
      { name: 'Dental Crown (PFM)', charge: '₹4,000' },
      { name: 'Dental Crown (Zirconia)', charge: '₹9,000' },
      { name: 'Dental Bridge (3-unit, PFM)', charge: '₹12,000' },
      { name: 'Dental Bridge (3-unit, Zirconia)', charge: '₹25,000' },
      { name: 'Complete Denture (Single Arch)', charge: '₹8,000' },
      { name: 'Complete Denture (Both Arches)', charge: '₹15,000' },
      { name: 'Partial Denture (Acrylic)', charge: '₹3,000' },
      { name: 'Partial Denture (Cast Metal)', charge: '₹9,000' },
      { name: 'Implant-Supported Crown', charge: '₹35,000' },
      { name: 'Implant-Supported Denture', charge: '₹60,000' },
      { name: 'Post and Core', charge: '₹2,000' },
      { name: 'Tooth Preparation & Impression Taking', charge: '₹1,500' },
      { name: 'Prosthesis Repair & Relining', charge: '₹1,200' },
      { name: 'Full Mouth Rehabilitation', charge: '₹1,50,000' }
    ];
  
    editTreatment(treatment: any) {
      console.log('Edit:', treatment);
    }
  
    deleteTreatment(treatment: any) {
      console.log('Delete:', treatment);
    }

  treatment1(){
    this.treatment=true
    this.doctor=false;
    this.patient=false

  }
  doctor1(){
    this.treatment=false
    this.doctor=true;
    this.patient=false

  }
  patient1(){
    this.treatment=false;
    this.doctor=false;
    this.patient=true

  }

  get paginatedPatients() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.dataSource.slice(start, start + this.pageSize);
  }

  totalPages() {
    return Math.ceil(this.dataSource.length / this.pageSize);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) this.currentPage++;
  }

}
