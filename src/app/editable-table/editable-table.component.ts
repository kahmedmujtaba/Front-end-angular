import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.css']
})
export class EditableTableComponent implements OnInit {

  constructor() {
    console.log('About page working');
  }

  ngOnInit() {
  }

  name = 'Ahmed';
  users = [
    {name:"Ahmed",age:"31", email:"kahmedm@gmail.com",mstatus:"married"},
    {name:"Mujtaba",age:"32", email:"kamujtaba@gmail.com",mstatus:"married"},
    {name:"Ahmed Mujtaba",age:"31", email:"kahmedmujtaba@gmail.com",mstatus:"married"},
    {name:"foo",age:"56", email:"foo@gmail.com",mstatus:"foo"},
    ];
    editedRecord = null;
    update={};

  editRecord(user){
    this.editedRecord = user;
  }
  saveRecord(user){
   // this.users.splice(user.age,1);
   this.editedRecord = null;
  }
  deleteRecord(user){
    if (confirm('Are you sure you want to Delete this record?')) {
      this.users.splice(user,1);
  }
  }
  cancelEdit(user){
    this.editedRecord = !this.editedRecord;
  }

}
