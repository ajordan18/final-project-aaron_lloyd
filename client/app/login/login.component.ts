    
import { Component, OnInit } from '@angular/core';
//import { LoginModel } from '../models/login.model';
import { User } from '../services/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
//import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //user: LoginModel = new LoginModel();
  user: User = new User('email','username','password',[]); 
  loginForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder,
    private _UsersService: UsersService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'username': [this.user.userName, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20)
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }

  onLoginSubmit() {
    alert(this.user.email + ' ' + this.user.password);
    var userEmail = this.user.email;
    var userName = this.user.userName;
    var userPassword = this.user.password

    this._UsersService.createUser(userEmail, userName, userPassword);

  }

}
