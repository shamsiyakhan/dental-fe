import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-treatment-dialog',
  templateUrl: './treatment-dialog.component.html',
  styleUrls: ['./treatment-dialog.component.scss']
})
export class TreatmentDialogComponent { 
  
  treatmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
     private http: HttpClient,
    public dialogRef: MatDialogRef<TreatmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    this.treatmentForm = this.fb.group({
      treatment_name: ['', Validators.required],
      total_charges: ['', Validators.required],
      had_sub_category: [false],
      dept_id: [''],
      subcategories: this.fb.array([])
    });
    
    this.treatmentForm.get('subcategories')?.valueChanges.subscribe(() => {
    if (this.treatmentForm.get('had_sub_category')?.value) {
      this.updateTotalCharges();
    }
  });

  // Also watch the checkbox
  this.treatmentForm.get('had_sub_category')?.valueChanges.subscribe((hasSub) => {
    if (hasSub && this.subcategories.length === 0) {
      this.addSubcategory();
    } else if (!hasSub) {
      this.treatmentForm.patchValue({ total_charges: '' });
    }
  });
}

updateTotalCharges() {
  const total = this.subcategories.controls.reduce((sum, ctrl) => {
    const charge = Number(ctrl.get('step_charges')?.value) || 0;
    return sum + charge;
  }, 0);
  this.treatmentForm.patchValue({ total_charges: total }, { emitEvent: false });
}

  get subcategories(): FormArray {
    return this.treatmentForm.get('subcategories') as FormArray;
  }

  addSubcategory() {
    const subcategoryGroup = this.fb.group({
      step_name: ['', Validators.required],
      step_charges: ['', Validators.required],
      step_sequence: ['', Validators.required]
    });
    this.subcategories.push(subcategoryGroup);
  }

  removeSubcategory(index: number) {
    this.subcategories.removeAt(index);
  }

  save() {
    const formValue = this.treatmentForm.value;
    if (!formValue.had_sub_category) {
      formValue.subcategories = [];
    }
    console.log('Payload to API:', formValue);
    let payload = {...formValue};
    payload.dept_id=this.data.departmentId;
    this.http.post('http://localhost:3000/api/addTreatmentAdmin', payload).subscribe({
      next: (res) => {
        console.log('Saved successfully', res);
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.error('Save failed', err);
        this.dialogRef.close(false);
      }
    });
  }
}