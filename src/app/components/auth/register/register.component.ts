import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
	public registerForm: FormGroup;
	private unsubscribeAll: Subject<any>;
	constructor(private fb: FormBuilder){
		this.unsubscribeAll = new Subject();
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
	}
	ngOnInit(): void {}
	ngOnDestroy(): void {
		// Unsubscribe from all subscriptions
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
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
