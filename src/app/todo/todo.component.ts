import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { CambiarAllEstadoAction } from './todo.action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado: boolean = false;
  constructor( private store: Store<AppState>) { }

  ngOnInit() {
  }

  cambiarEstadoTodos() {
    this.completado = ! this.completado
    const accion  = new CambiarAllEstadoAction(this.completado);
    this.store.dispatch(accion);
  }

}
