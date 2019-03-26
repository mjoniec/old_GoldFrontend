/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxFormComponent implements OnChanges {
    attrPadding: jqwidgets.FormPadding;
    attrBackgroundColor: string;
    attrBorderColor: string;
    attrValue: any;
    attrTemplate: Array<jqwidgets.FormTemplateItem>;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxForm;
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
    padding(arg?: jqwidgets.FormPadding): any;
    backgroundColor(arg?: string): any;
    borderColor(arg?: string): any;
    value(arg?: any): any;
    template(arg?: Array<jqwidgets.FormTemplateItem>): any;
    getInstance(): any;
    refresh(): void;
    destroy(): void;
    hideComponent(name: string): void;
    showComponent(name: string): void;
    val(value?: any): any;
    submit(action?: string, target?: string, method?: string): void;
    getComponentByName(name?: string): any;
    onFormDataChange: EventEmitter<{}>;
    onButtonClick: EventEmitter<{}>;
    __wireEvents__(): void;
}
