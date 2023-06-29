import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'your-dialog',
  templateUrl: './userdialog.component.html',
  // template: 'passed in {{ data.name }}',
  styleUrls: ['./userdialog.component.css']
})
export class UserdialogComponent {
  userDetails : any
  constructor (@Inject(MAT_DIALOG_DATA) public data : any, public dialogRef: MatDialogRef<UserdialogComponent>) {
    console.log('userData :>> ', data);
    this.userDetails = data
  }
  closeModal() {
    this.dialogRef.close();
  }

}
