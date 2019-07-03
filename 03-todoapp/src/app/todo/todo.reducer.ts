import * as fromTodo from './todo.action';
import { Todo } from './model/todo.model';

const todo1 = new Todo("hola1");
const todo2 = new Todo("hola2");

const estadoInicial: Todo[] = [todo1, todo2]

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {
    switch(action.type) {
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [ ...state, todo];
        default: 
            return state;
    }

}