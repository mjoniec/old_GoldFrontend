/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxLinearGaugeComponent implements OnChanges {
    attrAnimationDuration: number;
    attrBackground: jqwidgets.LinearGaugeBackground;
    attrColorScheme: string;
    attrDisabled: boolean;
    attrEasing: any;
    attrInt64: boolean;
    attrLabels: object;
    attrMin: number;
    attrMax: number;
    attrOrientation: any;
    attrPointer: jqwidgets.LinearGaugePointer;
    attrRangesOffset: number;
    attrRangeSize: number | string;
    attrRanges: Array<jqwidgets.LinearGaugeRanges>;
    attrShowRanges: boolean;
    attrScaleStyle: any;
    attrScaleLength: number | string;
    attrTicksOffset: Array<number | string>;
    attrTicksPosition: any;
    attrTicksMinor: jqwidgets.LinearGaugeTicks;
    attrTicksMajor: jqwidgets.LinearGaugeTicks;
    attrValue: number;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxLinearGauge;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    setOptions(options: any): void;
    animationDuration(arg?: number): any;
    background(arg?: jqwidgets.LinearGaugeBackground): any;
    colorScheme(arg?: string): any;
    disabled(arg?: boolean): any;
    easing(arg?: string): any;
    height(arg?: number | string): any;
    int64(arg?: boolean): any;
    labels(arg?: any): any;
    min(arg?: number): any;
    max(arg?: number): any;
    orientation(arg?: string): any;
    pointer(arg?: jqwidgets.LinearGaugePointer): any;
    rangesOffset(arg?: number): any;
    rangeSize(arg?: number | string): any;
    ranges(arg?: Array<jqwidgets.LinearGaugeRanges>): any;
    showRanges(arg?: boolean): any;
    scaleStyle(arg?: any): any;
    scaleLength(arg?: number | string): any;
    ticksOffset(arg?: Array<number | string>): any;
    ticksPosition(arg?: string): any;
    ticksMinor(arg?: jqwidgets.LinearGaugeTicks): any;
    ticksMajor(arg?: jqwidgets.LinearGaugeTicks): any;
    value(arg?: number): any;
    width(arg?: number | string): any;
    disable(): void;
    enable(): void;
    val(value?: number | string): any;
    onValueChanging: EventEmitter<{}>;
    onValueChanged: EventEmitter<{}>;
    __wireEvents__(): void;
}
