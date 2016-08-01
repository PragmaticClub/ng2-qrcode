/// <reference path="../ng2-qrcode/ng2-qrcode.d.ts" />
import { ElementRef, OnInit } from '@angular/core';
export declare class QRCodeComponent implements OnInit {
    private el;
    qrdata: String;
    size: Number;
    level: String;
    colordark: String;
    colorlight: String;
    usesvg: Boolean;
    constructor(el: ElementRef);
    ngOnInit(): void;
}
