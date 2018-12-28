import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
	private registerForm: FormGroup;
	private confirmationForm: FormGroup;
	private unsubscribeAll: Subject<any>;
	constructor(private fb: FormBuilder){
		this.unsubscribeAll = new Subject();
		// registeration form
		this.registerForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            passwordConfirm: ['', [Validators.required, confirmPasswordValidator]]
        });
        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.registerForm.get('password').valueChanges.pipe(takeUntil(this.unsubscribeAll)).subscribe(() => {
            this.registerForm.get('passwordConfirm').updateValueAndValidity();
        });

        // confirmation form
        this.confirmationForm = this.fb.group({
            otp1: ['', Validators.required],
            otp2: ['', Validators.required],
            otp3: ['', Validators.required],
            otp4: ['', Validators.required]
        });
	}
	ngOnInit(): void {}
	ngOnDestroy(): void {
		// Unsubscribe from all subscriptions
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
	}
	private next(e: any, el: any) {
		if(e.keyCode === 8){
			// return
		}else{
			// allow focus on next el if input is 0-9
			if((e.keyCode <= 57 && e.keyCode >= 48)){
				el.focus();
				if(this.confirmationForm.status === 'VALID'){
					this.confirmRegister(el)
				}
			}
		}
  	}
  	private confirmRegister(element: any){
  		element.blur();
  		console.log('register');
  	}
}
// Confirm password validator
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
	if ( !control.parent || !control ){return null;}
	const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');
	if ( !password || !passwordConfirm ){return null;}
	if ( passwordConfirm.value === '' ){return null;}
	if ( password.value === passwordConfirm.value ){return null;}
	return {'passwordsNotMatching': true};
};
