import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	private loginForm: FormGroup;
    private passwordType: string = 'password';
  	constructor(private fb: FormBuilder){
  		this.loginForm = this.fb.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
  	}
	ngOnInit(): void{}
    private passwordVisibility() {
        this.passwordType === 'password' ? this.passwordType = 'text' : this.passwordType = 'password';
    }
}
