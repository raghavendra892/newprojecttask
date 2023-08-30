import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.scss']
})
export class NewformComponent implements OnInit {
  employeeForm!: FormGroup;
  emptyarray: Array<any> = [];
  obj: any;
  getobj : any;
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
    })
  }
  onSubmit() {
   console.log(this.employeeForm.value);
    // this.obj = this.employeeForm.value;
    
    //console.log(this.obj);

    this.emptyarray.push(this.employeeForm.value)
    localStorage.setItem('userobj', JSON.stringify(this.emptyarray))
   
    console.log(this.emptyarray);

    // this.getobj = localStorage.getItem('userobj')
    // console.log('fromLocalstorage',this.getobj);
    // this._userService.employeesubData$.next(JSON.parse(this.getobj))
  }
}
