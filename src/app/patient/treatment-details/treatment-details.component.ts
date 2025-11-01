import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { jsPDF } from "jspdf"; // <-- requires npm install jspdf

@Component({
  selector: 'app-treatment-details',
  templateUrl: './treatment-details.component.html',
  styleUrls: ['./treatment-details.component.scss']
})
export class TreatmentDetailsComponent implements OnInit {

  treatmentHistory: any[] = [];
  selectedTreatmentId: string | null = null;
  selectedTreatmentDetails: any = null;
  loadingHistory = false;
  loadingDetails = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const complaintId = this.route.snapshot.paramMap.get('id');
    if (complaintId) {
      this.getTreatmentHistory(complaintId);
    }
  }

  getTreatmentHistory(complaintId: string) {
    this.loadingHistory = true;
    this.http.get(`http://localhost:3000/api/getTreatmentHistory/${complaintId}`)
      .subscribe({
        next: (res: any) => {
          this.treatmentHistory = res.treatmentHistory || [];
          this.loadingHistory = false;

          if (this.treatmentHistory.length > 0) {
            // Prefer an "In Progress" treatment if exists
            const inProgress = this.treatmentHistory.find(t => (t.status || '').toLowerCase() === 'in progress' || (t.status || '').toLowerCase() === 'in-progress');
            const defaultSelect = inProgress || this.treatmentHistory[this.treatmentHistory.length - 1];
            this.getSpecificTreatment(defaultSelect.treatment_id);
          } else {
            // No treatments
            this.selectedTreatmentDetails = null;
            this.selectedTreatmentId = null;
          }
        },
        error: (err) => {
          console.error('Error fetching treatment history', err);
          this.loadingHistory = false;
        }
      });
  }

  getSpecificTreatment(treatmentId: string) {
    if (!treatmentId) return;
    this.selectedTreatmentId = treatmentId;
    this.loadingDetails = true;
    this.http.get(`http://localhost:3000/api/getSpecificTreatment/${treatmentId}`)
      .subscribe({
        next: (res: any) => {
          // The API returns structured treatment info (see your example)
          this.selectedTreatmentDetails = res;
          this.loadingDetails = false;
        },
        error: (err) => {
          console.error('Error fetching specific treatment', err);
          this.selectedTreatmentDetails = null;
          this.loadingDetails = false;
        }
      });
  }

  // Download prescription as PDF using jsPDF
  // Note: requires `npm install jspdf` and proper typing
  downloadPrescription(prescription: any) {
    if (!prescription) return;

    const doc = new jsPDF({ unit: 'pt', format: 'a4' });

    const marginLeft = 40;
    let y = 40;

    doc.setFontSize(16);
    doc.text("Prescription", marginLeft, y);
    y += 25;

    doc.setFontSize(11);
    doc.text(`Prescription ID: ${prescription.prescription_id || '-'}`, marginLeft, y);
    y += 18;
    doc.text(`Date: ${prescription.prescription_date || '-'}`, marginLeft, y);
    y += 18;
    doc.text(`Doctor Notes:`, marginLeft, y);
    y += 14;

    // doctor notes (wrap)
    const splitNotes = doc.splitTextToSize(prescription.doctor_notes || 'N/A', 520);
    doc.text(splitNotes, marginLeft, y);
    y += splitNotes.length * 12 + 8;

    if (prescription.medications && prescription.medications.length > 0) {
      doc.text("Medications:", marginLeft, y);
      y += 16;

      prescription.medications.forEach((m: any, idx: number) => {
        const medText = `${idx + 1}. ${m.medication_name} — ${m.dosage} • ${m.frequency} • ${m.duration} • Qty: ${m.quantity}`;
        const splitMed = doc.splitTextToSize(medText, 520);
        doc.text(splitMed, marginLeft, y);
        y += splitMed.length * 12 + 6;
      });
    } else {
      doc.text("No medications listed.", marginLeft, y);
      y += 18;
    }

    // Footer / patient & treatment info (if present)
    y += 10;
    doc.setLineWidth(0.5);
    doc.line(marginLeft, y, 560, y);
    y += 12;

    if (this.selectedTreatmentDetails) {
      const t = this.selectedTreatmentDetails;
      doc.text(`Treatment: ${t.treatment_name || '-'}`, marginLeft, y);
      y += 14;
      doc.text(`Status: ${t.status || '-'}`, marginLeft, y);
      y += 14;
      doc.text(`Date: ${t.issue_date || '-'}`, marginLeft, y);
      y += 18;
    }

    // Save file
    const fileName = `Prescription_${prescription.prescription_id || this.selectedTreatmentId || 'unknown'}.pdf`;
    doc.save(fileName);
  }

  // helper to show "No prescriptions" in UI easily
  hasPrescriptions(): boolean {
    const s = this.selectedTreatmentDetails;
    return !!(s && s.prescriptions && s.prescriptions.length > 0);
  }
}
