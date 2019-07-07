import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as fromFilter from './filter.action' 
@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtroSeleccionado: fromFilter.filtrosValidos): any {
    switch(filtroSeleccionado) {
      case 'completados': 
      return todos.filter(todo => { return todo.completado === true})
      case 'pendientes':
        return todos.filter(todo => { return todo.completado === false})
      default:
        return todos;
    }
  }

}
