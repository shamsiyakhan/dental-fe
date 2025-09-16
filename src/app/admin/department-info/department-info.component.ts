import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TreatmentDialogComponent } from '../treatment-dialog/treatment-dialog.component';
import { EditTreatmentComponent } from '../edit-treatment/edit-treatment.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-department-info',
  templateUrl: './department-info.component.html',
  styleUrls: ['./department-info.component.scss']
})
export class DepartmentInfoComponent implements OnInit {
 treatment=true
 doctor=false
 patient =false
 newDoctor=false
 profileForm!: FormGroup;
 department_id:any
 department_name:any
 doctors_List:any[]=[]
 
 currentPage = 1;
pageSize = 5;
searchTerm = '';
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
        this.getTreatments()
      })
      this.profileForm = this.fb.group({
        title: ['Dr.'],
        fullname: [''],
        email: [''],
        phone: [''],
        gender: [''],
        marital_status: [''],
        address: [''],
        password: ['']
      });

      this.getDepartmentInfo()
      this.getCurrentDepartmentDoctors()
    }
  getTreatments() {
   this.http.get('http://localhost:3000/api/getTreatment/' + this.department_id).subscribe((data:any)=>{
      console.warn(data.treatments)
      this.dataSource=data.treatments
      console.warn(this.dataSource)
    })
  }

  getDepartmentInfo(){
    console.warn("get department info called")
    this.http.get('http://localhost:3000/api/getDepartment/' + this.department_id).subscribe((data:any)=>{
      console.warn(data.result)
      this.department_name=data.result.dept_name
      console.warn("department name")
      console.warn(this.department_name)
    })
  }

  back(){
    window.history.back();
  }

  callAllFunctions(){
    this.getCurrentDepartmentDoctors()
    this.getTreatments()
    this.getDepartmentInfo()
    
  }

  filteredDoctors() {
  if (!this.searchTerm) return this.doctors_List;
  const term = this.searchTerm.toLowerCase();
  return this.doctors_List.filter(d => 
    d.fullname.toLowerCase().includes(term) ||
    (d.specialization && d.specialization.toLowerCase().includes(term))
  );
}

totalPages() {
  return Math.ceil(this.filteredDoctors().length / this.pageSize);
}

  openTreatmentDialog() {
  const dialogRef = this.dialog.open(TreatmentDialogComponent, {
    width: '600px',
    data: { departmentId: this.department_id },
     panelClass: 'treatment-dialog-panel' 
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Data to send API:', result);
      this.getTreatments()
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
      Swal.fire({
        title: 'Are you sure?',
        text: `Do you want to delete the treatment "${treatment.treatment_name}"?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.http.delete(`http://localhost:3000/api/deleteTreatment/${treatment.treatment_id}`).subscribe((data: any) => {
            console.warn(data);
            this.getTreatments();
          });
          Swal.fire(
            'Deleted!',
            'The treatment has been deleted.',
            'success'
          );
        }
      });
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

  getCurrentDepartmentDoctors(){
    console.warn("get doctors called")
    this.http.get(`http://localhost:3000/api/getDoctors/${this.department_id}`).subscribe((data:any)=>{
      console.warn(data)
     this.doctors_List=data.result
    })
  }


  
prevPage() {
  if (this.currentPage > 1) this.currentPage--;
}



  nextPage() {
  if (this.currentPage < this.totalPages()) this.currentPage++;
}


goToPage(page: number) {
  this.currentPage = page;
}



  viewprofile(doctorid:any){
    console.warn('called profile')
        this.route.navigate(['admin/view-pro'])
        
  }
    onSubmit() {
      let dept_id=this.router.snapshot.params['id']
      this.http.post('http://localhost:3000/api/addDoctor', {...this.profileForm.value , department:dept_id}).subscribe((response) => {
        console.log('Profile updated successfully', response);
        Swal.fire({
          icon: 'success',  
          title: 'Doctor Added',
          text: 'The doctor has been added successfully.',
          confirmButtonText: 'OK'
        });
        this.profileForm.reset();
        console.log(this.profileForm.value);
        this.callAllFunctions()
      });
    }

}
