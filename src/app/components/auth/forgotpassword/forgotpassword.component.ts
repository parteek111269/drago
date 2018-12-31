import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fuseAnimations } from '../../../animation/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
  animations: fuseAnimations
})
export class ForgotpasswordComponent implements OnInit {
	public forgotPasswordForm: FormGroup;
	constructor(private fb: FormBuilder, private router: Router){
		if(localStorage.isloggedIn){
            this.router.navigate(['/dashboard']);
        }
		this.forgotPasswordForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]]
        });
	}
	ngOnInit(): void {

	}
}
