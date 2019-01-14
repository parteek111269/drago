import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fuseAnimations } from '../../../animation/animations';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: fuseAnimations
})
export class LoginComponent implements OnInit {
	public loginForm: FormGroup;
    public passwordType: string = 'password';
  	constructor(private fb: FormBuilder, private router: Router, private auth: AuthService){
        if(this.auth.isLoggedIn()){
            this.router.navigate(['/dashboard']);
        }
  		this.loginForm = this.fb.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
  	}
	ngOnInit(): void{}
    public passwordVisibility() {
        this.passwordType === 'password' ? this.passwordType = 'text' : this.passwordType = 'password';
    }
    public login(loginData: any) {
        if(loginData.status === 'VALID'){
            var subscription = this.auth.signin(loginData.value);
            if(subscription) {
                this.router.navigate(['/dashboard']);
            }
            // use below code for real world app
            // this.auth.signin(loginData.value).subscribe((res: any) => {
            //     console.log(res)
            // });
        }
    }
}
