import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChange } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  	selector: 'app-registerlevel2',
  	templateUrl: './registerlevel2.component.html',
  	styleUrls: ['./registerlevel2.component.css']
})
export class Registerlevel2Component implements OnInit, OnDestroy {
    @Input() startTimer: number;
    private isResendotpEnable: boolean = false;
    private timeleft: number;
	private confirmationForm: FormGroup;
  	constructor(private fb: FormBuilder) {
  		// confirmation form
        this.confirmationForm = this.fb.group({
            otp1: ['', Validators.required],
            otp2: ['', Validators.required],
            otp3: ['', Validators.required],
            otp4: ['', Validators.required],
            otp5: ['', Validators.required],
            otp6: ['', Validators.required]
        });
  	}
	ngOnInit(): void {}
	ngOnDestroy(): void {}
    private ngOnChanges(changes: SimpleChange): void{
        for (var propName in changes){
            var currentValue  = changes[propName].currentValue;
            if(currentValue === 'start timer') {
                this.otpTimer()
            }
        }
    }
    private otpTimer(): void {
        this.isResendotpEnable = false;
        this.timeleft = 60;
        var downloadTimer = setInterval(() => { 
             this.timeleft--;
            if(this.timeleft <= 0){
                this.isResendotpEnable = true;
                clearInterval(downloadTimer);
            }
        }, 1000);
    }
	private next(e: any, el: any): void {
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
  	private verifyOtp(element: any): void{
  		element.blur();
        var arr = Object.values(this.confirmationForm.value);
        var otp: string = ''
        for(var i = 0; i < arr.length; i++){
            otp = otp + arr[i]; 
        }
        console.log(otp);
  	}
}
