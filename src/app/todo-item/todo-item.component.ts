import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../services/todo.module';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {


  @Input() todo!: Todo;

  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

  constructor(){}

  onTodoClicked() {
    this.todoClicked.emit()
    // console.log("todo item clicked")
  }

  onEditClicked(){
    this.editClicked.emit();
  }

  onDeleteClicked(){
     this.deleteClicked.emit();
  }
}
