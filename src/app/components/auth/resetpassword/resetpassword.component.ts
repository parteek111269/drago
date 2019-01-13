import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../animation/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
  animations: fuseAnimations
})
export class ResetpasswordComponent implements OnInit {
	public resetPasswordForm: FormGroup
	constructor(private fb: FormBuilder) {
		this.resetPasswordForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: [''],
			passwordConfirm: ['']
        });
	}
	ngOnInit(): void {}
}
