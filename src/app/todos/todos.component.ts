import { Component } from '@angular/core';
import { Todo } from '../services/todo.module';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
       todos: Todo[]=[];
       todo: Todo= new Todo();
      showValidationErrors: boolean = false;

       constructor(private service: DataService, private dialog: MatDialog){
        this.todos= this.service.getAllTodos();

       }
       
       onSubmitForm(form:NgForm){
        if(form.invalid){
          // return alert("Invalid form!");
          this.showValidationErrors=true;
         }
           console.log("submitted");
           console.log(form)
           this.service.addTodos({text:form.value.text, completed:false});
           this.showValidationErrors=false;
           form.reset();
          
       }

       toggleCompleted(todo: Todo) {
        todo.completed = !todo.completed;
      }

      editTodo(todo:Todo){
        const index=this.todos.indexOf(todo);
        let dialogRef=this.dialog.open(EditTodoDialogComponent,{
          width:'700px',
          data:todo
        });
        console.log("edit clicked")
        dialogRef.afterClosed().subscribe((result)=>{
            if(result){
              this.service.updateTodo(index , result);
            }
        })
      }

      deleteTodo(todo:Todo){
        const index=this.todos.indexOf(todo);
        this.service.delete_Todo(index);

      }
}
