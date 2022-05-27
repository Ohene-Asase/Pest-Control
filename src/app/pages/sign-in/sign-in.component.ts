import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      this.router.navigate(['/home'])
      console.log("trial")
      
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
