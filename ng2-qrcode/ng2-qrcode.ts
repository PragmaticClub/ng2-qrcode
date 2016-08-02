/// <reference path="ng2-qrcode.d.ts"/>

import {
  Component,
  Input,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChange,
  ChangeDetectionStrategy
} from '@angular/core';

import * as QRCode from 'qrcodejs2';

function isValidQrCodeText(data: string) {
  return !(typeof data === 'undefined' || data === '');
}

@Component({
  selector: 'qrcode',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ''
})
export class QRCodeComponent implements OnChanges, OnInit {
  @Input() qrdata: string = '';
  @Input() size: number = 256;
  @Input() level: string = 'M';
  @Input() colordark: string = '#000000';
  @Input() colorlight: string = '#ffffff';
  @Input() usesvg: boolean = false;

  private qrcode: any;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    try {
      if (!isValidQrCodeText(this.qrdata)) {
        throw new Error('Empty QR Code data');
      }
      this.qrcode = new QRCode(this.el.nativeElement, {
        text: this.qrdata,
        width: this.size,
        height: this.size,
        colorDark: this.colordark,
        colorLight: this.colorlight,
        useSVG: this.usesvg,
        correctLevel: QRCode.CorrectLevel[this.level.toString()]
      });
    } catch (e) {
      console.error('Error generating QR Code: ' + e.message);
    }
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if (!this.qrcode) {
      return;
    }
    const qrData = changes['qrdata'];
    if (qrData && isValidQrCodeText(qrData.currentValue)) {
      this.qrcode.clear();
      this.qrcode.makeCode(qrData.currentValue);
    }
  }

}
