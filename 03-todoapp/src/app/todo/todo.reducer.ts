import * as fromTodo from './todo.action';
import { Todo } from './model/todo.model';

const todo1 = new Todo("hola1");
const todo2 = new Todo("hola2");

const estadoInicial: Todo[] = [todo1, todo2]

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {
    switch (action.type) {
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];
        case fromTodo.CAMBIAR_ESTADO:
            return state.map(todoEdit => {
                if (todoEdit.id == action.id) {
                    return { ...todoEdit, completado: !todoEdit.completado }
                } else {
                    return todoEdit;
                }
            });
        case fromTodo.EDITAR_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id == action.id) {
                    return { ...todoEdit, texto: action.texto }
                } else {
                    return todoEdit;
                }
            });
        case fromTodo.ELIMINAR_TODO:
            return state.filter( todo => { return todo.id !== action.id});
        default:
            return state;
    }

}