import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
signInForm:FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService
              
    ) { }

  ngOnInit(): void {
    this.setUpForm();
  }

 
  async signIn(credentials: any) {
    try {
      console.log(credentials)
      let userData = await this.authService.login(credentials)
      if (!userData) return
      this.authService.setUser(userData)
      this.authService.announceLogin(true)
      this.toastr.success("Signed in Sucessfully")
      this.router.navigate(['/appointment'])    
    } catch (error) {
      console.log(error);
    } finally {  }
  }
  
   setUpForm(): void {
     this.signInForm = this.fb.group({
       email:['',Validators.required],
       password:['',Validators.required],
       userName:['',Validators.required]
     })
   }
}
