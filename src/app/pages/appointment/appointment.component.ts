import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
appointmentForm: FormGroup
  
constructor(private fb: FormBuilder,
            private appointmentService: AppointmentService,
            private toastr: ToastrService,
            private router: Router
  ) { }

  ngOnInit(): void {
    this.setupForm();
  }
 async bookAppointment(appointment): Promise<any>{
  try {
    let success  = await this.appointmentService.appointment(appointment)
    if(success){
      this.toastr.success("Appointment sucessfully book, An email would be sent to you");
      this.router.navigate(['/home'])
    }
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
