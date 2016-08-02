/// <reference path="../ng2-qrcode/ng2-qrcode.d.ts" />
import { ElementRef, OnChanges, OnInit, SimpleChange } from '@angular/core';
export declare class QRCodeComponent implements OnChanges, OnInit {
    private el;
    qrdata: string;
    size: number;
    level: string;
    colordark: string;
    colorlight: string;
    usesvg: boolean;
    private qrcode;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
}
