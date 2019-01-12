import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '../../animation/animations';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ScrumboardserviceService } from '../../services/scrumboard/scrumboardservice.service';

@Component({
  	selector: 'app-scrumboard',
  	templateUrl: './scrumboard.component.html',
  	styleUrls: ['./scrumboard.component.css'],
  	animations: fuseAnimations,
  	encapsulation: ViewEncapsulation.None
})
export class ScrumboardComponent implements OnInit {
	private boards: any[];
	private _unsubscribeAll: Subject<any>;
	constructor(private scrumboardService: ScrumboardserviceService) {
		// Set the private defaults
        this._unsubscribeAll = new Subject();
	}

  	ngOnInit(): void {
  		this.getBoards();
  		this.scrumboardService.getBoards();
  	}
  	ngOnDestroy(): void {
  		// Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
  	}
  	getBoards() {
  		this.scrumboardService.onBoardsChanged
  		.pipe(takeUntil(this._unsubscribeAll))
  		.subscribe((data: any) => {
  			console.log(data)
  		})
  	}
}
