import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  LeaveForm!: FormGroup;
  

  constructor(private _dialogRef: MatDialogRef<FormComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public dialogData: any) { _dialogRef.disableClose = true }


  ngOnInit(): void {
    this.LeaveForm = new FormGroup({
      employeename: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
    })
  }

  closedDialog() {
    this._dialogRef.close();
  }

  onSubmit() {
    console.log(this.LeaveForm.value);

    let obj = {
      ...this.LeaveForm.value,
      LeaveApplyp: localStorage.getItem('userName'),
      // status : Istatus.Pending,
      totalLeavedays: Math.ceil((new Date(this.LeaveForm.value.EndDate).getTime() - new Date(this.LeaveForm.value.startDate).getTime()) / 86400000) + 1
    }
    console.log(obj);

    // this.leaveService.AddLeave(obj)
    // .subscribe(res=> {
    //   console.log(res);


    // })

  }

}
