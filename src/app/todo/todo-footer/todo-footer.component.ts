import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filter/filter.action';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { SetFiltroAction } from '../../filter/filter.action';
import { Todo } from '../model/todo.model';
import { EliminarTodosCompletadosAction } from '../todo.action';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos: fromFilter.filtrosValidos[] = ['completados','pendientes','todos'];
  filtroActual: fromFilter.filtrosValidos; // contiene el filtro actual 
  pendientes: number; // numero de todos que no estan completados
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      // escuchamos si hay algun cambio de filtro
      this.filtroActual = state.filtro;
      this.calcularPendientes(state.todos);
    });
  }

  cambiarFiltro(filter: fromFilter.filtrosValidos) {
    // cambiamos de filtro 
    const action = new SetFiltroAction(filter);
    this.store.dispatch(action);
  }

  calcularPendientes(todos: Todo[]) {
    this.pendientes = todos.filter( todo => {
      return todo.completado === false
    }).length;
  }

  limpiarCompletados() {
    const action = new EliminarTodosCompletadosAction()
    this.store.dispatch(action);
  }


}
