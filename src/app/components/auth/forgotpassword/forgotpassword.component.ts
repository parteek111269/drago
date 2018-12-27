import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
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
