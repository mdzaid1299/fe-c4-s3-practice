import { Component, OnInit } from '@angular/core';
import { FormBuilder,AbstractControl, Validators } from '@angular/forms';
  import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.css']
})
export class LiveStreamComponent implements OnInit {

  liveStream=this.fb.group({
    eventTitle: ['',[Validators.required,Validators.maxLength(100)]],
    fromDate:['',Validators.required],
    fromTime:['',Validators.required],
    toDate:['',Validators.required],
    toTime:['',Validators.required],
    description:[''],
    guestEmails:['',Validators.required]
  },{ Validators: [this.checkIfGuestEmailsAreValid] })
  
  times=["00:00","00:15","00:30","00:45","01:00","01:15","01:30","01:45","02:00","02:15","02:30","02:45","03:00","03:15","03:30","03:45","04:00","04:15",
        "04:30","04:45","05:00","05:15","05:30","05:45","06:00","06:15","06:30","06:45","07:00","07:15","07:30","07:45","08:00",
        "08:15","08:30","08:45","09:00","09:15","09:30","09:45","10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45","12:00",
        "12:15","12:30","12:45","13:00","13:15","13:30","13:45","14:00","14:15","14:30","14:45","15:00","15:15","15:30","15:45","16:00",
        "16:15","16:30","16:45","17:00","17:15","17:30","17:45","18:00","18:15","18:30","18:45","19:00","19:15","19:30","19:45","20:00",
        "20:15","20:30","20:45","21:00","21:15","21:30","21:45","22:00","22:15","22:30","22:45","23:00","23:15","23:30","23:45"];
  
  minDate: Date = new Date();
  minDate1: Date = new Date();
  
  constructor (private fb: FormBuilder, private _snackBar: MatSnackBar){this.minDate.setDate(this.minDate.getDate() + 1); 
    this.minDate1.setDate(this.minDate1.getDate() + 1);}
  
  get eventTitle() { return this.liveStream.get("eventTitle") }
  get fromDate() { return this.liveStream.get("fromDate") }
  get fromTime() { return this.liveStream.get("fromTime") }
  get toDate() { return this.liveStream.get("toDate") }
  get toTime() { return this.liveStream.get("toTime") }
  get description() { return this.liveStream.get("description") }
  get guestEmails() { return this.liveStream.get("guestEmails") }
  
  
  guestList:string[]|undefined=[];
  ngOnInit(): void {
    this.liveStream.controls['guestEmails'].valueChanges.subscribe( (guestEmails) => { this.guestList = guestEmails?.split(',');
    });
    }
  
    checkIfGuestEmailsAreValid(c: AbstractControl) {
      if (c.value !== '') {
        const emailString = c.value;
        const emails = emailString.split(',').map((e: string) => e.trim());
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const anyInvalidEmail = emails.every((e: string) => e.match(emailRegex) !== null);
        if (!anyInvalidEmail) {
          return { checkIfGuestEmailsAreValid: false }
        }
      }
      return null;
    }
  
    onSubmit(){
      this._snackBar.open('Congrats, you have submitted the form!!', 'success', {​
        duration: 5000,​
         panelClass: ['mat-toolbar', 'mat-primary']​
       }) 
    }

}
