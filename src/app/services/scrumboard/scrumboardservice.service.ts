import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ScrumboardserviceService implements Resolve<any> {
	public boards: any[];
	public routeParams: any;
	public board: any;
	public onBoardsChanged: BehaviorSubject<any>;
	constructor(public http: HttpClient) {
		// Set the defaults
		this.onBoardsChanged = new BehaviorSubject([]);
	}
	// resolver
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
		this.routeParams = route.params;
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
			let url = environment.baseUrl + environment.apiRoute.scrumboard;
			this.http.get(url).subscribe((res: any) => {
				this.boards = res;
				this.onBoardsChanged.next(this.boards);
				resolve(this.boards);
			}, reject => {
				console.log(reject);
			});
		});
	}
}