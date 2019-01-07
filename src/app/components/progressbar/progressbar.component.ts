import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// progress bar service
import { ProgressBarService } from '../../services/progressbar/progressbar.service';
@Component({
  	selector: 'app-progressbar',
  	templateUrl: './progressbar.component.html',
  	styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
	bufferValue: number;
    mode: 'determinate' | 'indeterminate' | 'buffer' | 'query';
    value: number;
    visible: boolean;
    // Private
    private _unsubscribeAll: Subject<any>;
	constructor(private progressBarService: ProgressBarService) {
		this._unsubscribeAll = new Subject();
	}
	ngOnInit(): void {
		// Subscribe to the progress bar service properties
		
		// Buffer value
		this.progressBarService.bufferValue
		.pipe(takeUntil(this._unsubscribeAll))
		.subscribe((bufferValue) => {
			this.bufferValue = bufferValue;
		});
		// mode
		this.progressBarService.mode
		.pipe(takeUntil(this._unsubscribeAll))
		.subscribe((mode) => {
			this.mode = mode;
		});
		// value
		this.progressBarService.value
		.pipe(takeUntil(this._unsubscribeAll))
		.subscribe((value) => {
			this.value = value;
		});
		// visible
		this.progressBarService.visible
		.pipe(takeUntil(this._unsubscribeAll))
		.subscribe((visible) => {
			this.visible = visible;
		});
	}

}
