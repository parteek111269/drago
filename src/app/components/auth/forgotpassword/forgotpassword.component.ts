import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fuseAnimations } from '../../../animation/animations';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
  animations: fuseAnimations
})
export class ForgotpasswordComponent implements OnInit {
	public forgotPasswordForm: FormGroup;
	constructor(private fb: FormBuilder){
		this.forgotPasswordForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]]
        });
	}
	ngOnInit(): void {

	}
}
