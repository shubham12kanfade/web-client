import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductServiceService } from '../../home/product-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  RegForm: FormGroup;
  loginCheck: boolean = true;
  reg: boolean = false;
  @Output() close = new EventEmitter<any>();
  constructor(private productService: ProductServiceService) {
    this.RegForm = new FormGroup({
      mobileNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.LoginForm = new FormGroup({
      mobileNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      otp: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    this.productService.getUser(this.LoginForm.value).then(res => {
      console.log(res, res.data.firstName);
      if (res.data.length != 0) {
        this.close.emit(true);
        this.productService.userName(res.data.firstName);
      }
      else {
        alert("opps Login Faild");
      }
    })
      .catch(err => {
        console.error(err);
      })
  }

  closeModel(){
    this.close.emit(true);
  }

  signUp() {
    this.productService.registerUser(this.RegForm.value).then(res => {
      console.log(res);
      this.reg = false;
      this.loginCheck = true;
    })
      .catch(err => {
        console.error(err);
      })
  }
  signUpFunction() {
    this.reg = true;
    this.loginCheck = false;
  }
  ngOnInit() {
  }
}
