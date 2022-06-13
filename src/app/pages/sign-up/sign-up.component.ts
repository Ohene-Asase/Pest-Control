import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 signUpForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService

    ) { }

  ngOnInit(): void {
    this.setupForm();
  }
  
   save(credentials){    
    let success =  this.authService.register(credentials)
      .subscribe((data)=> {
      if(success){
        this.toastr.success('Sign-up successfully')
      }
      },);
      this.router.navigate(['/sign-in']);
   
 }
  setupForm(): void {
    this.signUpForm = this.fb.group({
      id:0,
      email: ['', Validators.required],
      password:['', Validators.required],
      confirmPassword:['', Validators.required],
      userName:['', Validators.required],
      name:['', Validators.required]
    })
  }
}
