import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-detailed-reports',
  templateUrl: './detailed-reports.component.html',
  styleUrls: ['./detailed-reports.component.scss']
})
export class DetailedReportsComponent implements AfterViewInit {

  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  // Selected Report
  selectedReport: string = 'treatmentDemand';

  // Date Filters
  fromDate = this.formatDate(new Date(new Date().getFullYear(), 0, 1));
  toDate = this.formatDate(new Date());

  // Table
  tableColumns: string[] = [];
  tableData: any[] = [];

  // List of Reports
  reports = [
    { id: 'treatmentDemand', name: 'Treatment Wise Demand' },
    { id: 'departmentDemand', name: 'Department Wise Demand' },
    { id: 'treatmentStatus', name: 'Treatment Status by Department' },
    { id: 'billing', name: 'Billing Report (Monthly)' },
    { id: 'doctorWise', name: 'Doctor Wise Treatments' },
    { id: 'paymentModes', name: 'Payment Mode Report' },
    { id: 'ageGroup', name: 'Patient Age Group Report' },
    { id: 'newVsReturning', name: 'New vs Returning Patients' },
    { id: 'cancellations', name: 'Cancelled / No-show Appointments' },
    { id: 'revenueShare', name: 'Department Revenue Contribution' }
  ];

  ngAfterViewInit(): void {
    this.loadReport();
  }

  onReportChange() {
    this.loadReport();
  }

  get activeReportName() {
  return this.reports.find(r => r.id === this.selectedReport)?.name || '';
}

  // Main Loader
  loadReport() {
    if (this.chart) this.chart.destroy();

    switch (this.selectedReport) {

      case 'treatmentDemand':
        this.setData(
          ['Root Canal', 'Filling', 'Scaling', 'Extraction'],
          [120, 95, 60, 44],
          ['Treatment', 'Count'],
          [
            { Treatment: 'Root Canal', Count: 120 },
            { Treatment: 'Filling', Count: 95 },
            { Treatment: 'Scaling', Count: 60 },
            { Treatment: 'Extraction', Count: 44 }
          ],
          'bar'
        );
        break;

      case 'departmentDemand':
        const departments = [
          'Prosthodontics', 'Periodontology', 'Endodontics', 'Surgery',
          'Orthodontics', 'Paedodontics', 'Radiology', 'Pathology', 'Public Health'
        ];
        const deptData = departments.map(() => Math.floor(Math.random() * 100 + 20));

        this.setData(
          departments,
          deptData,
          ['Department', 'Patients'],
          departments.map((d, i) => ({ Department: d, Patients: deptData[i] })),
          'doughnut'
        );
        break;

      case 'treatmentStatus':
        const statusRows = [
          { Department: 'Endodontics', Completed: 60, Ongoing: 20, Cancelled: 5 },
          { Department: 'Orthodontics', Completed: 45, Ongoing: 30, Cancelled: 8 },
          { Department: 'Surgery', Completed: 70, Ongoing: 15, Cancelled: 12 }
        ];
        this.setMultipleData(statusRows, 'Department', ['Completed', 'Ongoing', 'Cancelled'], 'bar', true);
        break;

      case 'billing':
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
        const revenue = months.map(() => Math.floor(Math.random() * 60000 + 20000));

        this.setData(
          months,
          revenue,
          ['Month', 'Revenue'],
          months.map((m, i) => ({ Month: m, Revenue: revenue[i] })),
          'line'
        );
        break;

      case 'doctorWise':
        this.setData(
          ['Dr. A', 'Dr. B', 'Dr. C', 'Dr. D'],
          [130, 110, 95, 70],
          ['Doctor', 'Procedures'],
          [
            { Doctor: 'Dr. A', Procedures: 130 },
            { Doctor: 'Dr. B', Procedures: 110 },
            { Doctor: 'Dr. C', Procedures: 95 },
            { Doctor: 'Dr. D', Procedures: 70 }
          ],
          'bar'
        );
        break;

      case 'paymentModes':
        this.setData(
          ['Cash', 'UPI', 'Card'],
          [210, 180, 120],
          ['Mode', 'Count'],
          [
            { Mode: 'Cash', Count: 210 },
            { Mode: 'UPI', Count: 180 },
            { Mode: 'Card', Count: 120 }
          ],
          'pie'
        );
        break;

      case 'ageGroup':
        this.setData(
          ['0-12', '13-19', '20-35', '36-50', '50+'],
          [40, 55, 140, 120, 70],
          ['Age Group', 'Patients'],
          [
            { 'Age Group': '0-12', Patients: 40 },
            { 'Age Group': '13-19', Patients: 55 },
            { 'Age Group': '20-35', Patients: 140 },
            { 'Age Group': '36-50', Patients: 120 },
            { 'Age Group': '50+', Patients: 70 }
          ],
          'bar'
        );
        break;

      case 'newVsReturning':
        const months2 = ['Jan', 'Feb', 'Mar', 'Apr'];
        const newPatients = months2.map(() => Math.floor(Math.random() * 100));
        const returning = months2.map(() => Math.floor(Math.random() * 80));

        this.setMultipleData(
          months2.map((m, i) => ({ Period: m, New: newPatients[i], Returning: returning[i] })),
          'Period',
          ['New', 'Returning'],
          'line'
        );
        break;

      case 'cancellations':
        this.setData(
          ['Endodontics', 'Orthodontics', 'Surgery'],
          [12, 20, 15],
          ['Department', 'Cancelled'],
          [
            { Department: 'Endodontics', Cancelled: 12 },
            { Department: 'Orthodontics', Cancelled: 20 },
            { Department: 'Surgery', Cancelled: 15 }
          ],
          'bar'
        );
        break;

      case 'revenueShare':
        const dept = ['Endodontics', 'Orthodontics', 'Surgery'];
        const rev = [400000, 320000, 230000];

        this.setData(
          dept,
          rev,
          ['Department', 'Revenue'],
          dept.map((d, i) => ({ Department: d, Revenue: rev[i] })),
          'pie'
        );
        break;
    }
  }

  // For Single value charts
  setData(labels: any[], values: any[], cols: string[], table: any[], type: any) {
    this.tableColumns = cols;
    this.tableData = table;

    const ctx = this.chartCanvas.nativeElement.getContext('2d')!;
    this.chart = new Chart(ctx, {
      type,
      data: {
        labels,
        datasets: [{ data: values }]
      }
    });
  }

  // For multiple value charts (stacked or multi-line)
  setMultipleData(rows: any[], labelKey: string, valueKeys: string[], type: any, stacked = false) {
    this.tableColumns = [labelKey, ...valueKeys];
    this.tableData = rows;

    const labels = rows.map(r => r[labelKey]);
    const datasets = valueKeys.map(key => ({
      label: key,
      data: rows.map(r => r[key])
    }));

    const ctx = this.chartCanvas.nativeElement.getContext('2d')!;
    this.chart = new Chart(ctx, {
      type,
      data: { labels, datasets },
      options: {
        scales: stacked ? { x: { stacked: true }, y: { stacked: true } } : {}
      }
    });
  }

  // Export PDF
  downloadPDF() {
    const report = document.getElementById('reportContent');
    html2canvas(report!).then(canvas => {
      const img = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(img);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Report.pdf');
    });
  }

  // Export CSV
  downloadCSV() {
    let csv = this.tableColumns.join(',') + '\n';
    this.tableData.forEach(row => {
      csv += this.tableColumns.map(col => row[col]).join(',') + '\n';
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = this.selectedReport + '.csv';
    link.click();
  }

  formatDate(d: Date) {
    return d.toISOString().split('T')[0];
  }
}
