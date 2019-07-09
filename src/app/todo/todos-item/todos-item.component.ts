import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as fromTodo from '../todo.action';
import { from } from 'rxjs';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('txtEditInput') txtEditInput: ElementRef;
  editando: boolean;

  checkField: FormControl;
  txtInput: FormControl;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required)
    this.checkField.valueChanges.subscribe( () => {
        console.log(this.todo.id)
        const accion = new fromTodo.CambiarEstadoAction(this.todo.id);
        this.store.dispatch(accion);
    })
  }

  editar() {
   this.editando = true;
   setTimeout(() => {
    this.txtEditInput.nativeElement.select();
   },1)
   
  }
  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid) {
      return;
    }
    if (this.todo.texto === this.txtInput.value) {
      return;
    }
    const accion = new fromTodo.EditarTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(accion);
  }

  eliminarTodo() {
    const accion = new fromTodo.EliminarTodoAction(this.todo.id);
    this.store.dispatch(accion);
  }

}
