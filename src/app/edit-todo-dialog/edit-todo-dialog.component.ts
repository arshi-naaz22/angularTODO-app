import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';
import { Todo } from '../services/todo.module';
import {Inject} from '@angular/core'
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.css'],
  
})
export class EditTodoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo :Todo
  ){ }

  ngOnInit():void{}
  close(){
    this.dialogRef.close();
  }

  onFormSubmit(form:NgForm){

    if(form.invalid){
      return;
    }
    const updateTodo={
      ...this.todo,
      ...form.value
     }
  
     this.dialogRef.close(updateTodo);
  }
  

}
