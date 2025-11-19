import { Component, OnInit } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'app-qr-payment',
  templateUrl: './qr-payment.component.html',
  styleUrls: ['./qr-payment.component.scss']
})
export class QrPaymentComponent implements OnInit {
  amount: number = 5;
  qrImage: string = '';
  paymentDone = false;
  loading = false;

  razorpayLink: string = 'https://razorpay.me/@shaybansalimkhan';

  ngOnInit(): void {
    this.generateQr();
  }

  generateQr() {
    const qrData = `${this.razorpayLink}`;
    QRCode.toDataURL(qrData)
      .then((url: string) => {
        this.qrImage = url;
      })
      .catch((err:any) => console.error('QR Error:', err));
  }

  updateAmount() {
    this.generateQr();
  }

  markPaymentDone() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.paymentDone = true;
    }, 1500);
  }
}
