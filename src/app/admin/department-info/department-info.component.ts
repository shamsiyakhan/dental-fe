import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TreatmentDialogComponent } from '../treatment-dialog/treatment-dialog.component';
import { EditTreatmentComponent } from '../edit-treatment/edit-treatment.component';

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
 newDoctor=false
 profileForm!: FormGroup;
 department_id:any
  constructor(
    private route:Router,
    private fb: FormBuilder,
    private router:ActivatedRoute,
    private http:HttpClient,
    private dialog: MatDialog
  ) { }

    displayedColumns: string[] = ['name', 'charge', 'actions'];
    dataSource = [
      { treatment_name: 'Dental Crown (PFM)', total_charges: '₹4,000' },
    ];
  
    ngOnInit(): void {

      this.router.params.subscribe((params:any)=>{
        console.warn(params['id'])
        this.department_id=params['id']
        this.getDepartments()
      })
      this.profileForm = this.fb.group({
        title: ['Dr.'],
        fullName: ['Dave Affleck'],
        email: ['daveaffleck@gmail.com'],
        phone: ['+91 7879652334'],
        dob: ['1994-03-29'],
        gender: ['Male'],
        maritalStatus: ['Single'],
        address: ['High Street, B2B Building, Pune, India - 411090']
      });
    }
  getDepartments() {
   this.http.get('http://localhost:3000/api/getTreatment/' + this.department_id).subscribe((data:any)=>{
      console.warn(data.treatments)
      this.dataSource=data.treatments
      console.warn(this.dataSource)
    })
  }

  openTreatmentDialog() {
  const dialogRef = this.dialog.open(TreatmentDialogComponent, {
    width: '600px',
     panelClass: 'treatment-dialog-panel' 
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Data to send API:', result);
      this.getDepartments()
      // call your API here
    }
  });
}


    editTreatment(treatment: any) {
      console.log('Edit:', treatment);
      const dialogRef = this.dialog.open(EditTreatmentComponent, {
        width: '600px',
        data: treatment,
        panelClass: 'treatment-dialog-panel'
      });
    }
  
    deleteTreatment(treatment: any) {
      console.log('Delete:', treatment);
    }

  treatment1(){
    this.treatment=true
    this.doctor=false;
    this.patient=false
    this.newDoctor=false

  }
  doctor1(){
    this.treatment=false
    this.patient=false;
    this.newDoctor=false
    this.doctor=true

  }
  patient1(){
    this.treatment=false;
    this.doctor=false;
    this.newDoctor=false
    this.patient=true;

  }
  addNew(){
    this.treatment=false;
    this.doctor=false;
    this.patient=false;
    this.newDoctor=true
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

  viewprofile(){
    console.warn('called profile')
        this.route.navigate(['admin/view-pro'])
        
  }
    onSubmit() {
      console.log(this.profileForm.value);
    }

}
