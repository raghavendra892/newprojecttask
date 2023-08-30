import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  empArray: Array<any> = [];
  constructor(private _dialog: MatDialog, private _userService: UserService) { }
  newArray: Array<any> = [];
  newobjs: any;
  ngOnInit(): void {
    this._userService.getData()
      .subscribe(res => {
        this.empArray = res.map((ele: any) => ({ ...ele, age: Math.floor(Math.random() * 100) }))
        //console.log(this.empArray);
        // this._userService.employeesubData$.subscribe(res => {
        //   console.log(res);
        //   this.newArray = this.empArray.concat(res)
        //   console.log('newArray:----',this.newArray);

        // });
        
          this.newobjs = localStorage.getItem('userobj')
         // console.log(JSON.parse(this.newobjs.map(e=> e.age.)));
          
          this.newArray = this.empArray.concat(JSON.parse(this.newobjs))
          console.log(this.newArray);
        
      })
  }

  OpenDialogBox() {
    const dialogRef = this._dialog.open(FormComponent)

    dialogRef.afterClosed().subscribe(ele => {
      // console.log("Dialog is Closed")
    })
  }

}
