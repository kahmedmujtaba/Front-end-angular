import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.css']
})
export class EditableTableComponent implements OnInit {
  //variables
  name = 'Ahmed';
  users =[];
  editedRecord = null;

  //conctructor and onInit
  
  constructor(private userService: UserService) {
    console.log();
  }

  ngOnInit() {
    //this.users = this.userService.getUserData(); 
    this.userService.getUserData( ).subscribe(response => {
      this.users= response;
    });
  }

  //functions
  editRecord(user){
    this.editedRecord = user;
  }
  saveRecord(user){
   this.editedRecord = null;
  }
  deleteRecord(user){
    if (confirm('Are you sure you want to Delete this record?')) { //confirm dialog before delete
      this.users.splice(user,1);
    }
  }
  cancelEdit(user){
    this.editedRecord = !this.editedRecord;
  }

}
