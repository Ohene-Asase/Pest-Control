import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: AppointmentComponent }
];

@NgModule({
  declarations: [
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
    
    RouterModule.forChild(routes)
  ],
  exports: [AppointmentComponent]
})
export class AppointmentModule { }
