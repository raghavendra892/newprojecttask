import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
 import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatSnackBarModule} from '@angular/material/snack-bar';

const Matmodule = [
  MatCardModule, MatRadioModule, MatFormFieldModule,MatIconModule,MatButtonModule,
  MatDialogModule,MatDatepickerModule,MatNativeDateModule,MatInputModule,MatSelectModule,
  MatSnackBarModule,
  


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...Matmodule
  ],
  exports : [
    ...Matmodule
  ]
})
export class MaterialModule { }
