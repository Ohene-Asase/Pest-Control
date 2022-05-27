import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';


const routes: Routes = [
  { path: '', component: SignUpComponent }
];

@NgModule({
  declarations: [
    SignUpComponent,
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class SignUpModule { }
