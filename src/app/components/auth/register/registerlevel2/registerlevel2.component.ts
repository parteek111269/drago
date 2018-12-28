import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  	selector: 'app-registerlevel2',
  	templateUrl: './registerlevel2.component.html',
  	styleUrls: ['./registerlevel2.component.css']
})
export class Registerlevel2Component implements OnInit, OnDestroy {
	private confirmationForm: FormGroup;
  	constructor(private fb: FormBuilder) {
  		// confirmation form
        this.confirmationForm = this.fb.group({
            otp1: ['', Validators.required],
            otp2: ['', Validators.required],
            otp3: ['', Validators.required],
            otp4: ['', Validators.required]
        });
  	}
	ngOnInit():void {}
	ngOnDestroy(): void {}
	private next(e: any, el: any) {
		if(e.keyCode === 8){
			// return
		}else{
			// allow focus on next el if input is 0-9
			if((e.keyCode <= 57 && e.keyCode >= 48)){
				el.focus();
				if(this.confirmationForm.status === 'VALID'){
					this.verifyOtp(el)
				}
			}
		}
  	}
  	private verifyOtp(element: any){
  		element.blur();
  		console.log('register');
  	}
}
