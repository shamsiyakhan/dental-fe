import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-complaint',
  templateUrl: './register-complaint.component.html',
  styleUrls: ['./register-complaint.component.scss']
})
export class RegisterComplaintComponent implements OnInit {

  patientInfo:any
  patientId:any
  testsList:any[]=[]
  payment_mode=['Cash','Card','UPI']
  total: number = 50;
  selectedTests: any[] = []; // To store selected test IDs
  constructor(
    private http:HttpClient,
    private route:ActivatedRoute,
    private router:Router,
    private fb:FormBuilder
  ) { }

  registerComplaintForm = this.fb.group({
    patientid:[''],
    issue_reported:[''],
    total_charge:[''],
    payment_mode:[''],
    payment_status:['paid'],
    tests:[['']],
    referred_dept:['']
  })

  ngOnInit(): void {
    this.registerComplaintForm.patchValue({ 
      referred_dept:localStorage.getItem('department_id'),
    })
    this.route.params.subscribe((params:any)=>{
      console.warn(params)
      console.warn(params)
      this.patientId=params.id

      this.registerComplaintForm.patchValue({
        patientid:params.id
      })

      this.http.get(`http://localhost:3000/getPatient/${this.patientId}`).subscribe((res:any)=>{
        console.warn(res)
        this.patientInfo=res[0]
      })
    })

    this.getTestsList()
  }

  getTestsList(){
    this.http.get('http://localhost:3000/getTests/18MIA4AsbJ').subscribe((data:any)=>{
      console.warn(data)
      this.testsList=data.result
    })
  }

  onPaymentsModeChange(event: any): void {
    const selectedMode = (event.target as HTMLSelectElement).value;
    console.log('Selected payment mode:', selectedMode);
    this.registerComplaintForm.patchValue({
      payment_mode: selectedMode
    })
  }

  submitComplaint(){
    console.warn(this.registerComplaintForm.value)
    this.http.post('http://localhost:3000/chiefRegister',this.registerComplaintForm.value).subscribe((data:any)=>{
      console.warn(data)
      Swal.fire({
        title: 'Success!',
        text: 'chief Complaint registered Successfully',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
        this.router.navigate(['/omdr/patient-info/',this.patientId])
        
    })
  }

  onTestSelectionChange(event: any) {
    const selectedOptions = event.value; // This is an array of selected values
  
    // Update selected test IDs in the form
    this.registerComplaintForm.get('tests')?.setValue(selectedOptions);
  
    // Calculate total
    let calculatedTotal = 50;
    for (let id of selectedOptions) {
      const test = this.testsList.find((t) => t.treatment_id === id);
      if (test) {
        calculatedTotal += +test.treatment_price;
      }
    }
  
    this.total = calculatedTotal;
    console.warn(this.total)
    this.registerComplaintForm.patchValue({
      total_charge: this.total.toString()
    })
  }
  

  onCheckboxChange(event: any, test: any) {
    const id = test.treatment_id;
    const isChecked = event.target.checked;

    // Update selectedTests array and total charge
    if (isChecked) {
      // Add the selected test ID to the tests array
      this.selectedTests.push(id);
      this.total += +test.treatment_price;  // Add the price of the selected test to the total
    } else {
      // Remove the deselected test ID from the tests array
      this.selectedTests = this.selectedTests.filter(tid => tid !== id);
      this.total -= +test.treatment_price;  // Subtract the price of the deselected test from the total
    }

    // Update the tests array in the form
    this.registerComplaintForm.get('tests')?.setValue(this.selectedTests);
    // Update the total charge in the form
    this.registerComplaintForm.patchValue({
      total_charge: this.total.toString()
    });
    

  }

  getTestNameById(id: string): string {
    const test = this.testsList.find(t => t.treatment_id === id);
    return test ? test.treatment_name : '';
  }
  

}
