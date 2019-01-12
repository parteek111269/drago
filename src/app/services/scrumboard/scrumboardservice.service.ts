import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class ScrumboardserviceService implements Resolve<any> {
	boards: any[];
	routeParams: any;
	board: any;
	onBoardsChanged: BehaviorSubject<any>;
  	constructor(private http: HttpClient) {
  		// Set the defaults
        this.onBoardsChanged = new BehaviorSubject([]);
  	}
  	// resolver
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    	this.routeParams = route.params;
    	console.log(this.routeParams);
    	return new Promise((resolve, reject) => {
            Promise.all([
                this.getBoards()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }
    // get boards
    getBoards(): Promise<any> {
    	return new Promise((resolve, reject) => {
    		this.http.get('api/scrumboard').subscribe((res: any) => {
    			console.log(res);
    			this.boards = res;
    			// this.onBoardsChanged.next('asaa');
    			resolve(this.boards);
    		}, reject =>{
    			console.log('reject')
    		});
    	});
    }
}