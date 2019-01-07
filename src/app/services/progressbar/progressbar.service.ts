import { Injectable } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProgressBarService {
    // Private
    private _bufferValue: BehaviorSubject<number>;
    private _mode: BehaviorSubject<string>;
    private _value: BehaviorSubject<number>;
    private _visible: BehaviorSubject<boolean>;

    constructor(private _router: Router) {
        // Initialize the service
        this._init();
    }

    // buffer value
    get bufferValue(): Observable<any> {
        return this._bufferValue.asObservable();
    }

    setBufferValue(value: number): void {
        this._bufferValue.next(value);
    }

    // mode
    get mode(): Observable<any> {
        return this._mode.asObservable();
    }

    setMode(value: 'determinate' | 'indeterminate' | 'buffer' | 'query'): void {
        this._mode.next(value);
    }

    // value
    get value(): Observable<any> {
        return this._value.asObservable();
    }

    setValue(value: number): void {
        this._value.next(value);
    }

    // visible
    get visible(): Observable<any> {
        return this._visible.asObservable();
    }

    private _init(): void {
        // Initialize the behavior subjects
        this._bufferValue = new BehaviorSubject(0);
        this._mode = new BehaviorSubject('indeterminate');
        this._value = new BehaviorSubject(0);
        this._visible = new BehaviorSubject(false);

        // Subscribe to the router events to show/hide the loading bar
        // this._router.events
        // .pipe(filter((event) => event instanceof NavigationStart))
        // .subscribe(() => {
        //     this.show();
        // });

        // this._router.events
        // .pipe(filter((event) => event instanceof NavigationEnd || event instanceof NavigationError || event instanceof NavigationCancel))
        // .subscribe(() => {
        //     this.hide();
        // });
    }

    // Show the progress bar
    show(): void {
        this._visible.next(true);
    }

    // Hide the progress bar
    hide(): void {
        this._visible.next(false);
    }
}

