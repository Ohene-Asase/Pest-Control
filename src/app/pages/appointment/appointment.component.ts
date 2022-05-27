import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
appointmentForm: FormGroup
  
constructor(private fb: FormBuilder,
            private appointmentService: AppointmentService
  ) { }

  ngOnInit(): void {
    this.setupForm();
  }
 async bookAppointment(appointment): Promise<any>{
  try {
    let success  = await this.appointmentService.appointment(appointment)
  } catch (error) {
    
  }
 }
  setupForm(): void {
    this.appointmentForm = this.fb.group({
      id:0,
      customerName:['',Validators.required],
      email:['', Validators.required],
      phoneNumber:['',Validators.required],
      location:['',Validators.required],
      note:['',Validators.required]
    })
  }

}
