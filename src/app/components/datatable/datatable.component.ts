import { Component } from '@angular/core';
import userList from "../../data/users.json"
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { UserdialogComponent } from '../userdialog/userdialog.component';

@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  users: any
  rows : any
  constructor(private dialogRef:MatDialog) {

  }
  ngOnInit(): void {
    this.users = this.getData()
    this.rows = this.getData()
  }
  getData() {
    return userList
  }
  Delete(user : any){
    console.log('id :>> ',user);
    this.rows = this.users.filter((item : any)=>item.id !== user.id)
    this.users = this.users.filter((item : any)=>item.id !== user.id)
  }
  search(event : any){
    console.log('email :>> ', event);
    if(!event.target.value){
      return this.rows = this.users
    }
    this.rows = this.users.filter((item : any)=>{
     return item?.email.toLowerCase().includes(event.target.value.toLowerCase())
    })
  }
  details(userData : any){
    console.log('userData :>> ', userData);
    // if(!this.dialogRef.openDialogs){
      this.dialogRef.open(UserdialogComponent,{data : userData})
    // }
    
  }
}
