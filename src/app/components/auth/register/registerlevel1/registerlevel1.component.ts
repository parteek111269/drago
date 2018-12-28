import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-registerlevel1',
  	templateUrl: './registerlevel1.component.html',
  	styleUrls: ['./registerlevel1.component.css']
})
export class Registerlevel1Component implements OnInit {
	private registerForm: FormGroup;
	private confirmationForm: FormGroup;
	private unsubscribeAll: Subject<any>;
	private passwordType: string = 'password';
	private confirmPasswordType: string = 'password';
	constructor(private fb: FormBuilder){
		this.unsubscribeAll = new Subject();
		// registeration form
		this.registerForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            passwordConfirm: ['', [Validators.required, confirmPasswordValidator]],
            terms: ['', Validators.required]
        });
        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.registerForm.get('password').valueChanges.pipe(takeUntil(this.unsubscribeAll)).subscribe(() => {
            this.registerForm.get('passwordConfirm').updateValueAndValidity();
        });
	}
	ngOnInit(): void {}
	ngOnDestroy(): void {
		// Unsubscribe from all subscriptions
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
	}
	private passwordVisibility(flag: string) {
		switch(flag){
			case 'password':
				this.passwordType === 'password' ? this.passwordType = 'text' : this.passwordType = 'password';
			break;
			case 'confirm_password':
				this.confirmPasswordType === 'password' ? this.confirmPasswordType = 'text' : this.confirmPasswordType = 'password';
			break;	
		}
    }
	private getOtp(){}
}
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
	if ( !control.parent || !control ){return null;}
	const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');
	if ( !password || !passwordConfirm ){return null;}
	if ( passwordConfirm.value === '' ){return null;}
	if ( password.value === passwordConfirm.value ){return null;}
	return {'passwordsNotMatching': true};
};
