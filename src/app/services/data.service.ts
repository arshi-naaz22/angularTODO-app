import { Injectable } from '@angular/core';
import { Todo } from './todo.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  todo: Todo[] = [
    {
      text:"Testing to be done by evening", completed:true
    },
    {
      text:"Error while deployment", completed:false
    },
    {
      text:"Need to ask for permission for leave from Nikhil sir", completed:true
    },
    {
      text:"Need to ask for some ticks from Nikhil sir", completed:false
    }
  ];

  getAllTodos(){
    return this.todo;
  }

  addTodos(add_todo:Todo){
    this.todo.push(add_todo);
  }

  updateTodo(index:number , updateTodo:Todo){
    this.todo[index]=updateTodo;
  }
   
  delete_Todo(index:number){
    this.todo.splice(index,1);
  }
}
